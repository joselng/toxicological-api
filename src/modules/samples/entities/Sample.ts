import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn
} from 'typeorm'

@Entity('samples')
export class Sample {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 8, unique: true, nullable: false })
  code: string

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  cocaine: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  amphetamine: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  methamphetamine: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  mda: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  mdma: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  thc: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  morphine: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  codeine: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  heroin: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  benzoylecgonine: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  cocaethylene: number

  @Column({ type: 'decimal', precision: 8, scale: 3, nullable: false })
  norcocaine: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}
