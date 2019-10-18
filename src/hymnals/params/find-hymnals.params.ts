import { IsNotEmpty } from 'class-validator';

export class FindHymnalsParams {
  @IsNotEmpty()
  ids: string;
}
