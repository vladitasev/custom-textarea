# custom-textarea

Custom textarea for UI5 Web Components (with icons like the input) 


## How to run the project:
- `npm i`
- `npm run start`
- Open [http://localhost:8085/test-resources/pages/index.html](http://localhost:8085/test-resources/pages/index.html) in your browser.

Observe the "description" in the tree.

## Usage of the custom tree, see `test/pages/index.html`

```html
<ui5-custom-tree id="tree" no-data-text="No data" mode="None">
	<ui5-custom-tree-item expanded description="Some description" text="Tree 1">
		<ui5-custom-tree-item expanded description="Some description" text="Tree 1.1">
			<ui5-custom-tree-item description="Some description" text="Tree 1.1.1"></ui5-custom-tree-item>
			<ui5-custom-tree-item description="Some description" text="Tree 1.1.2"></ui5-custom-tree-item>
		</ui5-custom-tree-item>
	</ui5-custom-tree-item>

	<ui5-custom-tree-item description="Some description" text="Tree 2">
		<ui5-custom-tree-item description="Some description" text="Tree 2.1">
			<ui5-custom-tree-item description="Some description" text="Tree 2.1.1"></ui5-custom-tree-item>
			<ui5-custom-tree-item description="Some description" text="Tree 2.1.2">
				<ui5-custom-tree-item description="Some description" text="Tree 2.1.2.1"></ui5-custom-tree-item>
				<ui5-custom-tree-item description="Some description" text="Tree 2.1.2.2"></ui5-custom-tree-item>
				<ui5-custom-tree-item description="Some description" text="Tree 2.1.2.3"></ui5-custom-tree-item>
				<ui5-custom-tree-item description="Some description" text="Tree 2.1.2.5"></ui5-custom-tree-item>
			</ui5-custom-tree-item>
		</ui5-custom-tree-item>
		<ui5-custom-tree-item description="Some description" text="Tree 2.2"></ui5-custom-tree-item>
	</ui5-custom-tree-item>

	<ui5-custom-tree-item expanded description="Some description" text="Tree 3 (no icon)">
	</ui5-custom-tree-item>

</ui5-custom-tree>
```


## How it works:

 1. You extend `Tree.js`, see the file `CustomTree.js`

	```js
	const metadata = {
		tag: "ui5-custom-tree",
	};
	
	class CustomTree extends Tree {
		static get metadata() {
			return metadata;
		}
	
		static get template() {
			return CustomTreeTemplate;
		}
	
		static get styles() {
			return [Tree.styles, CustomTreeCss];
		}
	}
	```
	
	and give it a new name `ui5-custom-tree`, provide a custom template `CustomTreeTemplate`, and as for styles: provide it the styles of the 
	existing tree, plus your new styles `CustomTreeCss`

 2. You override the template, see `CustomTree.hbs`.
 
 	This is a copy of the `Tree.hbs` template, but the content, slotted into the `TreeListItem` changed from this:
 	
 	```html
	{{this.treeItem.text}}
	```
	
	to this:
	
	```html
	<div class="custom-tree-box">
		<div class="custom-tree-title">{{this.treeItem.text}}</div>
		<div class="custom-tree-description">{{this.treeItem.description}}</div>
	</div>
	```
	
	which is a more complex structure of title and description.
	
	Everything else remains the same.
	
  3. This new html is supported by the new CSS, see `themes/CustomTree.css`
  
  	```css
	.custom-tree-box {
		display: flex;
		flex-direction: column;
	}
	
	.custom-tree-box>.custom-tree-title {
		font-weight: bold;
	}
	
	.custom-tree-box>.custom-tree-description {
	
	}
	```
 
   4. And finally create your own tree item with a description property, see `CustomTreeItem.js`:
   
   ```js
   const metadata = {
   	tag: "ui5-custom-tree-item",
   	properties: {
   		description: {
   			type: String,
   		},
   	},
   };
   
   class CustomTreeItem extends TreeItem {
   	static get metadata() {
   		return metadata;
   	}
   }
   ```
   

	
