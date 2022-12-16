#!/bin/bash

npm install -g amplify-category-console-notification amplify-slack-nodejs-function-template-provider
echo y | amplify plugin add $(npm root -g)/amplify-category-console-notification
echo y | amplify plugin add $(npm root -g)/amplify-slack-nodejs-function-template-provider
