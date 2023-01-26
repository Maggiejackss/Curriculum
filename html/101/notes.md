# HTML 101

## HTML forms the structure of all web pages

HTML -> hyper text markup language
the '<head>' tag configures the page and is not rendered by the browser.
The '<title>' tag contains the name of the page and is rendered in the browsers tab.
Tags that have opening and closing elements are known as container elements. 
Tags that do not have closing elements are not container elements and are called self closing tags.
To make reading an HTML file easier, lines are nested within their parent element.
Browsers read HTML and in a sense, HTML is like a big, long string.
Browsers can read files or can start a server in VS Code with **Go Live**.
Semantic HTML means tag denotes what kind of content is inside of it (tag explains what is inside of it(e.g. <ul>))
### Some of the most common elements are:
```

<ul> - unordered list
<ol> - ordered list
<li> - list item, must be contained within '<ul>' or an '<ol>'
<header> - the header of a page
<main> - the main aread of a page
<body> - contains all other rendering HTML elements
<footer> - footer area of a page
<nav> - contains navigation elements, usually found within '<header>'
<p> - used for paragraphs of text
<img /> - used for images (self closing/no closing tag), must have an '<src>' attribute
<a> - anchor tag, used to hyperlink elements with the 'href' attribute
<h1-6> - header text ((1) is largest-(6) is smallest)
```

### generic elements include
```
<div> - generic containing element
<section> - defines a section for child elements
```

### tags used inside of '<head>'
```
<link> - used to link a stylesheet, only found in '<head>'
```