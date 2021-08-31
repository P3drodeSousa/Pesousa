import {projets} from '../../../data/projets';

export default async function handler(_, res) {
  return res.status(200).json(projets);
}
