export type StructuredDataObject = { [key: string]: StructuredData };

export type StructuredData =
  | StructuredDataObject
  | Array<StructuredData>
  | string
  | number
  | undefined;
