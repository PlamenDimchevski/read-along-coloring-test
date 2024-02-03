import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
   await knex.schema.createTable('characters', table => {
      table.string('id', 25).primary().index().unique();
      table.string('name', 280).notNullable().index();
      table.string('description', 280);
      table.string('color', 80).notNullable();
      table.string('imageUrl', 256);
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
   });

   await knex.schema.createTable('chapters', table => {
      table.string('id', 25).primary().unique();
      table.string('title', 280).notNullable();
      table.string('book', 280).notNullable();
      table.boolean('prepub').defaultTo(true);
      table.tinyint('part', 1).notNullable().defaultTo(5);
      table.text('content', 'longtext').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now()).index();
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
   });
}

export async function down(knex: Knex): Promise<void> {
   await knex.schema.dropTableIfExists('characters');
   await knex.schema.dropTableIfExists('chapters');
}
