import {APIService} from '../../services/ApiService';
import {ActionTypes} from '../constants';

export const getImages = () => async (dispatch: any) => {
  const result = await APIService({
    url: 'https://api.reddit.com/r/pics/hot.json',
  });

  if (result.status === 200) {
    dispatch({
      type: ActionTypes.GET_ITEMS,
      payload: result.data.data.children,
    });
  }
};

export const getImageProfiles = (url: string) => async (dispatch: any) => {
  const result = await APIService({
    url: url,
    query: '',
  });

  if (result.status === 200) {
    dispatch({
      type: ActionTypes.GET_PROFILE_ITEMS,
      payload: result.data,
    });
  }
};

export const clearProfileItems = () => {
  return {
    type: ActionTypes.GET_PROFILE_ITEMS,
    payload: [],
  };
};
