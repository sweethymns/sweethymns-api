import * as mongoose from 'mongoose';

export const HymnalSchema = new mongoose.Schema({
  copyrights: Array,
  description: String,
  externalIds: Object,
  language: Object,
  typeName: String,
  name: String,
  releaseDate: String,
  releaseDatePrecision: String,
});
