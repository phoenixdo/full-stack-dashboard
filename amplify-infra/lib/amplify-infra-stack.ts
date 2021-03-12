import * as cdk from "@aws-cdk/core";
import * as amplify from "@aws-cdk/aws-amplify";
import * as codebuild from "@aws-cdk/aws-codebuild";

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
      buildSpec: codebuild.BuildSpec.fromObject({
        // Alternatively add a `amplify.yml` to the repo
        version: "1.0",
        frontend: {
          phases: {
            preBuild: {
              commands: ["yarn install"]
            },
            build: {
              commands: ["yarn run build"]
            }
          },
          artifacts: {
            baseDirectory: "build",
            files: "**/*"
          }
        }
      })
    });

    const masterBranch = amplifyApp.addBranch("master");
  }
}
