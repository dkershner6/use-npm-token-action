import { Node20GitHubActionTypescriptProject } from "dkershner6-projen-github-actions";

import { RunsUsing } from "projen-github-action-typescript";

const MAJOR_VERSION = 2;

const project = new Node20GitHubActionTypescriptProject({
    majorVersion: MAJOR_VERSION,
    defaultReleaseBranch: "main",

    devDeps: [
        "dkershner6-projen-github-actions",
        "projen-github-action-typescript",
    ],
    name: "Use NPM Token",
    description:
        "Use an NPM token within an .npmrc file inside GitHub actions. Scoped packages are the primary use case.",

    actionMetadata: {
        name: "Comment Reaction",
        description:
            "Use an NPM token within an .npmrc file inside GitHub actions. Scoped packages are the primary use case.",
        inputs: {
            token: {
                description:
                    "An NPM token with whatever access is needed for your GitHub Action workflow",
                required: true,
            },
            workspace: {
                description:
                    "The location of your Node workspace (needs to be a sibling of package.json),",
                default: "./",
                required: false,
            },
        },
        runs: {
            using: RunsUsing.NODE_20,
            main: "dist/index.js",
        },
        branding: {
            icon: "target",
            color: "yellow",
        },
    },

    deps: [],
    gitignore: ["test-scratch"],

    autoApproveOptions: {
        allowedUsernames: ["dkershner6"],
    },

    sampleCode: false,
    docgen: true,
});

project.synth();
