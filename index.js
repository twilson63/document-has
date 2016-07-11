module.exports = function (elements) {
  var div, btn, output

  function runTest (elements) {
    return function (e) {
      e.preventDefault()
      output.innerHTML = ''
      function v (el) {
        return has(el) ? null : el + ' is required!'
      }
      // run test
      test(elements.map(v))
    }
  }

  function setup () {
    div = document.createElement('div')
    btn = document.createElement('button')
    output = document.createElement('div')

    output.id = 'output'
    btn.id = 'test'
    btn.innerText = 'Test'

    div.style.float = 'right'

    div.appendChild(btn)
    div.appendChild(output)

    document.body.insertBefore(div, document.body.firstChild)

    btn.addEventListener('click', runTest(elements))
  }

  function has (el) {
    return document.querySelector('body > ' + el) !== null
  }

  /* basic dom test functions */
  function test (rules) {
    var errors = rules.filter(function (v) { return v !== null})
    if (errors.length === 0) { return log('success').style.color = 'green' }
    errors.forEach(err)
  }

  // log error as red text
  function err (msg) {
    var p = log(msg)
    p.style.color = 'red'
  }

  // log message
  function log (msg) {
    var p = document.createElement('p')
    p.innerText = msg
    output.appendChild(p)
    return p
  }

  // init
  setup()
}
