The job failed because pnpm was not found in the runner environment:

```
Unable to locate executable file: pnpm. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.
```

**Solution:**  
Your workflow expects pnpm to be available, but it isn’t. The recommended way to fix this is to add a step to install pnpm before running pnpm commands. You can use corepack to do this since you already enable it, but you need to make sure pnpm is properly activated.

Add the following step before any pnpm usage (ideally right after `corepack enable`):

```yaml
- name: Prepare pnpm
  run: corepack prepare pnpm@latest --activate
```

For example, update the `_setup` job steps in your workflow file (.github/workflows/ci.yml, ref: 623618bfe1a62fdf2c73f32da356244f546fd47c):

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v4

  - name: Use Node from .nvmrc
    uses: actions/setup-node@v4
    with:
      node-version-file: '.nvmrc'
      cache: 'pnpm'

  - name: Enable corepack (pnpm)
    run: corepack enable

  - name: Prepare pnpm
    run: corepack prepare pnpm@latest --activate

  # ... rest of your steps
```

Do this for all jobs that use pnpm. This will ensure pnpm is available on all runners and resolve the job failure.

4s
Run actions/setup-node@v4
with:
node-version-file: .nvmrc
cache: pnpm
always-auth: false
check-latest: false
token: _\*\*
env:
CI: true
Node version file is not JSON file
Resolved .nvmrc as lts/_
Attempt to resolve LTS alias from manifest...
Found in cache @ /opt/hostedtoolcache/node/22.18.0/x64
Environment details
node: v22.18.0
npm: 10.9.3
yarn: 1.22.22
Error: Unable to locate executable file: pnpm. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.
