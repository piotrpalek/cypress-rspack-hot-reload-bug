# Hot Reload Bug Reproduction

This repository demonstrates a hot reload bug in [cypress-rspack-dev-server](https://github.com/th3fallen/cypress-rspack-dev-server).

## Steps to Reproduce

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start Cypress:
   ```bash
   npm run cypress:open
   ```

3. Select "Component Testing"

4. Run the Button test - should work fine initially

5. **Trigger the bug**: While tests are running, make any change to `Button.cy.tsx` 
   (e.g., change "Click me" to "Click me now")

6. Save the file

## Expected vs Actual Behavior

**Expected**: Test should hot reload and re-run with changes
**Actual**: Error occurs: `TypeError: Cannot read properties of undefined (reading 'map')`

## Debug Output

To see detailed debug information:
```bash
DEBUG=cypress-rspack-dev-server:rspackPlugin npm run cypress:open
```

Look for the sequence:
```
beforeCompile called, files count: N
onSpecsChange called, new specs count: 0 current files count: N
beforeCompile called, files count: 0
```

This shows files being lost during hot reload.