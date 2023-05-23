import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewLastNameColumn1684842527436 implements MigrationInterface {
    name = 'AddNewLastNameColumn1684842527436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`lastName\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`lastName\``);
    }

}
