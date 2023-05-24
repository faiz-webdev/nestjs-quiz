import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigrations1684921221756 implements MigrationInterface {
  name = 'NewMigrations1684921221756';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`lastName\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`role\` enum ('admin', 'member') NOT NULL DEFAULT 'member'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`lastName\``);
  }
}
