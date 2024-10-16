import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DataPoint {
  time: string;
  rewards: number;
}

interface ChartProps {
  data: DataPoint[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data.length === 0) return;

    const setDimensions = () => {
      const container = containerRef.current;
      if (!container) return { width: 800, height: 400 };

      const containerRect = container.getBoundingClientRect();
      const width = containerRect.width;
      const height = containerRect.width / 2;

      return { width, height };
    };

    const { width, height } = setDimensions();
    const margin = { top: 20, right: 40, bottom: 90, left: 70 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    d3.select(chartRef.current).selectAll("*").remove();

    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const parsedData = data.map((d) => ({
      time: new Date(d.time),
      rewards: d.rewards,
    }));

    const x = d3
      .scaleTime()
      .domain(d3.extent(parsedData, (d) => d.time) as [Date, Date])
      .range([0, chartWidth]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(parsedData, (d) => d.rewards) as number])
      .nice()
      .range([chartHeight, 0]);

    svg
      .append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(
        d3
          .axisBottom(x)
          .tickFormat((domainValue) =>
            d3.timeFormat("%m/%d/%y - %H:%M")(domainValue as Date)
          )
      )
      .selectAll("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-45)")
      .style("fill", "white")
      .style("font-size", "12px")
      .attr("dx", "-0.8em")
      .attr("dy", "0.15em");

    svg
      .append("g")
      .call(d3.axisLeft(y))
      .selectAll("text")
      .style("fill", "white");

    svg.selectAll(".domain").style("stroke", "white");
    svg.selectAll(".tick line").style("stroke", "white");

    svg
      .append("path")
      .datum(parsedData)
      .attr("fill", "none")
      .attr("stroke", "gold")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line<{ time: Date; rewards: number }>()
          .x((d) => x(d.time))
          .y((d) => y(d.rewards))
      );

    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "#f8f8f8")
      .style("padding", "8px")
      .style("border-radius", "4px")
      .style("box-shadow", "0px 0px 10px rgba(0, 0, 0, 0.1)");

    svg
      .selectAll("dot")
      .data(parsedData)
      .enter()
      .append("circle")
      .attr("r", 4)
      .attr("cx", (d) => x(d.time))
      .attr("cy", (d) => y(d.rewards))
      .attr("fill", "white")
      .on("mouseover", (_event, d) => {
        tooltip.style("visibility", "visible").html(
          `<strong>Date:</strong> ${d.time.toLocaleDateString("en-US")}<br/>
           <strong>Rewards:</strong> ${d.rewards.toFixed(4)}`
        );
      })
      .on("mousemove", (event) => {
        tooltip
          .style("top", `${event.pageY - 30}px`)
          .style("left", `${event.pageX + 5}px`);
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });

    const handleResize = () => {
      d3.select(chartRef.current).selectAll("*").remove();
      setDimensions();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tooltip.remove();
    };
  }, [data]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <svg ref={chartRef} />
    </div>
  );
};

export default Chart;
