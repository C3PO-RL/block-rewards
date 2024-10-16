import React from "react";
import { setDateRange } from "../redux/slices/blockRewardsSlice";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { Grid2 } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../redux/store/hooks";
import { AppDispatch, RootState } from "../redux/store/store";
import { fetchBlockRewards } from "../redux/middleWare/fetchBlockRewards";
import { DATE_PIKER_STYLE } from "../constans/datePicker";

const DateRangePicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const { startDate, endDate } = useAppSelector(
    (state: RootState) => state.blockRewardsSlice
  );

  const handleDateChange =
    (newValue: Date | null, name: string) =>
    (dispatch: AppDispatch, getState: () => RootState) => {
      const { startDate, endDate } = getState().blockRewardsSlice;

      if (name === "startDate") {
        dispatch(
          setDateRange({
            startDate: newValue ? newValue.toISOString() : "",
            endDate: endDate ? endDate : "",
          })
        );
      }
      if (name === "endDate") {
        dispatch(
          setDateRange({
            startDate: startDate ? startDate : "",
            endDate: newValue ? newValue.toISOString() : "",
          })
        );
      }

      dispatch(fetchBlockRewards());
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid2 container gap={2} justifyContent="center">
        <Grid2>
          <DatePicker
            disableFuture
            sx={DATE_PIKER_STYLE}
            name="startDate"
            label="Start Date"
            value={startDate ? new Date(startDate) : null}
            onChange={(newValue) =>
              dispatch(handleDateChange(newValue, "startDate"))
            }
          />
        </Grid2>
        <Grid2>
          <DatePicker
            minDate={startDate ? new Date(startDate) : undefined}
            disableFuture
            sx={DATE_PIKER_STYLE}
            name="endDate"
            label="End Date"
            value={endDate ? new Date(endDate) : null}
            onChange={(newValue) =>
              dispatch(handleDateChange(newValue, "endDate"))
            }
          />
        </Grid2>
      </Grid2>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
