/*import Faker from 'faker';
import { Album } from '../../src/albums/entities/album.entity';
import { define } from 'typeorm-seeding';

define(Album, (faker: typeof Faker) => {
  //const id = faker.datatype.number({ min: 1, max: 10 });
  const id = 1;
  const image = faker.image.imageUrl();
  const title = faker.name.title();
  const auhor = faker.name.firstName();
  const year = faker.date.between('2022', '2020');

  const album = new Album();
  album.id = id;
  album.image = image;
  album.title = title;
  album.auhor = auhor;
  album.year = +year;
  return album;
});
*/
