# custom-textarea

Custom textarea for UI5 Web Components (with icons like the input) 


## How to run the project:
- `npm i`
- `npm run start`
- Open [http://localhost:8085/test-resources/pages/index.html](http://localhost:8085/test-resources/pages/index.html) in your browser.

### How it works

#### `.js` file

```js
import Textarea from "@ui5/webcomponents/dist/Textarea.js";

// Template
import CustomTextareaTemplate from "./generated/templates/CustomTextareaTemplate.lit.js";

// Styles
import CustomTextareaCss from "./generated/themes/CustomTextarea.css.js";

const metadata = {
	tag: "ui5-custom-textarea",
	properties: {
		_hasIcons: {
			type: Boolean,
		},
	},
	slots: {
		icons: {
			type: HTMLElement,
		},
	},
};

class CustomTextarea extends Textarea {
	static get metadata() {
		return metadata;
	}

	static get template() {
		return CustomTextareaTemplate;
	}

	static get styles() {
		return [Textarea.styles, CustomTextareaCss];
	}

	onBeforeRendering() {
		super.onBeforeRendering();
		this._hasIcons = !!this.icons.length;
	}
}

CustomTextarea.define();

export default CustomTextarea;

```

 - There is a new `_has-icons` attribute (respectively `_hasIcons` property) that is private and set in `onBeforeRendering`
 It will be used for CSS Selectors only and activates whenever you have at least one icon slotted
 - There is a new slot called `icons` where you can pass icons from the outside
 
#### `.hbs` file

```html
{{>include "@ui5/webcomponents/src/TextArea.hbs"}}

{{#*inline "afterTextarea"}}
    <span class="ui5-textarea-icons">
		<slot name="icons"></slot>
	</span>
{{/inline}}

```

- implements the new partial
 
 #### `.css` file

```css
.ui5-textarea-icons {
    position: absolute;
    top: 0.75rem;
    right: 0.5rem;
    z-index: 1;
}
:host([_has-icons]) .ui5-textarea-icons {
    right: 1.5rem;
}

:host([_has-icons]) .ui5-textarea-root {
    position: relative;
}

:host([_has-icons]) .ui5-textarea-inner {
    padding-right: 1.25rem;
}
:host([growing][_has-icons]) .ui5-textarea-inner {
    padding-right: 2.25rem;
}

::slotted(ui5-icon) {
    cursor: pointer;
}
```
 
 - There is some new CSS that positions the icons area absolutely over the textarea (and also increases its right padding
  so that it does not overlap. If growing - more padding needed due to the scrollbar)

 
#### Usage

```html
<ui5-custom-textarea id="textarea-value-state-msg" growing value="Test" value-state="Error">
	<div id="value-state-msg" slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
	<ui5-icon id="clr" name="decline" slot="icons"></ui5-icon>
</ui5-custom-textarea>
```

- Note the code in `index.html` for the full usage.
