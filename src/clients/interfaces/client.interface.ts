import { Document } from 'mongoose';

export interface Client extends Document {
  readonly name: string;
  readonly description: string;
  readonly clientId: string;
  readonly clientSecret: string;
}
