# amplify-slack-bot

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#related-article-and-project">Related article and project</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is Slack App with AWS Amplify to notifications the build result from AWS Amplify Console.

You can add email notifications to notify stakeholders when a build succeeds or fails. But, cannot notify to Chat service (e.g. Slack).
If you use this app, You can take notification from Amplify Console with Slack.

<!-- GETTING STARTED -->
## Getting Started

### Click `DEPLOY TO AMPLIFY CONSOLE` button

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/fossamagna/amplify-slack-bot)

### service role

The `amplify-slack-bot` requires the addition of the following permissions to the service role.
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "",
            "Effect": "Allow",
            "Action": [
                "lambda:CreateFunctionUrlConfig",
                "lambda:GetFunctionUrlConfig",
                "lambda:DeleteFunctionUrlConfig",
                "lambda:UpdateFunctionUrlConfig",
                "sns:GetTopicAttributes",
                "sns:SetTopicAttributes",
                "sns:DeleteTopic",
                "sns:CreateTopic",
                "sns:Subscribe"
            ],
            "Resource": [
                "arn:aws:lambda:*:<accountId>:function:*",
                "arn:aws:sns:*:<accountId>:*"
            ]
        }
    ]
}
```

### Create new Slack app

Since `amplify-slack-bot` works as a Slack app, you must visit [your apps](https://api.slack.com/apps) on the Slack API website, and click Create New App.
Please follow [here](https://github.com/fossamagna/amplify-category-console-notification/blob/main/packages/amplify-slack-app/docs/SETUP.md) to set up the Slack app. 

### Register Secret Parameters

Once the Slack app is created, register the three secrets in the AWS parameter store.

- SLACK_SIGNING_SECRET
- SLACK_BOT_TOKEN
- SLACK_DEFAULT_CHANNEL

A repository has been created in your GitHub account where you forked amplify-slack-bot. Clone the repository. Pull the deployed app by running the `amplify pull` command.

![register-secret-parameters](https://user-images.githubusercontent.com/1638848/208944628-d6f23d0e-197a-4684-94b0-9ac457a5086b.gif)

### Edit `amplify/backend/function/slackApp/parameters.json`

Set the ID of the deployed app to `secretsPathAmplifyAppId` in `amplify/backend/function/slackApp/parameters.json`.

```json
{
  "secretsPathAmplifyAppId": "<appId>"
}
```

You can get the ID of the app by executing the following command. Replace the `<appId>` with its value. After rewriting the file, git commit it.

```
amplify env get --name dev | grep AmplifyAppId
```

After git push, Amplify Console will automatically start building and you will receive Amplify Console build notifications on the Slack channel you have set up.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/fossamagna/amplify-slack-bot/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Masahiko MURAKAMI - [@fossamagna](https://twitter.com/fossamagna)

Project Link: [https://github.com/fossamagna/amplify-slack-bot](https://github.com/fossamagna/amplify-slack-bot)

<!-- RELATED ARTICLE AND PROJECT -->
## Related article and project

- [Deploy to Amplify Consoleボタンを試してみた (Japanese)](https://fossamagna.github.io/deploy-to-amplify-console/)
- [amplify-category-console-notification](https://github.com/fossamagna/amplify-category-console-notification)
