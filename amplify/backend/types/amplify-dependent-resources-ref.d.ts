export type AmplifyDependentResourcesAttributes = {
    "function": {
        "slackApp": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "consolenotification": {
        "slackApp": {
            "SNSTopicArn": "string",
            "SNSTopicName": "string",
            "EventRuleId": "string",
            "EventRuleArn": "string",
            "Region": "string",
            "FunctionUrl": "string"
        }
    }
}