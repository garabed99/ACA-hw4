class Stack {
  constructor() {
    this.array = [];
  }

  isEmpty() {
    if (this.array.length === 0) {
      return true;
    } else return false;
  }

  length() {
    return this.array.length;
  }

  push(element) {
    this.array.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  search(element) {
    for (let i = 0; i < this.length(); i++) {
      if (this.array[i] == element) {
        return i;
      }
    }
    return "no such element";
  }

  print() {
    console.log(this.array);
  }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log(stack.isEmpty());
console.log(stack.length());
console.log(stack.search(30));
stack.pop();
stack.print();
console.log(stack.search(30));
