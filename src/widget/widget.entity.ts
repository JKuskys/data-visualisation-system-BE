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

  @Column({ unique: true })
  key: string;

  @Column({})
  isPublic: boolean;

  @Column()
  takeFromStart: boolean;

  @Column()
  url: string;

  @Column()
  method: string;

  @Column({ nullable: true })
  customAttribute: string;

  @Column({ nullable: true })
  customValue: string;

  @Column({ nullable: true })
  customLabel: string;

  @Column({ nullable: true })
  customMin: number;

  @Column({ nullable: true })
  customMax: number;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  widgetType: string;

  @Column({ nullable: true })
  customPrimaryColor: string;

  @Column({ nullable: true })
  customSecondaryColor: string;

  @Column({ nullable: true })
  customNegativePrimaryColor: string;

  @Column({ nullable: true })
  customNegativeSecondaryColor: string;

  @Column({ nullable: true })
  markNegativeDifferently: boolean;

  @Column({ nullable: true })
  showLabels: boolean;

  @Column({ nullable: true })
  showPeriods: boolean;

  @Column({ nullable: true })
  customLegend: string;

  @Column({ nullable: true })
  showYGrid: boolean;

  @Column({ nullable: true })
  showXGrid: boolean;

  // @Column()
  // headers: { [key: string]: string }[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
