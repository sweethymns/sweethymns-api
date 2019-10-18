import { Links } from './links.interface';

export interface Resource {
  type: string;
  id: string;
  attributes: {};
  relationships?: {};
  links?: Links;
  meta?: {};
}
