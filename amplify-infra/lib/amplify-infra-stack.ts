import * as cdk from "@aws-cdk/core";
import * as amplify from "@aws-cdk/aws-amplify";

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    //Creation of the Amplify Application
    const amplifyApp = new amplify.App(this, "full-stack-dashboard", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "phoenixdo",
        repository: "full-stack-dashboard",
        oauthToken: cdk.SecretValue.secretsManager("full-stack-dashboard", {
          jsonField: "full-stack-dashboard"
        })
      }),
      autoBranchCreation: {
        patterns: ["*"]
      }
    });

    const masterBranch = amplifyApp.addBranch("master");

    const domain = amplifyApp.addDomain("amplified.host");
    domain.mapRoot(masterBranch);
    domain.mapSubDomain(masterBranch, "www");
  }
}
