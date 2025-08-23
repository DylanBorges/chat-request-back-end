import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('❌  Nome da migration não fornecido.');
  process.exit(1);
}

const migrationName = args[0];
const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '');
const migrationsDir = join(__dirname, 'src/config/database/migrations');

if (!existsSync(migrationsDir)) mkdirSync(migrationsDir, { recursive: true });

const filename = join(migrationsDir, `${timestamp}-${migrationName}.ts`);

const template = `import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  // escreva aqui os comandos para criar/alterar tabelas
}

export async function down(queryInterface: QueryInterface) {
  // escreva aqui os comandos para desfazer alterações
}
`;

writeFileSync(filename, template);

console.log(`✅ Migration criada em: ${filename}`);
