import { Migration } from '@mikro-orm/migrations'

export class Migration20210317135302 extends Migration {

  async up(): Promise<void> {
    this.addSql(`
      CREATE TABLE projects (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        description TEXT NOT NULL UNIQUE,
        project TEXT NOT NULL UNIQUE,
        github TEXT NOT NULL UNIQUE
      );
    `)
  }

  async down(): Promise<void> {
    this.addSql('DROP TABLE projects;')
  }

}
