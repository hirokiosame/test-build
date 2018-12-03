## test-build

This is a minimum working example demonstrating a problem I'm encountering with extracting all CSS from a set of Vue components into one file.

### This reproduction uses
- Webpack v4.26.0
- vue-loader v15.4.2
- Mini CSS Extract plugin v0.4.4


### To reproduce
1. Clone the repo & `npm install`
2. `npm run build` to produce a build.
  - This command deletes the `dist` directory, produces a build, and tests the build.
  - The test ensures that
  		1. the component file actually exports a component
  		2. the component can be imported on the server-end
3. Notice the test fails. With the current settings, *the CSS gets extracted into one file, but breaks the component file*.
4. Comment out L40-57 in `webpack.config.js` and run `npm run build` again.
5. Notice the test passes but there is a CSS file produced for every entry point
