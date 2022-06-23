# TextScanner
![NPM Version](https://img.shields.io/github/package-json/v/chupacabral/textscanner?color=BC0000&logo=npm&style=for-the-badge) &nbsp;
![License](https://img.shields.io/npm/l/@chupacabral/textscanner?color=%23007EC6&style=for-the-badge)

<font size='6px'>**NOTE: NOT READY FOR ACTUAL USE YET**</font>\
*I mean, it works as described, but the current functionality is notably less
than what I'm intending to have by the end.*

&nbsp;

Simple, convenient, but customizable lexical scanner. Inspired by, but distinct from, Ruby's StringScanner.

## How To Use
Instantiate a TextScanner object like so:
```js
var TextScanner = require('textscanner')

let scanner = new TextScanner('Hello, World!')
```

For the following code examples, assume they are after the previous block of
code.

## Methods

### check ( ...options )
Checks to see if, at the current point for the scanner, there is any text
coming up in the string that would match any of the given option strings.

Does not move the scanner position for the string.

Returns the matched text, otherwise `null`.
```js
console.log(scanner.scan('Goodbye'))  // Outputs null

let greeting = scanner.check('Hello', 'Greetings', 'Salutations')

console.log(greeting)    // Outputs "Hello"
console.log(scanner.pos) // Outputs 0
```

### scan ( ...options )
Like `check()`, looks to see if any of the given option strings come up next
in the string being scanner.

If there is a match, this method will adjust the scanner position forward.

Returns the matched text, otherwise `null`.
```js
console.log(scanner.scan('Goodbye'))  // Outputs null

let greeting = scanner.scan('Hello', 'Greetings', 'Salutations')

console.log(greeting)    // Outputs "Hello"
console.log(scanner.pos) // Outputs 5
```

### movePointer ( n )
Adjusts the scan pointer `n` characters.

The value for `n` can be negative, and negative values will move the pointer
backwards along the scanned string.

If the pointer position would end up going out of bounds of the string, it will
set itself to the beginning/end of the string.
```js
scanner.movePointer(6)

console.log(scanner.pos)  // Outputs 6

scanner.movePointer(100)

console.log(scanner.pos)  // Outputs 13
```

### peek ( n = 1 )
Returns the next `n` characters after the scan pointer in the string being
scanned.

Peeking past the remaining length of the string will just return whatever's
left.
```js
let firstFive = scanner.peek(5)

console.log(firstFive)  // Outputs "Hello"
```

### scannedText ( )
Returns all the text before the scan pointer.
```js
scanner.scan('Hello')

console.log(scanner.scannedText())  // Outputs "Hello"
```

### unscannedText ( )
Returns all the text after the scan pointer.
```js
scanner.scan('Hello')

console.log(scanner.unscannedText())  // Outputs ", World!"
```