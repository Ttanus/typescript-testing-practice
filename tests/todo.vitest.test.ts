import { describe, it, expect, beforeEach } from "vitest";
import { TodoManager } from "../src/todo";

describe("TodoManager (Vitest)", () => {
    let manager: TodoManager;

    beforeEach(() => {
        manager = new TodoManager();
    });

    it("add a new task", () => {
        const t = manager.add("Learn testing");
        expect(manager.list().length).toBe(1);
        expect(t.title).toBe("Learn testing");
        expect(t.done).toBe(false);
    });

    it("throws on empty title", () => {
        const t = manager.add("Task");
        const ok = manager.markDone(t.id);
        expect(ok).toBe(true);
        expect(manager.list("done").length).toBe(1);
    });

    it("removes a task", () => {
        const t = manager.add("X");
        const removed = manager.remove(t.id);
        expect(removed).toBe(true);
        expect(manager.list().length).toBe(0);
    });
});