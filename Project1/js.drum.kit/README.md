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
  
### Handling events in React
To register all the keydown events at the window, bind the "window.addEventListener" with the livecycle method "componentWillMount" in the App.js. 
```javascript
componentWillMount() {
    window.addEventListener('keydown', this.playSound);
  }
```
[Keybindings in React.js](https://medium.com/@alroth/keybindings-in-react-js-252007d3bdd9)

### For-loops in React (or how to create different components)
If components with minor changes have to be created, use the for-loop, wraped in a method. The method should return the components.
```javascript
class KeyList extends React.Component {

  createKeys() {
    let keysArray = [];
    const keycodes = [65,83,68,70,71,72,74,75,76]
    const keys = ['A','S','D','F','G','H','J','K','L'];
    const instruments = ['clap', 'hihat', 'kick', 'openhat', 'boom', 'ride', 'snare', 'tom', 'tink'];
    for(let i = 0; i < keycodes.length; i++) {
        keysArray.push(<Key keycode ={keycodes[i]} keys={keys[i]} instrument={instruments[i]} />) 
    }
    return keysArray;
  }

  render() {
    return(
      <div className="keys">
        {this.createKeys()}
        </div>
    )
  }
}
```
[For loops in React](https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778)  

### Lifecycle methods in React
Interaction with the DOM has to be trough lifecycle methods. Even if its just an document.getElementById() method, lifecycle has to be used. The whole lifecycle consists of three intervalls with a bunch of methods:  
* Mounting
  * constructor()
  * componentWillMount()
  * render()
  * componentDidMount()
* Updating
  * componentWillReceiveProps()
  * shouldComponentUpdate()
  * componentWillUpdate()
  * render()
  * componentDidUpdate()
* Unmounting
  * componentWillUnmount()
More information under the following link:  
[React Components Lifecycle](https://medium.com/mofed/reacts-component-lifecycles-adf0ebc89d23)