import { expect } from "chai";
import { TodoManager } from "../src/todo.ts";

describe("TodoManager (Mocha + Chai)", function () {
    let manager: TodoManager;

    beforeEach(() => {
        manager = new TodoManager();
    });

    it("add a new task", () => {
        const t = manager.add("Learn testing", "Read docs");
        expect(manager.list().length).to.equal(1);
        expect(t.title).to.equal("Learn testing");
        expect(t.done).to.equal(false);
    });

    it("throws on empty title", () => {
        expect(() => manager.add("")).to.throw("Title cannot be empty");
    });

    it("marks as done", () => {
        const t = manager.add("Task");
        const ok = manager.markDone(t.id);
        expect(ok).to.equal(true);
        expect(manager.list("done").length).to.equal(1);
    });

    it("removes a task", () => {
        const t = manager.add("X");
        const removed = manager.remove(t.id);
        expect(removed).to.equal(true);
        expect(manager.list().length).to.equal(0);
    });
});