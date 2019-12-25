import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  bags: 1,
  shoes: 2,
  jackets: 3,
  women: 4,
  men: 5
};

const shopState = state => state.shop;

export const shopdataSelector = createSelector(
  [shopState],
  shop => shop.shopData
);

export const selectCollection = collectionUrlParam =>
  createSelector([shopdataSelector], shopData =>
    shopData.find(data => data.id === COLLECTION_ID_MAP[collectionUrlParam])
  );
