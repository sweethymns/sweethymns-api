import { Document } from 'mongoose';

export interface Hymnal extends Document {
  copyrights: [];
  description: string;
  externalIds: {};
  language: {};
  name: string;
  releaseDate: string;
  releaseDatePrecision: string;
  totalHymns: number;
  typeName: string;
}
