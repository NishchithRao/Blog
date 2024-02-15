import { copyFileSync } from "fs";
import { join } from "path";

const jekyllPath = join(process.cwd(), "./.nojekyll");
const distPath = join(process.cwd(), "dist", ".nojekyll");

copyFileSync(jekyllPath, distPath);
