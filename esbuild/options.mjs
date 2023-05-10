const buildOptions = {
  entryPoints: ["src/index.ts"],
  platform: "node",
  target: "node18.15.0",
  bundle: true,
  minify: true,
  external: ["express", "multer"],
  outdir: "dist",
};

export default buildOptions;