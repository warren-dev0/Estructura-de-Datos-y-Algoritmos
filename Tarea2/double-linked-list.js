// ! Estructura del Nodo

class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

// ! Estructura de la Lista

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // * Insertar al principio

    addToHead(data) {
        const newNode = new Node(data, this.head, null);
        if(this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        };
        this.size++;
    }

    // * Insertar al final

    addToTail(data) {
        const newNode = new Node(data, null, this.tail);
        if(this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // * Insertar en una posición específica

    insertAt(data, index) {
        if(index < 0 || index > this.size) return null;

        const newNode = new Node(data, null, null);

        let current = this.head;
        let previous;

        if(index === 0) {
            this.addToHead(data);
        } else if (index === this.size) {
            this.addToTail(data);
        } else {
            for(let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            newNode.prev = previous;
            current.prev = newNode;
            previous.next = newNode;
        }
        this.size++;

    }

    // * Eliminar al principio

    removeFromHead() {
        if(!this.head) return null;

        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
    }

    // * Eliminar al final

    removeFromTail() {
        if(!this.tail) return null;

        if(this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }

    // * Eliminar en una posición específica

    deleteAtPosition(index) {

        if (index < 0 || index > this.size) return null;

        let current = this.head;
        let previous;
        let next;

        if (index === 0) {
            this.removeFromHead();
        } else if(index === this.size) {
            this.removeFromTail();
        }else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
                next = current.next;
            }

            previous.next = next;
            next.prev = previous;
            this.size--;
        }
    }

    // * Eliminar por valor

    deleteAt(data) {

        let current = this.head;
        let previous = null;
        
        while(current !== null) {
            if(current.data === data) {
                if(!previous) {
                    return this.removeFromHead();
                } else if (!current.next) {
                    return this.removeFromTail();
                } else {
                    previous.next = current.next;
                    current.next.prev = previous;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }

        this.size--;
        return null;
    }

    // * Buscar un valor

    find(data) {

        let current = this.head;

        for(let i = 1; i <= this.size; i++) {
            if(current.data === data) return `El nodo con el valor "${data}" fue encontrado`;
            current = current.next;
            if(i === this.size) return `El nodo con el valor "${data}" no fue encontrado`
        }
    }

    // * Recorrer la lista de principio a fin

    print() {
        let current = this.head;
        let result = '';
        while(current) {
            result += current.data + ' <-> ';
            current = current.next;
        }
        return result += ' X ';
    }

    // * Recorrer la lista de fin a principio

    reversePrint() {
        let current = this.tail;
        let result = '';
        while(current) {
            result += current.data + ' <-> ';
            current = current.prev;
        }
        return result += ' X ';
    }

    // * Obtener el tamaño de la lista

    getSize() {
        return this.size;
    }

    // * Invertir la lista

    invert() {
        let current = this.head;
        let temp = null;

        while(current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if(temp !== null) {
            this.head = temp.prev;
        }
        

    }
}


let list = new List();

list.addToHead(1);


list.addToTail(2);


list.insertAt(3, 1);


list.removeFromHead();


list.removeFromTail();


list.addToHead(2)
list.addToHead(7)
list.addToHead(4)


list.deleteAt(7)

list.deleteAtPosition(0)

list.addToHead(2)
list.addToHead(7)
list.addToHead(4)

console.log(list.find(10));

console.log(list.print());

console.log(list.reversePrint());

console.log(list.size);

list.invert()

console.log(list.print());