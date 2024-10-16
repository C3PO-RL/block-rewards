import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBlockRewards } from "../middleWare/fetchBlockRewards";

interface BlockRewardsState {
  data: Array<{
    time: string;
    rewards: number;
    rewardInUsd: number;
    transactionCount: number;
  }>;
  startDate: string | null;
  endDate: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlockRewardsState = {
  data: [],
  startDate: null,
  endDate: null,
  loading: false,
  error: null,
};

const blockRewardsSlice = createSlice({
  name: "blockRewards",
  initialState,
  reducers: {
    setDateRange(
      state,
      action: PayloadAction<{ startDate: string; endDate: string }>
    ) {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
  extraReducers: (builder) => {
   
    builder
      .addCase(fetchBlockRewards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBlockRewards.fulfilled,
        (state, action: PayloadAction<unknown[]>) => {
          state.loading = false;
          state.data = action.payload as Array<{
            time: string;
            rewards: number;
            rewardInUsd: number;
            transactionCount: number;
          }>;
        }
      )
      .addCase(
        fetchBlockRewards.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      );
  },
});

export const { setDateRange } = blockRewardsSlice.actions;

export default blockRewardsSlice.reducer;
