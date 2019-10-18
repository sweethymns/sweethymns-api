export interface Links {
  self: string;
  related?: string;
  profile?: string[];
  pagination?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
  };
}
