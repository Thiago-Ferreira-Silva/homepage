import { Migration } from '@mikro-orm/migrations';

export class Migration20210323141959 extends Migration {

  async up(): Promise<void> {
    this.addSql(`CREATE TABLE metrics (
      id TEXT PRIMARY KEY,
      date INTEGER NOT NULL
      );`);
  }

  async down(): Promise<void> {
    this.addSql('DROP TABLE metrics;');
  }

}
