# JS Drum Kit
JavaScript30, Project 1

Tags: *Javascript*, *React*


## Index

[1. Instructions](#1-instructions/) 

[2. Lessons learned](#2-lessons-learned)
  
## 1. Instructions
React components:
* App.js
  * KeyList.js
    * Key.js
  
## 2. Lessons learned
### data-key
As a key in a html element
e.g.
```html
<div data-key="76" class="key">
```
  
### .key
As key in a javascript querySelector
e.g.
```javascript
document.querySelector(`.key[data-key='${e.keyCode}']`)
```
  
### key.classList.add
Adds CSS classes to a html element 
```javascript
key.classList.add('playing')
``` 
[More information @ W3Schools](https://www.w3schools.com/jsref/prop_element_classlist.asp)  
  
### Detect the end of an CSS transition
To detect an end of a CSS transition, 'transitionend' can be used.
In the following example, removeTransition is a additional function.
```javascript
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
```  
[Detect the End of CSS Animations and Transitions with JavaScript](https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/)  
[Nuances of CSS Transitionend Events](https://seesparkbox.com/foundry/css_transitionend_event)  
[Transition end event](https://www.w3schools.com/jsref/event_transitionend.asp)  