export type Task = { // made for static checking
    id: number;
    title: string;
    description?: string | undefined;
    dueDate?: string | undefined;
    done: boolean;
}

export class TodoManager {
    private tasks: Task[] = [];

    add(title: string, description?: string, dueDate?: string): Task {
        if (!title || !title.trim()) throw new Error("Title cannot be empty");
        const task: Task = {
            id: Date.now() + Math.floor(Math.random() * 10000),
            title: title.trim(),
            description,
            dueDate,
            done: false
        };
        this.tasks.push(task);
        return task;
    }

    remove(id: number): boolean {
        const original = this.tasks.length;
        this.tasks = this.tasks.filter(t => t.id != id);
        return this.tasks.length < original;
    }

    markDone(id: number): boolean {
        const t = this.tasks.find(x => x.id === id);
        if (!t) return false;
        t.done = true;
        return true;
    }

    list(filter?: "all" | "done" | "pending"): Task[] {
        if (filter === "done") return this.tasks.filter(t => t.done);
        if (filter === "pending") return this.tasks.filter(t => !t.done);
        return [...this.tasks];
    }

    clearAll() {
        this.tasks = [];
    }
}