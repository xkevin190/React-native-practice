export interface IAplicationState {
  loading: boolean;
  items: ListItems;
  profileItems: ListItems;
}

export type item = {
  data: {
    id: string;
    author: string;
    ups: number;
    num_comments: number;
    title: string;
    thumbnail: string;
    permalink: string;
    created: number;
  };
};

export type ListItems = Array<item>;

export type Payload = {
  type: string;
  payload: any;
};
