import { createSelector } from "reselect";

const selectHeader = state => state.header;

export const selectHeaderMenu = createSelector(
  [selectHeader],
  header => header.showMenu
);
