import { createSelector } from "reselect";

const shopState = state => state.shop;

export const shopdataSelector = createSelector(
  [shopState],
  shop => shop.shopData
);

export const shopdataCollections = createSelector(
  [shopdataSelector],
  shopData => Object.values(shopData)
);

export const selectCollection = collectionUrlParam =>
  createSelector([shopdataSelector], shopData => shopData[collectionUrlParam]);
