import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/app.ts",
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

export default config;
