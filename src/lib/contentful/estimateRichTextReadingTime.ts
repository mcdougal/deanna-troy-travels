import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default (
  richText: Parameters<typeof documentToReactComponents>[0],
): number => {
  return Math.round(JSON.stringify(richText).length / 3000);
};
