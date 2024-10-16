import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/apolloClient/client";
import { GET_BLOCK_REWARDS } from "../../api/blockRewardsApi/blockRewardsApi";
import { RootState } from "../store/store";

export const fetchBlockRewards = createAsyncThunk(
  "blockRewards/fetchBlockRewards",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const { startDate, endDate } = state.blockRewardsSlice;

    if (!startDate || !endDate) {
      return rejectWithValue("Invalid date range");
    }

    try {
      const { data } = await client.query({
        query: GET_BLOCK_REWARDS,
        variables: {
          startDate,
          endDate,
        },
      });

      const blockRewards = data.ethereum.blocks.map(
        (block: {
          timestamp: { iso8601: string };
          reward: number;
          rewardInUsd: number;
          transactionCount: number;
        }) => ({
          time: block.timestamp.iso8601,
          rewards: block.reward,
          rewardInUsd: block.rewardInUsd,
          transactionCount: block.transactionCount,
        })
      );

      return blockRewards;
    } catch (error) {
      return rejectWithValue("Failed to fetch block rewards");
      console.error(error);
    }
  }
);
