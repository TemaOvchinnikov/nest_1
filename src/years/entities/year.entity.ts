import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Year {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;
}
