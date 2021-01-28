import { Stack as Stack } from "./stack.js";

const stack = new Stack()

stack.isEmpty()

stack.push(100)
stack.push(200)

stack.peek()

stack.push(300)

console.log('\nStack Print')
console.log(stack.print(), '\n')

stack.pop()
stack.pop()

stack.clear()

console.log(stack.print())

stack.size()

stack.isEmpty()
    // let i = 123;
    // for (i = 0; i < 10; i++) {
    //     console.log(i);
    // }