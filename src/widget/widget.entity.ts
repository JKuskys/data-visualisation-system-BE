import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class WidgetEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  key: string;

  @Column()
  isPublic: boolean;

  @Column()
  takeFromStart: boolean;

  @Column()
  url: string;

  @Column()
  method: string;

  @Column()
  customAttribute?: string;

  @Column()
  customValue?: string;

  @Column()
  customLabel?: string;

  @Column()
  customMin?: number;

  @Column()
  customMax?: number;

  // @Column()
  // headers: { [key: string]: string }[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
