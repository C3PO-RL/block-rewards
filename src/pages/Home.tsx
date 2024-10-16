import React, { useEffect } from "react";
import { RootState } from "../redux/store/store";
import { setDateRange } from "../redux/slices/blockRewardsSlice";
import DateRangePicker from "../components/DateRangePicker";
import Chart from "../components/Chart";
import { fetchBlockRewards } from "../redux/middleWare/fetchBlockRewards";
import Loader from "../components/common/Loader/Loader";
import styles from "./Home.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { useNavigate } from "react-router-dom";
import List from "../components/common/List/List";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.blockRewardsSlice
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
    const currentDate = new Date();
    const previousDate = new Date();
    previousDate.setDate(currentDate.getDate() - 1);
    const startDate = previousDate.toISOString();
    const endDate = new Date().toISOString();

    dispatch(setDateRange({ startDate, endDate }));
    dispatch(fetchBlockRewards());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, error]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ethereum Block Rewards</h1>
      <DateRangePicker />
      {loading && <Loader />}
      {!loading && <Chart data={data} />}
      {!loading && data?.length > 0 && (
        <List
          render={(item) => (
            <div>
              <span>Time: {new Date(item?.time)?.toLocaleString() ?? ""}</span>
              &nbsp;
              <span>Reward: ${item?.rewardInUsd?.toFixed(2) ?? ""}</span>
            </div>
          )}
          data={[data[0], data[data.length - 1]]}
          title="First and Last Block Rewards"
        />
      )}
    </div>
  );
};

export default Home;
