import Textarea from "@ui5/webcomponents/dist/Textarea.js";
import Popover from "@ui5/webcomponents/dist/Popover.js";

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

	static async onDefine() {
		await Popover.define();
	}

	onBeforeRendering() {
		super.onBeforeRendering();
		this._hasIcons = !!this.icons.length;
	}
}

CustomTextarea.define();

export default CustomTextarea;
