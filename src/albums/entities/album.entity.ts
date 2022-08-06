import { Beat } from './../../beats/entities/beat.entity';
import { Genre } from './../../genres/entities/genre.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  auhor: string;

  @Column()
  year: number;

  @ManyToOne(() => Genre, (genre) => genre.albums)
  genre: Genre;

  /*@ManyToOne(() => Beat, (beat) => beat.albums)
  beat: Beat;*/

  @OneToMany(() => Beat, (beat) => beat.album)
  beats: Beat[];
}
