/* eslint-disable no-console */
import 'dotenv/config';

import axios from 'axios';

/**
 * Refresh and print a new Instagram long-lived access token.
 *
 * See: https://developers.facebook.com/docs/instagram-basic-display-api/guides/long-lived-access-tokens#refresh-a-long-lived-token
 */
const run = async (): Promise<void> => {
  const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!currentToken) {
    throw new Error(`Missing environment variable: INSTAGRAM_ACCESS_TOKEN`);
  }

  const url = `https://graph.instagram.com/refresh_access_token?${[
    `grant_type=ig_refresh_token`,
    `access_token=${currentToken}`,
  ].join(`&`)}`;

  const response = await axios.get(url);

  console.log(JSON.stringify(response.data, null, 2));
  console.log();
  console.log(`Copy/paste the access token into .env and Netlify`);
};

if (require.main === module) {
  process.on(`unhandledRejection`, (error) => {
    throw error;
  });

  run();
}
