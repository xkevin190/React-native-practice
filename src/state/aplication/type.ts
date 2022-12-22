export interface IAplicationState {
  loading: boolean;
  items: ListItems;
  favorites: ListItems;
}

export type item = {
  gender: string;
  name: string;
  birth_year: string;
  homeworld: string;
};

export type ListItems = Array<item>;

export type Payload = {
  type: string;
  payload: any;
};
