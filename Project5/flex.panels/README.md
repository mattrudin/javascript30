# Flex Panels Image Gallery
JavaScript30, Project 5

Tags: *Javascript*, *CSS Flexbos*


## Index

[1. Instructions](#1-instructions/) 

[2. Lessons learned](#2-lessons-learned)



## 1. Instructions



## 2. Lessons learned
### Flexbox tutorial
[Free Flexbox tutorial by Wes Bos](www.flexbox.io) 

### Snippets in Sublime
Added the following snippet for faster development:
```xml
<snippet>
	<content><![CDATA[
import React from 'react';
import './${1:TITLE}.css';
import ${2:COMPONENT} from '../${2:COMPONENT}/${2:COMPONENT}';

class ${1:TITLE} extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render() {
		return(
			<div className="${1:TITLE}">
				
			</div>
		);
	}
}

export default ${1:TITLE};
]]></content>
	<!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
	<!-- <tabTrigger>hello</tabTrigger> -->
	<tabTrigger>doReactStatefull</tabTrigger>
	<!-- Optional: Set a scope to limit where the snippet will trigger -->
	<!-- <scope>source.python</scope> -->
</snippet>
```
[A Guide to Sublime Text Snippets](https://medium.freecodecamp.org/a-guide-to-preserving-your-wrists-with-sublime-text-snippets-7541662a53f2)

### Template literals in CSS className
```javascript
className={`${index} ${open ? 'open' : ''} ${openActive ? 'open-active' : ''}`}
```
'open' and 'openActive' will be toggled by an eventHandler.

### Styling react components
Use "style=" to style a react component. Eg:
```javascript
const style = {
	color: "white",
	fontSize: "13px"
}

<h1 style={style}>Style me!!</h1>
```
[The best “styling in React” tutorial you’ve ever seen](https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945)  
Section "Creating a style object variable"