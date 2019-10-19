import * as mongoose from 'mongoose';

export const HymnalSchema = new mongoose.Schema({
  copyrights: Array,
  description: String,
  externalIds: Object,
  language: Object,
  name: String,
  releaseDate: String,
  releaseDatePrecision: String,
  totalHymns: Number,
  typeName: String,
});
