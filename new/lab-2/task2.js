class DoublyListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new DoublyListNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    removeBeforeThree() {
        let current = this.head;
        while (current) {
            if (current.value === 3 && current.prev) {
                let nodeToRemove = current.prev;
                if (nodeToRemove.prev) {
                    nodeToRemove.prev.next = current;
                    current.prev = nodeToRemove.prev;
                } else {
                    this.head = current;
                    current.prev = null;
                }
            }
            current = current.next;
        }
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " <-> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

const list = new DoublyLinkedList();
list.append(3.8);
list.append(5.8);
list.append(3);
list.append(9.8);
list.append(3);
list.append(4.5);

console.log("Початковий список:");
list.print();

list.removeBeforeThree();

console.log("Список після видалення елементів перед 3:");
list.print();
