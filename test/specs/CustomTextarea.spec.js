const assert = require("assert");

describe("ui5-custom-textarea rendering", () => {
	browser.url("http://localhost:8085/test-resources/pages/index.html");

	it("tests if web component is correctly rendered", () => {

		const innerContent = browser.$("#myFirstComponent").shadow$("div");

		assert.ok(innerContent, "content rendered");
	});
});
