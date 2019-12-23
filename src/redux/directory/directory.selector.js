import { createSelector } from "reselect";

const directoryState = state => state.directory;

export const sectionSelector = createSelector(
  [directoryState],
  directory => directory.section
);
