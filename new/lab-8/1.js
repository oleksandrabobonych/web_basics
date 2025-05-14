class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => []);
  }

  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }


  add(name, phoneNumber) {
    const index = this._hash(name);
    const chain = this.table[index];

    for (let i = 0; i < chain.length; i++) {
      if (chain[i][0] === name) {
        chain[i][1] = phoneNumber;
        console.log(`[Оновлено] ${name}: ${phoneNumber}`);
        return;
      }
    }

    chain.push([name, phoneNumber]);
    console.log(`[Додано] ${name}: ${phoneNumber}`);
  }

 
  search(name) {
    const index = this._hash(name);
    const chain = this.table[index];

    for (let [k, v] of chain) {
      if (k === name) {
        console.log(`[Знайдено] ${name}: ${v}`);
        return v;
      }
    }

    console.log(`[Не знайдено] ${name}`);
    return null;
  }


  remove(name) {
    const index = this._hash(name);
    const chain = this.table[index];

    for (let i = 0; i < chain.length; i++) {
      if (chain[i][0] === name) {
        chain.splice(i, 1);
        console.log(`[Видалено] ${name}`);
        return true;
      }
    }

    console.log(`[Не знайдено для видалення] ${name}`);
    return false;
  }


  print() {
    this.table.forEach((chain, i) => {
      if (chain.length > 0) {
        console.log(`Індекс ${i}:`, chain);
      }
    });
  }
}


const phoneBook = new HashTable();

phoneBook.add("Олександр", "+380501112233");
phoneBook.add("Марія", "+380671234567");
phoneBook.search("Марія");
phoneBook.remove("Олександр");
phoneBook.search("Олександр");
phoneBook.print();
