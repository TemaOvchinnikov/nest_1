import {MigrationInterface, QueryRunner} from "typeorm";

export class table1651672400402 implements MigrationInterface {
    name = 'table1651672400402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`beat\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`albumId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`genre\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`album\` (\`id\` int NOT NULL AUTO_INCREMENT, \`image\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`auhor\` varchar(255) NOT NULL, \`year\` int NOT NULL, \`genreId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`year\` (\`id\` int NOT NULL AUTO_INCREMENT, \`year\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`beat\` ADD CONSTRAINT \`FK_2cda22c1b6902643ee646a0800a\` FOREIGN KEY (\`albumId\`) REFERENCES \`album\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`album\` ADD CONSTRAINT \`FK_713b89f43a95f64f6aaad966dac\` FOREIGN KEY (\`genreId\`) REFERENCES \`genre\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`album\` DROP FOREIGN KEY \`FK_713b89f43a95f64f6aaad966dac\``);
        await queryRunner.query(`ALTER TABLE \`beat\` DROP FOREIGN KEY \`FK_2cda22c1b6902643ee646a0800a\``);
        await queryRunner.query(`DROP TABLE \`year\``);
        await queryRunner.query(`DROP TABLE \`album\``);
        await queryRunner.query(`DROP TABLE \`genre\``);
        await queryRunner.query(`DROP TABLE \`beat\``);
    }

}
