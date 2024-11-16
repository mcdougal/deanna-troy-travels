/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

export type StructuredDataObject = { [key: string]: StructuredData };

export type StructuredData =
  | StructuredDataObject
  | Array<StructuredData>
  | string
  | number
  | undefined;
