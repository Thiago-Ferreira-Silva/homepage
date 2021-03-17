import { Migration } from '@mikro-orm/migrations'

export class Migration20210317135302 extends Migration {

  async up(): Promise<void> {
    this.addSql(`
      CREATE TABLE projects (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        project TEXT NOT NULL,
        github TEXT NOT NULL,
        image TEXT NOT NULL
      );
    `)
  }

  async down(): Promise<void> {
    this.addSql('DROP TABLE projects;')
  }

}
