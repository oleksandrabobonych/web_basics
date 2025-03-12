class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    remove() {
        let current = this.head;
        while (current && current.next) {
            if (current.value < 0) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}


const list = new LinkedList();
list.append(2.8);
list.append(-4.5);
list.append(3.3);
list.append(-7.6);
list.append(6.1);

console.log("Початковий список:");
list.print();

list.remove();

console.log("Список після видалення елементів після від’ємних значень:");
list.print();