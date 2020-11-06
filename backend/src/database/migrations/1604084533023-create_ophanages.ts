import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOphanages1604084533023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Realiza alteraçoes no BD
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy: "increment",
                },
                {
                    name: 'name',
                    type: 'string',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'opening_hours',
                    type: 'string',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Desfazer as alteraçoes no BD
        await queryRunner.dropTable('orphanages')
    }

}
