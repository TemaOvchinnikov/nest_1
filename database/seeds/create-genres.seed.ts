import { Genre } from '../../src/genres/entities/genre.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateGenres implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Genre)
      .values([
        { title: 'Phonk house' },
        { title: 'Trap' },
        { title: 'Phonk' },
        { title: 'Dark techno' },
        { title: 'Electronic' },
        { title: 'Hip-hop & rap' },
      ])
      .execute();
  }
}
