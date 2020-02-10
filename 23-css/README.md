## Intro to CSS

# Introduction
This is going to be a very introductory CSS lecture. We are gonna discuss what CSS is, why we want to use CSS, and talk about some of the basic terms that are used in CSS. We will talk about  

# Key Questions
- What is CSS?
- Why use CSS? (What are some of problems it solves?)
- What's a tag?
- What's an attribute?
_ What is a CSS Rule?
- CSS Selectors (Type, Class, ID, attibute selector, pseudo classes, combinators)?
- What are CSS properties and values and how are they related to selectors?
- How do I use any of this knowledge???


# SWABATS
- Know what the three ways of adding CSS are
- Know how to create a CSS file and connect it to your index.html
- Add style rules to selected elements (Lets make some boxes)
- Use the :hover psuedo class to make these boxes move?
- Key frames???

HTML Terms to review.
- Tags
    - Create an h1 and some divs
    - Emmet
- Attributes
    - An attribute of a tag (class, id, href(links to some other page), src(images) etc.)

Note: HTML tags already have default styling!!
Reference: https://www.w3schools.com/cssref/css_default_values.asp

# What's a CSS rule?
- Spoiler: It's a selector and declaration block
Link: https://puzzleweb.ru/en/images/css/1_1.png

# Three ways of adding CSS
- Inline
    - Inside of an HTML element (Don't do this!!!!)
- Internal
    - Inside of <style></style> tags within an HTML Document
- External
    - Linking an external .css file

# Inline
- Use the style attribute in whatever tag you want to add style.
- Doing things this way is generally not recommended. 
- Since we can't do it inline we have to figure out a way to grab the tag we cant to style

# Internal
- Create a style tag (in the head), with a type of `text/css`
- Add our selector and styling.

# External
- Create css folder/directory and a style.css file
- Create a link tag in index.html, inside of the link tag add a few rules 

# Selector
- What is a selector?
    ```It is a pattern of elements and other terms that tell the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them. ```
- Types of selectors
    - Type: This group includes selectors that target an HTML element such as an <h1>.
    `h1 {}`
    - Class: This include groups that target a class.
    `.box {}`
    - ID: This grabs a unique ID.
    `#unique`

For more info on selectors: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors
# Properties and Values and Declarations
So we have selected an element, after our selector, everything inside of the curly braces is a `declaration`.

A declaration is made up of 2 parts.
*Properties and Values*

- Properties
    - A CSS property is a part of a declaration that is to the left of the colon. This is always paired with a value.
    - There are a lot of them
        - Reference: https://www.w3schools.com/cssref/
        - More stuff: https://css-tricks.com/almanac/properties/
        - custom properties: https://css-tricks.com/guides/css-custom-properties/


- Values
    - Values are in declarations and to the right of the property and colon. 
    - Every property has different values that can be used.
    - Things like colors have values that are related to color (blue, red, green, hexadecimal, rgb() etc.) and things like the size of something have values that are numerical (100px, 2em, etc.) 


# Exploring Properties and Creating Boxes
- width
    - CSS Units reference: https://www.w3schools.com/cssref/css_units.asp
        - Absolute 
        - Relative
- height
- background-color
- border (border:  <border-width> || <border-style> || <color>)
- display (every element on a page is a rectangular box)

A note on the difference between `display: inline;` and `display: inline-block`

`Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins & paddings are not respected, and with display: inline-block they are.`




# Lets make some boxes!
- Create 4 div tags with the class of box and nest them in one single div tag with the class of container
- Select the box class and add a declaration block that adds, color, height, width, border.
- Select the container class and display the boxes as inline block


# Lets make boxes grow when you hover over them
- Get box class selector and add hover pseudo class to it
- Add the rule you want to happen on hover



# Infinitely Iterating Boxes

```
@keyframes grow {
    from {
        width: 100px;
        height: 100px;
    }

    to {
        width: 200px;
        height: 200px;
    }
}

.container{
    display: flex;
    margin: auto;
    justify-content: center;
}

.box {
    width: 100px;
    height: 100px;
    display: inline-block;
    background-color: crimson;
    margin: auto;
    animation: grow 2s;
    animation-iteration-count: infinite;
}

```






