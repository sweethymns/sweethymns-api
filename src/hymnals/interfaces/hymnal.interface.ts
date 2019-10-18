import { Document } from 'mongoose';

export interface Hymnal extends Document {
  copyrights: [];
  description: string;
  externalIds: {};
  language: {};
  typeName: string;
  name: string;
  releaseDate: string;
  releaseDatePrecision: string;
}
