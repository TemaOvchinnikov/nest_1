import { Album } from '../../src/albums/entities/album.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateAlbums implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Album)
      .values([
        {
          id: 1,
          image:
            'https://i1.sndcdn.com/artworks-yKRyDz83iyCCDOms-fPdBSA-t200x200.jpg',
          title: 'Kind Of Harmony',
          auhor: 'Lil Fil',
          year: 2022,
        },
        {
          id: 2,
          image:
            'https://i1.sndcdn.com/artworks-DsnpgC25EMRYX9GS-hDUszA-t200x200.jpg',
          title: 'Chosen One',
          auhor: 'Lil Fil ',
          year: 2022,
        },
        {
          id: 3,
          image:
            'https://i1.sndcdn.com/artworks-6HwV0PEzZ0NhcJdz-b6QPSA-t200x200.jpg',
          title: 'First Test',
          auhor: 'Lil Fil',
          year: 2022,
        },
        {
          id: 4,
          image:
            'https://i1.sndcdn.com/artworks-dSxbQBDzuXqSOljL-I9bAJg-t200x200.jpg',
          title: 'Deep Flow',
          auhor: 'Lil Fil',
          year: 2022,
        },
        {
          id: 5,
          image:
            'https://i1.sndcdn.com/artworks-WE4yVLYSn54Rc9nz-zMXllQ-t200x200.jpg',
          title: 'Acid',
          auhor: 'Lil Fil',
          year: 2022,
        },
        {
          id: 6,
          image:
            'https://i1.sndcdn.com/artworks-ucMyxtZuprnEMUOv-yqHrVQ-t200x200.jpg',
          title: 'Astral Body',
          auhor: 'Lil Fil',
          year: 2021,
        },
        {
          id: 7,
          image:
            'https://i1.sndcdn.com/artworks-EQ0WY5ERXbKC4A0i-AIXKNw-t200x200.jpg',
          title: 'Crystallizer',
          auhor: 'Lil Fil',
          year: 2021,
        },
        {
          id: 8,
          image:
            'https://i1.sndcdn.com/artworks-l1SF7yEEf45VHEhL-yGcmXg-t200x200.jpg',
          title: 'Luxury Life',
          auhor: 'Lil Fil',
          year: 2021,
        },
        {
          id: 9,
          image:
            'https://i1.sndcdn.com/artworks-OywDYBmeDnLOzDbJ-Jx8vYg-t200x200.jpg',
          title: 'Mad Of Life',
          auhor: 'Lil Fil',
          year: 2021,
        },
        {
          id: 10,
          image:
            'https://i1.sndcdn.com/artworks-fI1YQguDO471TRR7-YvO7uw-t200x200.jpg',
          title: 'Storm Of Noise',
          auhor: 'Lil Fil',
          year: 2021,
        },
        {
          id: 11,
          image:
            'https://i1.sndcdn.com/artworks-kcmd90vtyj5uqMPx-f7GOGA-t200x200.jpg',
          title: 'Dear Vibe',
          auhor: 'Lil Fil',
          year: 2021,
        },
        {
          id: 12,
          image:
            'https://i1.sndcdn.com/artworks-dTaQJJEwvziltqb6-9NbxSw-t200x200.jpg',
          title: 'Vibrations',
          auhor: 'Lil Fil',
          year: 2021,
        },
        {
          id: 13,
          image:
            'https://i1.sndcdn.com/artworks-hrTbtegKVezJyCMO-GVFLwA-t200x200.jpg',
          title: "It's Time To Get Up",
          auhor: 'Lil Fil',
          year: 2021,
        },
        {
          id: 14,
          image:
            'https://i1.sndcdn.com/artworks-n6CIVgutibT36h7w-vDXjew-t200x200.jpg',
          title: 'Cool Things',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 15,
          image:
            'https://i1.sndcdn.com/artworks-1L6yeLQ9tNdO1Mdx-hYpQKA-t200x200.jpg',
          title: 'The Game',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 16,
          image:
            'https://i1.sndcdn.com/artworks-4FvhfvAqpaTlNkTw-05HjcA-t200x200.jpg',
          title: 'Words Of My Soul',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 17,
          image:
            'https://i1.sndcdn.com/artworks-BltvEik3E3yjGa4G-zbN8Iw-t200x200.jpg',
          title: 'Web',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 18,
          image:
            'https://i1.sndcdn.com/artworks-6oH6zLz1z3WW4jMY-uTHwyA-t200x200.jpg',
          title: 'Champion',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 19,
          image:
            'https://i1.sndcdn.com/artworks-2WtjJ4PulJIGbr8I-Ro0zJw-t200x200.jpg',
          title: 'Tunnel',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 20,
          image:
            'https://i1.sndcdn.com/artworks-C6Hy2rf067IJ4Rmn-IDyPSA-t200x200.jpg',
          title: 'Nightmare',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 21,
          image:
            'https://i1.sndcdn.com/artworks-ZtnrraJBwaOzoGiJ-C6sPrg-t200x200.jpg',
          title: 'Sword',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 22,
          image:
            'https://i1.sndcdn.com/artworks-iy6pg5vYxonMBFOC-36ET4g-t200x200.jpg',
          title: 'Galaxy',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 23,
          image:
            'https://i1.sndcdn.com/artworks-000688352866-d7zwiq-t200x200.jpg',
          title: 'Rise',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 24,
          image:
            'https://i1.sndcdn.com/artworks-000669669754-w43xcd-t200x200.jpg',
          title: 'Emotional',
          auhor: 'Lil Fil',
          year: 2020,
        },
        {
          id: 25,
          image:
            'https://i1.sndcdn.com/artworks-RTUjnvNyMMTOQaw5-BdfChQ-t200x200.jpg',
          title: 'Cataclysms',
          auhor: 'Lil Fil',
          year: 2022,
          /*genre: {
            id: 2,
          },*/
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
