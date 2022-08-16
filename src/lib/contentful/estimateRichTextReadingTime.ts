import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export default (
  richText: Parameters<typeof documentToPlainTextString>[0],
): number => {
  return Math.round(documentToPlainTextString(richText).length / 1000);
};
