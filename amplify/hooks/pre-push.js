const fs = require('fs');
const parameters = JSON.parse(fs.readFileSync(0, { encoding: "utf8" }));

const projectPath = parameters.amplify.environment.projectPath;
const metaDataPath = path.join(projectPath, "amplify", "backend", "amplify-meta.json");

console.log(`reading appId from ${metaDataPath}...`);
const metaData = JSON.parse(fs.readFileSync(metaDataPath));
const appId = metaData.providers.awscloudformation.AmplifyAppId;
console.log(`appId: ${appId}`);

const parametersPath = path.join(projectPath, "amplify", "backend", "function", "slackApp", "parameters.json");
fs.writeFileSync(parametersPath, JSON.stringify({ secretsPathAmplifyAppId: appId }));
console.log(`write appId to ${parametersPath}`);
