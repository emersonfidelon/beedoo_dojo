import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ModifyUsersTable1628164167569 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", new TableColumn({
            name: "balance",
            type: "real",
            default: "999999999999.00"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "balance");
    }

}
