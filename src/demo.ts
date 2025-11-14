import { TodoManager } from "./todo";

const todo = new TodoManager();

todo.add("Learn TypeScript");
todo.add("Practice testing with Mocha and Vitest");

console.log("All tasks:", todo.list());

// Safest version
const first = todo.list()[0];
if (first) todo.markDone(first.id);

console.log("After marking done:", todo.list("done"));

const second = todo.list()[1];
if (second) todo.remove(second.id);

console.log("After removing one task:", todo.list());