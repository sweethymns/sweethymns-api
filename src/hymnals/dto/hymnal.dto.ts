import { Expose, Exclude } from 'class-transformer';

import { Links } from '../../common/interfaces/links.interface';
import { Resource } from '../../common/interfaces/resource.interface';
import { Hymnal } from '../interfaces/hymnal.interface';
import { HYMNALS_ENDPOINT } from '../hymnals.constants';

export class HymnalDTO {
  @Exclude()
  hymnal: Hymnal;

  constructor(partial: Partial<HymnalDTO>) {
    Object.assign(this, partial);
  }

  @Expose()
  get links(): Links {
    return {
      self: `${HYMNALS_ENDPOINT}/${this.hymnal._id}`,
    };
  }

  @Expose()
  get data(): Resource {
    return {
      type: this.hymnal.typeName,
      id: this.hymnal._id.toString(),
      attributes: {
        description: this.hymnal.description,
        externalIds: this.hymnal.externalIds,
        language: this.hymnal.language,
        name: this.hymnal.name,
        releaseDate: this.hymnal.releaseDate,
        releaseDatePrecision: this.hymnal.releaseDatePrecision,
        totalHymns: this.hymnal.totalHymns,
      },
      meta: {
        copyrights: this.hymnal.copyrights,
      },
    };
  }
}
