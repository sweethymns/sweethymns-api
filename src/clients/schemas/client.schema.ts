import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  name: String,
  description: String,
  clientId: String,
  clientSecret: String,
});
