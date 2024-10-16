import { combineReducers } from "redux";
import blockRewardsSlice from "../slices/blockRewardsSlice";

const rootReducer = combineReducers({
  blockRewardsSlice,
});

export default rootReducer;
