import styles from "./List.module.scss";

interface ListProps {
  render: (item: { time: string; rewardInUsd: number }) => JSX.Element;
  data: Array<{
    time: string;
    rewards: number;
    rewardInUsd: number;
    transactionCount: number;
  }>;
  title?: string;
}

const List: React.FC<ListProps> = ({ render, data, title }) => {
  return (
    <div className={styles.listContainer}>
      {title && <h1>{title}</h1>}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{render(item)}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
