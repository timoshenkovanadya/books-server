import { Authors } from 'src/authors/authors.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Authors, (author) => author.books)
  @JoinColumn({ name: 'author_id' })
  author: Authors;

  @Column({ name: 'author_id' })
  authorId: number;
}
