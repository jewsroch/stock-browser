Stock Browser Project
=======
by: Chad Jewsbury

Libraries/Tools used:
* React
* PropTypes (opted for this instead of using TypeScript for quicker startup)
* React-redux
* Styled-components (for the minimal styling needed)
* Babel w/ ES6/7 presets.
* Webpack w/ minimal custom config (no dist or minification/uglify)

WebSocket interactions are handled with a custom (very bare-bones) redux middleware. This could be improved a lot but is functional for this quick project.

My Redux implementation could also be cleaned up a lot. There is a lot of boilerplate that could be simplified up with actionCreator libraries or helper functions and file organization.

GIF Demo:
![Gif DEMO](readme-assets/stock_browser.gif)

