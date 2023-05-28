import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAssets1685297207084 implements MigrationInterface {
    name = 'CreateAssets1685297207084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assets" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "images" text NOT NULL, "available_slots" text NOT NULL, "rate_per_extra_slot" text NOT NULL, CONSTRAINT "PK_da96729a8b113377cfb6a62439c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "assets"`);
    }

}
