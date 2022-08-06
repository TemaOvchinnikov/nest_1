import { Beat } from './../../src/beats/entities/beat.entity';

import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateAlbums implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Beat)
      .values([
        {
          id: 1,
          title: 'Cataclysms [Snippet]',
          album: {
            id: 25,
          },
        },
        {
          id: 2,
          title: 'Smooth And Miracles [Snippet]',
          album: {
            id: 25,
          },
        },
        {
          id: 3,
          title: 'Ticket Of The Show [Snippet]',
          album: {
            id: 25,
          },
        },
      ])
      .execute();
  }
}

/*
export default class CreateAlbums implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Album)().createMany(10);
  }
}*/
