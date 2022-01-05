import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/index.ts",
  output: {
    name: "wtsc",
    file: "dist/wtsc.runtime.common.js",
    format: "cjs",
    // env: "production",
  },
  plugins: [typescript(), resolve()],
};
