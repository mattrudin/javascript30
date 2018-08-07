# CSS and JS Clock
JavaScript30, Project 2

Tags: *Javascript*, *CSS*, *React*


## Index

[1. Instructions](#1-instructions/) 

[2. Lessons learned](#2-lessons-learned)



## 1. Instructions



## 2. Lessons learned
### Axis of the css element
Standard: Origin (axis of the element) is in the middle:
```css
transform-origin: : 50%;
```
If the axis should be at the right side of the element, use 100%:
```css
transform-origin: : 100%;
```  
### Orientation of the css element
Normally, a css element is horizontal aligned (0deg). This can be changed with the rotate value (in clockwise direction):
```css
transform: rotate(90deg);
```  
### Velocity of the css element
With 
```css
transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
```  
we can animate the 'tick'-move (velocity) of the hands.
### Date()
Get the current date as a object:
```javascript
const now = new Date();
```
...and get from this object the seconds, minutes, hours via methods...
```javascript
const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();
```  
[JavaScript Date Objects](https://www.w3schools.com/js/js_dates.asp)  
[JavaScript Get Date Methods](https://www.w3schools.com/js/js_date_methods.asp)  

