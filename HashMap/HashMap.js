// import { LinkedList } from "./LinkedList.js";

// // class with a hash map implementation using Linked List for collisions
// // - **Constructor**: Initializes an empty hash map with `loadFactor`, `capacity`, `buckets`, and `size`.
// function initializeLists(capacity) {
//   const arr = [];
//   for (let i = 0; i < capacity; i++) {
//     arr[i] = new LinkedList();
//   }
//   return arr;
// }

// export class HashMap {
//   constructor() {
//     this.loadFactor = 0.75;
//     this.capacity = 16;
//     this.buckets = initializeLists(this.capacity);
//     this.size = 0;
//   }
// // - **hash(key)**: Generates a hash code for a given key.
//   hash(key) {
//     let hashCode = 0;
//     const primeNumber = 31;
//     for (let i = 0; i < key.length; i++) {
//       hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
//     }
//     return hashCode;
//   }
// // - **set(key, value)**: Adds a new key-value pair to the hash map. If the key already exists, it updates the value.
//   set(key, value) {
//     const hashCode = this.hash(key);
//     const list = this.buckets[hashCode];

//     const node = list.findNode(key);
//     if (node) {
//       node.value = value;
//       console.log("Updated value of " + key);
//     } else {
//       list.append(key, value);
//       this.size++;
//     }

//     if (this.length() > this.capacity * this.loadFactor) {
//       this.resize();
//     }
//   }
// // - **get(key)**: Retrieves the value of a key in the hash map.
//   get(key) {
//     const hashCode = this.hash(key);
//     const list = this.buckets[hashCode];
//     const node = list.findNode(key);
//     return node ? node.value : null;
//   }
// // - **has(key)**: Checks if a key exists in the hash map.
//   has(key) {
//     const hashCode = this.hash(key);
//     const list = this.buckets[hashCode];
//     return list.contains(key);
//   }
// // - **remove(key)**: Removes a key-value pair from the hash map.
//   remove(key) {
//     const hashCode = this.hash(key);
//     if (hashCode < 0 || hashCode >= this.capacity) {
//       throw new Error("Trying to access index out of bounds");
//     }
//     const list = this.buckets[hashCode];
//     const index = list.findIndex(key);
//     if (index !== null) {
//       list.removeAt(index);
//       this.size--;
//       return true;
//     }
//     return false;
//   }
// // - **resize()**: Doubles the capacity of the hash map and rehashes all key-value pairs.
//   resize() {
//     const oldBuckets = this.buckets;
//     this.capacity = this.capacity * 2;
//     this.buckets = initializeLists(this.capacity);
//     this.size = 0;
//     oldBuckets.forEach((list) => {
//       let current = list.head;
//       while (current) {
//         this.set(current.key, current.value);
//         current = current.next;
//       }
//     });
//   }
// // - **length()**: Returns the number of key-value pairs in the hash map.
//   length() {
//     return this.size;
//   }
// // - **clear()**: Removes all key-value pairs from the hash map.
//   clear() {
//     this.capacity = 16;
//     this.buckets = initializeLists(this.capacity);
//     this.size = 0;
//   }
// // - **keys()**: Returns an array of all keys in the hash map.
//   keys() {
//     const keys = [];
//     this.buckets.forEach((list) => {
//       let current = list.head;
//       while (current) {
//         keys.push(current.key);
//         current = current.next;
//       }
//     });
//     return keys;
//   }
// // - **values()**: Returns an array of all values in the hash map.
//   values() {
//     const values = [];
//     this.buckets.forEach((list) => {
//       let current = list.head;
//       while (current) {
//         values.push(current.value);
//         current = current.next;
//       }
//     });
//     return values;
//   }

// // - **entries()**: Returns a 2D array of all key-value pairs in the hash map.
//   entries() {
//     const entries = [];
//     this.buckets.forEach((list) => {
//       let current = list.head;
//       while (current) {
//         entries.push([current.key, current.value]);
//         current = current.next;
//       }
//     });
//     return entries;
//   }
// // - **toString()**: Prints all key-value pairs in the hash map.
//   toString() {
//     this.buckets.forEach((list, index) => {
//       console.log(`${index}. ${list.toString()}`);
//     });
//   }
// }
/***************************************************************************************** */
/***************************************************************************************** */
/***************************************************************************************** */
/***************************************************************************************** */
/***************************************************************************************** */

// class with a hash map implementation using arrays for collisions
// - **Constructor**: Initializes an empty hash map with `loadFactor`, `capacity`, `buckets`, and `size`.

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }

// - hash(key): Generates a hash code for a given key.
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }
// - set(key, value): Adds a new key-value pair to the hash map. If the key already exists, it updates the value.
  set(key, value) {
    const hashCode = this.hash(key);
    const bucket = this.buckets[hashCode];

    const index = bucket.findIndex(([k]) => k === key);
    if (index !== -1) {
      bucket[index][1] = value; // Update existing key
    } else {
      bucket.push([key, value]); // Insert new key-value pair
      this.size++;
    }
    if (this.size > this.capacity * this.loadFactor) {
      this.resize();
    }
  }
// - get(key): Retrieves the value of a key in the hash map.
  get(key) {
    const hashCode = this.hash(key);
    const bucket = this.buckets[hashCode];
    const pair = bucket.find(([k]) => k === key);
    return pair ? pair[1] : null;
  }
// - has(key): Checks if a key exists in the hash map.
  has(key) {
    return this.get(key) !== null;
  }
// - remove(key): Removes a key-value pair from the hash map.
  remove(key) {
    const hashCode = this.hash(key);
    const bucket = this.buckets[hashCode];
    const index = bucket.findIndex(([k]) => k === key);
    if (index !== -1) {
      bucket.splice(index, 1);
      this.size--;
      return true;
    }
    return false;
  }
// - resize(): Doubles the capacity of the hash map and rehashes all key-value pairs.
  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
// - length(): Returns the number of key-value pairs in the hash map.
  length() {
    return this.size;
  }
// -keys(): Returns an array of all keys in the hash map.
  keys() {
    return this.buckets.flat().map(([key]) => key).sort((a, b) => this.hash(a) - this.hash(b));
  }
// -values(): Returns an array of all values in the hash map.
  values() {
    return this.buckets.flat().map(([, value]) => value).sort((a, b) => this.hash(a) - this.hash(b));
  }
// -entries(): Returns a 2D array of all key-value pairs in the hash map.
  entries() {
    return this.buckets.flat().sort((a, b) => this.hash(a[0]) - this.hash(b[0]));
  }
// -clear(): Removes all key-value pairs from the hash map.
  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }
// -toString(): Prints all key-value pairs in the hash map.
  toString() {
    return this.buckets
      .map((bucket, index) => `${index}: ${bucket.map(([k, v]) => `(${k}: ${v})`).join(" -> ")}`)
      .join("\n");
  }

}
