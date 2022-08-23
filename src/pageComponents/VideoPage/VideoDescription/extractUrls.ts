// A very naive regex for detecting URLs. This is only intended to drive a
// nice-to-have auto-link feature, so it does not have to be perfect.
const URL_REGEX = /(https?:\/\/[^\s]+)/g;

export interface Token {
  type: `string` | `url`;
  value: string;
}

/**
 * Turn the given string into an array of text and URL tokens so that we can
 * render the URLs as links.
 */
const extractUrls = (value: string): Array<Token> => {
  const urls = value.match(URL_REGEX);

  if (!urls || urls.length === 0) {
    return [{ type: `string`, value }];
  }

  const firstUrl = urls[0];
  const [leftString, rightString] = value.split(firstUrl);
  const rightTokens = extractUrls(rightString);

  return [
    {
      type: `string`,
      value: leftString,
    },
    {
      type: `url`,
      value: firstUrl,
    },
    ...rightTokens,
  ];
};

export default extractUrls;
