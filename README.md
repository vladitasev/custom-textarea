# custom-textarea

Custom textarea for UI5 Web Components (with icons like the input) 


## How to run the project:
- `npm i`
- `npm run start`
- Open [http://localhost:8085/test-resources/pages/index.html](http://localhost:8085/test-resources/pages/index.html) in your browser.

### How it works
 - There is a new `_has-icons` attribute (respectively `_hasIcons` property) that is private and set in `onBeforeRendering`
 It will be used for CSS Selectors only and activates whenever you have at least one icon slotted
 - There is a new slot called `icons` where you can pass icons from the outside
 - There is some new CSS that positions the icons area absolutely over the textarea (and also increases its right padding
 so that it does not overlap. If growing - more padding needed due to the scrollbar)
 - The `hbs` template is currently a copy/paste of the original since the partial is not released yet.
 
 Note the code in `index.html` for the usage.
