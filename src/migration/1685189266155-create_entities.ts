import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateEntities1685189266155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `create table if not exists entities(
                id bigserial,
                name text not null default '',
                description text,
                images text,
                available_slots double precision default 0.0,
                rate_per_extra_slot double precision default 0.0,
                created_by text,
                created_at timestamptz not null,
                primary key (id)
            );`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table if exists entities`)
    }

}
