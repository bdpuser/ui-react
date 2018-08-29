const path = require("path");
const { execSync } = require("child_process");
const rimraf = require("rimraf");
const fs = require("fs");

const packageName = process.argv[2] || "";

if (packageName.trim().length === 0) {
  console.error("Please provide a project name.");
  process.exit(1);
}

/**
 * This creates a react package in the packages directory of this monorepo
 */
(async () => {
  const gitRoot = execSync("git rev-parse --show-toplevel")
    .toString()
    .split("\n")[0];
  const packagesRoot = path.resolve(gitRoot + "/packages");
  try {
    // Using sync here for now but idk
    await execSync(`npx nwb new react-component -f --no-git ${packageName}`, {
      cwd: packagesRoot
    });
    const packageRoot = path.resolve(`${packagesRoot}/${packageName}`);
    console.log(`Package created ${packageRoot} `);
    rimraf.sync(path.resolve(packageRoot + "/demo"));
    console.log(`Removed demo directory.`);
    const packageJsonPath = path.resolve(packageRoot + "/package.json");
    const packageJsonContents = JSON.parse(
      fs.readFileSync(packageJsonPath).toString()
    );

    const lernaPackageJsonPath = path.resolve(gitRoot + "/" + "lerna.json");
    const lernaPackageJsonContents = JSON.parse(
      fs.readFileSync(lernaPackageJsonPath).toString()
    );

    // MUTATE FTW? SHIPPIT
    packageJsonContents.version = lernaPackageJsonContents.version;
    packageJsonContents.name = "@spscommerce/" + packageJsonContents.name;
    packageJsonContents.scripts["build"] =
      "nwb build-react-component --no-demo";
    packageJsonContents.scripts["build:watch"] =
      "npx nodemon -w src -x 'rm .babelrc &> /dev/null; nwb build-react-component --no-demo'";
    packageJsonContents.scripts["clean"] = "nwb clean-module";
    delete packageJsonContents.scripts["start"];

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJsonContents, null, 2)
    );
    console.log(`Updated package.json`);
  } catch (e) {
    process.exit(2);
    console.error(e);
  }
})();
