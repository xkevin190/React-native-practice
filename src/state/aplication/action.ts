import {APIService} from '../../services/ApiService';
import {ActionTypes} from '../constants';
import {ListItems} from './type';

export const getImages =
  (page = 1) =>
  async (dispatch: any) => {
    const result = await APIService({
      url: 'https://swapi.dev/api/people',
      query: {page: page},
    });

    const parsed = await getUserPlanetAndParse(result.data.results);

    if (result.status === 200) {
      dispatch({
        type: ActionTypes.GET_ITEMS,
        payload: parsed,
      });
    }
  };

const getUserPlanetAndParse = async (data: ListItems) => {
  let parsedData: ListItems = [];
  await Promise.all(
    data.map(async element => {
      const getPlanet = await APIService({
        url: element.homeworld,
      });

      parsedData.push({
        gender: element.gender,
        name: element.name,
        birth_year: element.birth_year,
        homeworld: getPlanet.data.name,
        favorite: false,
      });
    }),
  );

  return parsedData;
};

export const setFavorite = (name: string) => {
  return {
    type: ActionTypes.SET_FAVORITE,
    payload: name,
  };
};
