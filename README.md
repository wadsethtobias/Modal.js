# Modal.js
## A lightweight javascript library to allow for easily building modals
---
## Contents
* ### [Installation Guide](#installation)
* ### [Usage Guide](#usage)
    + #### [HTML](#html)
    + #### [Javascript](#javascript)
* ### [TODO](#todo)
---

## Installation Guide<a name="installation"></a>
### 1. Navigate to the [releases](https://github.com/wadsethtobias/Modal.js/releases) sections
### 2. Download the latest release
### 3. Drag and drop the Modal.js and the Modal.css folder into your project
### 4. On the page you want to use modals on import the javascript and the css files
---
## Usage Guide<a name="usage"></a>
### HTML<a name="html"></a>
```html
<button class="modal__button" data-modal-open="myModal">Click to open the modal</button>

<div class="modal" data-modal="myModal">
    <div class="modal__content">
        <span class="modal__close" data-modal-close="myModal">&times;</span>
        <h1 class="modal__title">Title</h1>
        <p class="modal__text">Some text</p>
    </div>
</div>
```
### The following attributes are being used to define the modals
```html
data-modal
```

This defines the identifier for a specific modal
```html
data-modal-open
```

This is used for the button to be able to know which modal to open on trigger
```html
data-modal-close
```

This is used for the close button to be able to know which modal to close on trigger
___
### Javascript<a name="javascript"></a>
```javascript
modal('myModal');
```
This defines and setups the neccessary event listeners for hte modal to be able to open and close
___
## TODO<a name="todo"></a>
* ### Allow for multiple modals through a single javascript function
