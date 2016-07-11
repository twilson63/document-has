# document-has

document has is a module that is meant to run in the browser. The purpose of the module is to create an array of dom elements that you want to require in your document. Then add the array to the document-has function and it will create a test button on the top right corner of your web page. Which provides some basic feedback to learners as they perform exercises learning to code.

Browser example using browserify cdn.

``` html
<script src="https://wzrd.in/standalone/document-has@latest"></script>
<script>
documentHas(
  Array(
    'h1',
    'p',
    'main > section#content',
    'main > section#content > article.foo'
  )
)
</script>
```

Example

<a class="jsbin-embed" href="https://jsbin.com/nulabe/3/embed?html,output">Hello World on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.36.16"></script>

## Contributing

Pull Requests are welcome

## License

MIT
