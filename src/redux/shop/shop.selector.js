import { createSelector } from "reselect";

const shopState = state => state.shop;

export const shopdataSelector = createSelector(
  [shopState],
  shop => shop.shopData
);
