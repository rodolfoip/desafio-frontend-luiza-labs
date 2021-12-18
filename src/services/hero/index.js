import qs from 'qs';
import { API } from '../index';

const getHeroes = ({ page, nameStartsWith, orderBy }) => {
  const limit = 20;
  const from = ((page || 1) - 1) * limit;

  const query = {
    nameStartsWith,
    orderBy,
    limit,
    offset: from,
  };

  return API.get(`/characters${qs.stringify(
    query,
    { addQueryPrefix: true },
  )}`);
};

export { getHeroes };
