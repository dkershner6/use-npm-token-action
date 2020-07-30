# Jest Coverage Commenter GitHub Action

Use an NPM token within an .npmrc file inside GitHub actions. Scoped packages are the primary use case.

## WARNING

If you commit after this action runs, you will likely leak your NPM token secret in your newly created .npmrc file. Please use [GitIgnore Parser](https://github.com/marketplace/actions/gitignore-parser) to fully prevent this from occurring.

## Usage

### Inputs

| key | default | required | description |
|-----|---------|----------|-------------|
| token | n/a | true | An NPM token with whatever access is needed for your GitHub Action workflow |
| workspace | `./` | false | The location of your Node workspace (needs to be a sibling of package.json) |

### Outputs

None

### Example Workflow

```yaml
on: pull_request

jobs:
  test-coverage:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Use NPM Token with organization read access
        uses: dkershner6/use-npm-token-action@v1
        with:
          token: "${{ secrets.NPMJS_READ }}"
          workspace: ./node

      - run: npm i # This will now work with scoped packages

      
```
