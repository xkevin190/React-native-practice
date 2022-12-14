import {ActionTypes} from '../constants';
import {IAplicationState, Payload, ListItems} from './type';

const AplicationState = {
  loading: false,
  items: [],
  favorites: [],
};

export const AplicationReducer = (
  state: IAplicationState = AplicationState,
  action: Payload,
) => {
  switch (action.type) {
    case ActionTypes.LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case ActionTypes.GET_ITEMS: {
      return {
        ...state,
        items: action.payload,
      };
    }
    case ActionTypes.SET_FAVORITE: {
      const index = state.items.findIndex(item => {
        return item.name === action.payload;
      });

      state.items[index].favorite = !state.items[index].favorite;

      return {
        ...state,
        items: state.items.slice(),
      };
    }
    default: {
      return state;
    }
  }
};
