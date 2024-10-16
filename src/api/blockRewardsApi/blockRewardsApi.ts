import { gql } from "@apollo/client";

export const GET_BLOCK_REWARDS = gql`
  query GetBlockRewards(
    $startDate: ISO8601DateTime!
    $endDate: ISO8601DateTime!
  ) {
    ethereum(network: ethereum) {
      blocks(
        options: { limit: 100 }
        time: { since: $startDate, till: $endDate }
      ) {
        timestamp {
          iso8601
        }
        reward
        transactionCount
        rewardInUsd: reward(in: USD)
      }
    }
  }
`;
