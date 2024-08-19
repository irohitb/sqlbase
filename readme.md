## SQLBASE (WIP)

### Problem

Supabase is a powerful tool that significantly reduces development time and allows you to generate REST and graphql APIs on top of an SQL database.

Since Supabase doesn't require any driver, the developer workflow for writing SQL code seems lacking and not in sync with your source tree like any other backend code

For example, currently to write sql/postgres function, I would've go outside my IDE and use tools like Supabase Studio, PG Admin etc, for existing functions, I would've copy-paste them from UI of these tools.

Besides this being messy, it also makes it very difficult to review the migration if number of changes are significant.

To overcome this, SQLbase allows you to check in your SQL files in the source tree (inside the folder) and then watches for changes in SQL files inside this folder. When you change SQL base, you apply these changes directly to the Postgres database.

You can also configure Sqlbase to check for modified SQL files and generate new migrations.

## Getting Started

## Progress

- [x] Watch Command
- [ ] Migration
