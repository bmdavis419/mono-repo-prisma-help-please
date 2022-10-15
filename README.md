### instructions

1. Clone Repo
2. run: npm install
3. run: npm run db:push

for a working example run: npm run dev:good
for the issue run: npm run dev:bad (should result in: Error: ENOENT: no such file or directory, open ... apps/cli/dist/schema.prisma)

really the issue that needs addressing is how do I get the schema.prisma pointed to the right place?
