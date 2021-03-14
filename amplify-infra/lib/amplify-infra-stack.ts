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
        version: 1,
        frontend: {
          phases: {
            preBuild: {
              commands: ["npm ci"]
            },
            build: {
              commands: ["npm run build"]
            }
          },
          artifacts: {
            baseDirectory: "build",
            files: ["**/*"]
          },
          cache: {
            paths: ["node_modules/**/*"]
          }
        }
      })
    });

    amplifyApp.addBranch("master", {
      autoBuild: true
    });

    amplifyApp.addCustomRule({
      source: "/<*>",
      target: "/index.html",
      status: amplify.RedirectStatus.NOT_FOUND_REWRITE
    });

    amplifyApp.addCustomRule({
      source:
        "</^[^.]+$|.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>",
      target: "/index.html",
      status: amplify.RedirectStatus.REWRITE
    });
  }
}
