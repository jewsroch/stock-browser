Stock Browser Project
=======
by: Chad Jewsbury

Libraries/Tools used:
* React
* PropTypes (opted for this instead of using TypeScript for quicker startup)
* React-redux (* see below)
* Styled-components (for the minimal styling needed)
* Babel w/ ES6/7 presets.
* Webpack w/ minimal custom config (no dist or minification/uglify)

WebSocket interactions are handled with custom (very bare-bones) redux middleware. This could be improved a lot but is functional for this quick project.

My Redux implementation could also be cleaned up a lot. There is a lot of boilerplate that could be cleaned up with actionCreator libraries or helper functions and file organization.

Note about react-redux:
I chose to go ahead and use `connect` for simplicity and so that I didn't have to implement all my own `shouldComponentRender` logic. I'm very curious to learn more about what you're doing instead of connect but wasn't brave enough to try implementing an rxjs only redux flow from the few blog posts I could find on the subject. :)
