## SQLBASE (WIP)

### Problem 

Supabase is a powerful tool which reduces development time significantly and allows you to generate rest and graphql apis atop of SQL database. 

Since Supabase doesn't require any driver, the developer workflow for writing SQL code seems lacking and not in sync with your source tree like any other backend code 

For example, currently to write sql/postgres function, I would've go outside my IDE and use tools like Supabase Studio, PG Admin etc to write new function, or copy-paste existing function. Besides this being messy, it also makes it very difficult to review the migration if number of changes are significant.

To overcome this, sqlbase allows you to checkin your sql files in the source tree (inside folder) and then it watches for changes in SQL files inside this folder. On change sqlbase, would apply these changes directly on the postgres database. 

You can also configure Sqlbase to check for modified sql files and generate new migration


## Getting Started




## Progress 
- [x] Watch Command 
- [ ] Migration 
