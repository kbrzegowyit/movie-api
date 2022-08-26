import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum MovieType {
  COMEDY = 'comedy',
  SCIENCE_FICTION = 'science fiction',
}

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: MovieType,
  })
  type: MovieType;
}
