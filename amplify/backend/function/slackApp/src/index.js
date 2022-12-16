/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["SLACK_SIGNING_SECRET","SLACK_BOT_TOKEN","SLACK_DEFAULT_CHANNEL"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/


import { AmplifyConsoleSlackApp } from "amplify-slack-app";
import { LogLevel } from "@slack/bolt";
import { SSMClient, GetParametersCommand } from "@aws-sdk/client-ssm";

const getSecrets = async (names) => {
  const client = new SSMClient();
  const input = {
    Names: names,
    WithDecryption: true,
  };
  const command = new GetParametersCommand(input);
  const response = await client.send(command);
  return response.Parameters.reduce(
    (params, param) => ({
      ...params,
      [param.Name]: param.Value,
    }),
    {}
  );
};

const secrets = await getSecrets([
  process.env.SLACK_SIGNING_SECRET,
  process.env.SLACK_BOT_TOKEN,
  process.env.SLACK_DEFAULT_CHANNEL
]);

const app = new AmplifyConsoleSlackApp({
  signingSecret: secrets[process.env.SLACK_SIGNING_SECRET],
  token: secrets[process.env.SLACK_BOT_TOKEN],
  defaultChannel: secrets[process.env.SLACK_DEFAULT_CHANNEL],
  logLevel: LogLevel.DEBUG,
});

export const handler = app.createHandler();
