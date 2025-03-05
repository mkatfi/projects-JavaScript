export class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  
    set value(newValue) {
      this._value = newValue;
    }
    get value() {
      return this._value;
    }
  
    set next(nextNode) {
      this._next = nextNode;
    }
    get next() {
      return this._next;
    }
}