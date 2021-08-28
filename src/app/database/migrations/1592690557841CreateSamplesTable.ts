import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateSamplesTable1592690557841
implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'samples',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'increment'
          },
          {
            name: 'code',
            type: 'varchar(8)',
            isUnique: true,
            isNullable: false
          },
          {
            name: 'cocaine',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'amphetamine',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'methamphetamine',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'mda',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'mdma',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'thc',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'morphine',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'codeine',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'heroin',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'benzoylecgonine',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'cocaethylene',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'norcocaine',
            type: 'decimal(5,3)',
            isNullable: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('samples')
  }
}
