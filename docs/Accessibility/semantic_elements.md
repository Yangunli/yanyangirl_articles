# Semantic elements

_Semantic elements = elements with a meaning._

div & span 未被賦予意義，當我們要賦予其(所帶的內容)意義時，需要添加 aria 以及 role。

針對瀏覽器，我們必須讓它理解程式碼的意義，也因此我們需要使用 Semantic elements(語意化的元素)。

面向使用者時，除了一般的載具外，網頁也能提供給 scrren reader 更好的可讀性。

> To enable assistive technology products to expose a more fine-grained interface than is otherwise possible with HTML elements and attributes, a set of annotations for assistive technology products can be specified (the ARIA role and aria-\* attributes). [WAI-ARIA] \_w3.org

```js title="common semantic elements "
    <article>
    <aside>
    <details>
    <figcaption>
    <figure>
    <footer>
    <header>
    <main>
    <mark>
    <nav>
    <section>
    <summary>
    <time>
```

> Embedded content is content that imports another resource into the document, or content from another vocabulary that is inserted into the document.

```js title="Embedded content elements "
    <audio>
    <canvas>
    <embed>
    <iframe>
    <img>
    <math>
    <object>
    <picture>
    <svg>
    <video>
```

```js title="Interactive content elements "
<a> // if(href)
<audio> //if(controls)
<button> <details> <embed> <iframe> // if(usemap)
<input>  //if(type)
<keygen> <label> <select> <textarea> <video>  //if(controls)

```

> This semantic information is critical to assistive technologies. For example, a screen reader will query the browser for semantic information and use that information to present the document or application in synthetic speech.

> [參考資料 1: w3.org ](https://www.w3.org/TR/2016/REC-html51-20161101/dom.html "游標顯示")
