import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');
export default typeDefs;
