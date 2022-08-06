import { Album } from './../../albums/entities/album.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Beat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  /*@Column()
  author: string;

  @OneToMany(() => Album, (album) => album.beat)
  albums: Album[];*/

  @ManyToOne(() => Album, (album) => album.beats)
  album: Album;
}
