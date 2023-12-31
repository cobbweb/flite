import { compile, FlyOptions } from "../src/flite.ts";
import { argv } from "../src/lib/stdlib.bun.ts";

const sourceFile = argv(0);

const options: FlyOptions = {
  srcFile: sourceFile,
};

compile(options);
