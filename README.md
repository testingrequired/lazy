# @testingrequired/lazy

Wrap an object to make its methods lazily evaluate.

## Installation

`$ npm i @testingrequired/lazy`

## Usage

```javascript
import assert from "assert";
import Lazy from "@testingrequired/lazy";

const lazyAssert = Lazy.of(assert);

lazyAssert.ok(false); // Does nothing
lazyAssert.ok(false)(); // Runs assertion

// This also works
const okFn = lazyAssert.ok(false); // Does nothing
okFn(); // Runs assertion

// Works with functions too
const hello = Lazy.fn(name => console.log(`Hello ${name}`));
const helloWorld = hello("World"); // Does nothing
const helloWorld(); // Hello World
```
