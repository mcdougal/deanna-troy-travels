export type StructuredData =
  | { [key: string]: StructuredData }
  | Array<StructuredData>
  | string
  | number;
