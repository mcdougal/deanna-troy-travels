/* eslint-disable filenames/match-regex */
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { videoId } = req.query;
  res.redirect(`https://www.youtube.com/watch?v=${videoId}`);
};
