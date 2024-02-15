import { cpSync } from "fs";
import { join } from "path";

const jekyllPath = join(process.cwd(), "./nojekyll");
const distPath = join(process.cwd(), "dist", "nojekyll");

cpSync(jekyllPath, distPath);
