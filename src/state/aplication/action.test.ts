import store from '../index';
import {getImages ,setFavorite} from './action';

const response = [
  {
    gender: 'tes',
    name: 'test',
    birth_year: 'test',
    homeworld: 'unparsedTest',
    favorite: false,
  },
];

jest.mock('../../services/ApiService.ts', () => ({
  APIService: jest.fn().mockReturnValue(
    Promise.resolve({
      status: 200,
      data: {
        results: response,
        name: 'readyParset',
      },
    }),
  ),
}));

describe('Aplication Action (Unit-Test)', () => {
  it('get people action', async () => {
    await store.dispatch(getImages(1));

    expect(store.getState().aplication.items).toEqual([
      {
        gender: 'tes',
        name: 'test',
        birth_year: 'test',
        homeworld: 'readyParset',
        favorite: false,
      },
    ]);
  });

  it('setFavorite action', async () => {
    store.dispatch(setFavorite('test'));
    expect(store.getState().aplication.items[0].favorite).toBe(true);
  });
});
