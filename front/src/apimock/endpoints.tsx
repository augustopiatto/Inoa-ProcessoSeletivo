import {
  AssetInterface,
  SelectedAssetInterface,
} from "../interfaces/ItemInterface";

export const assetsFromURL: AssetInterface[] = [
  { name: "Petro" },
  { name: "Enel" },
  { name: "MWL" },
  { name: "B2W" },
  { name: "Buser" },
  { name: "AAA" },
  { name: "BBB" },
  { name: "CCC" },
  { name: "DDD" },
  { name: "EEE" },
];

export const selectedAssetsFromURL: SelectedAssetInterface[] = [
  { name: "Petro", periodicity: 120, max_value: 200, min_value: 100 },
  { name: "Enel", periodicity: 170, max_value: 220, min_value: 80 },
  { name: "MWL", periodicity: 60, max_value: 50, min_value: 10 },
  { name: "B2W", periodicity: 400, max_value: 2000, min_value: 500 },
  { name: "Buser", periodicity: 2000, max_value: 145, min_value: 140 },
];