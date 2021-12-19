import qs from 'qs';
import { API } from '../index';

const getHeroes = ({ page, name, orderBy }) => {
  const limit = 20;
  const from = ((page || 1) - 1) * limit;

  const query = {
    nameStartsWith: name || undefined,
    orderBy,
    limit,
    offset: from
  };

  return API.get(`/characters${qs.stringify(query, { addQueryPrefix: true })}`);
};

const getHeroById = (id) => {
  return API.get(`/characters/${id}`);
};

export { getHeroes, getHeroById };
