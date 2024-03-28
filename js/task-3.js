console.log('\n');

class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value = str.concat(this.#value);
  }

  padEnd(str) {
    this.#value += str;
  }

  //Option 1
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }

  //Option 2
  //   padBoth(str) {
  //     this.#value = str.concat(this.#value) + str;
  //   }
}

const builder = new StringBuilder('.');

console.log(builder.getValue()); // "."

builder.padStart('^');
console.log(builder.getValue()); // "^."

builder.padEnd('^');
console.log(builder.getValue()); // "^.^"

builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
