class MyStack {
    constructor() {
        // No native Queue object in JS, so an array is used with the pop and unshift functions
        this.queue = []
    }

    push(x) {
        this.queue.unshift(x)
        while(this.queue.slice(-1)[0] !== x) {
            let temp = this.queue.pop()
            this.queue.unshift(temp)
        }
    }

    pop() {
        return this.queue.pop()
    }

    top() {
        return this.queue.slice(-1)[0]
    }

    empty() {
        return this.queue.length > 0 ? false : true
    }
}