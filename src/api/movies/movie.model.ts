import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum MovieType {
  COMEDY = 'comedy',
  SCIENCE_FICTION = 'science fiction',
  ACTION = "action",
  DRAMA = "drama",
  FANTASY = "fantasy",
  HORROR = "horror",
  MYSTERY = "mystery",
  ROMANCE = "romance",
  THRILLER = "thriller",
  WESTERN = "western",
}

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: ""
  })
  name: string;

  @Column({
    default: ""
  })
  director: string;

  @Column({
    type: 'enum',
    enum: MovieType,
  })
  type: MovieType;
}
