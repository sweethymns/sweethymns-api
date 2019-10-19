import { Expose, Exclude } from 'class-transformer';

import { Links } from '../../common/interfaces/links.interface';
import { Resource } from '../../common/interfaces/resource.interface';
import { Hymnal } from '../interfaces/hymnal.interface';
import { HYMNALS_ENDPOINT } from '../hymnals.constants';

export class HymnalsDTO {
  @Exclude()
  hymnals: Hymnal[];

  constructor(partial: Partial<HymnalsDTO>) {
    Object.assign(this, partial);
  }

  @Expose()
  get links(): Links {
    return {
      self: `${HYMNALS_ENDPOINT}`,
    };
  }

  @Expose()
  get data(): Resource[] {
    const data = [];

    for (let index = 0; index < this.hymnals.length; index++) {
      data[index] = this.hymnals[index]
        ? this.getSimplifiedHymnal(this.hymnals[index])
        : null;
    }

    return data;
  }

  private getSimplifiedHymnal(hymnal: Hymnal): Resource {
    return {
      type: hymnal.typeName,
      id: hymnal._id.toString(),
      attributes: {
        description: hymnal.description,
        language: hymnal.language,
        name: hymnal.name,
        totalHymns: hymnal.totalHymns,
      },
      links: {
        self: `${HYMNALS_ENDPOINT}/${hymnal._id}`,
      },
    };
  }
}
