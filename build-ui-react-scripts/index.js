const path = require("path");
const inquirer = require("inquirer");
const { execSync } = require("child_process");

(async function() {
  // Determine which react scripts version we should use
  const answers = await inquirer.prompt([
    {
      name: "reactScriptsVersion",
      message:
        "Which version of create-react-app's react-scripts do you want to build from? (provide a sha or branch)"
    }
  ]);

  const gitRoot = execSync("git rev-parse --show-toplevel")
    .toString()
    .split("\n")[0];
  const buildUiRoot = path.resolve(
    gitRoot + "/packages/build-ui-react-scripts"
  );

  // Create a new directory to hold our build
  await execSync(`mkdir build`);
  console.log("Downloading react-scripts (this may take a while...)");
  const lernaJson = require("../../lerna.json");
  await execSync(
    `
    git clone https://github.com/facebook/create-react-app.git &&
    cd create-react-app &&
    git reset --hard 66cc7a903e91777e223780b898122a4dd3491d54 &&
    cd .. &&
    npx merge-dirs ../src/ ./create-react-app/packages/react-scripts --overwrite &&
    npx replace-in-file 'appPackage.browserslist = defaultBrowsers;' 'appPackage.browserslist = defaultBrowsers;appPackage.private = true;appPackage.scripts.start="HTTPS=true PORT=8100 REACT_APP_OPEN_TO_URL=https://dev.commerce.spscommerce.com/localhost react-scripts start";appPackage.homepage = ".";'  ./create-react-app/packages/react-scripts/scripts/init.js
    npx json -I -f ./create-react-app/packages/react-scripts/package.json -e 'this.name="@spscommerce/ui-react-scripts"'
    npx json -I -f ./create-react-app/packages/react-scripts/package.json -e 'this.version="${
      lernaJson.version
    }"'
  `,
    { cwd: path.resolve(buildUiRoot + "/build") }
  );
  // After this you must go through an

  console.log(
    "Generated ui-react-scripts in ./build from ",
    answers.reactScriptsVersion,
    ". Please confirm that the scripts were generated properly before copying the contents of ./build into the ui-react-scripts package."
  );
})();
