export interface IDropdownItem {
  country: string;
  cities: {
    id: string;
    name: string;
  }[];
}
