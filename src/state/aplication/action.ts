import {APIService} from '../../services/ApiService';
import {ActionTypes} from '../constants';

export const getImages = (type: string) => async (dispatch: any) => {
  dispatch(setLoading(true));
  const result = await APIService({
    url: `https://api.reddit.com/r/pics/${type.toLowerCase()}.json`,
  });

  if (result.status === 200) {
    dispatch({
      type: ActionTypes.GET_ITEMS,
      payload: result.data.data.children,
    });
  }
  dispatch(setLoading(false));
};

const setLoading = (isLoading: boolean) => {
  return {
    type: ActionTypes.LOADING,
    payload: isLoading,
  };
};
