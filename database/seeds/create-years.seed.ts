import { Year } from './../../src/years/entities/year.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateYears implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Year)
      .values([
        { id: 1, year: 2020 },
        { id: 2, year: 2021 },
        { id: 3, year: 2022 },
      ])
      .execute();
  }
}
