class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getDetails() {
    return `Product: ${this.name}, Category: ${this.category}, Price: $${this.price}`;
  }
}

class ElectronicProduct extends Product {
  constructor(name, price, category, warranty) {
    super(name, price, category);
    this.warranty = warranty;
  }

  getDetails() {
    return `Product: ${this.name}, Category: ${this.category}, Price: $${this.price}, Warranty: ${this.warranty}`;
  }
}

class GroceryProduct extends Product {
  constructor(name, price, category, expiryDate) {
    super(name, price, category);
    this.expiryDate = expiryDate;
  }

  getDetails() {
    return `Product: ${this.name}, Category: ${this.category}, Price: $${this.price}, Expiry Date: ${this.expiryDate}`;
  }
}

// Testing / Instances
const genericProduct = new Product("Notebook", 5.99, "Stationery");
const laptop = new ElectronicProduct("Laptop", 999.99, "Electronics", "2 Years");
const milk = new GroceryProduct("Milk", 3.49, "Dairy", "2026-08-10");

console.log(genericProduct.getDetails());
console.log(laptop.getDetails());
console.log(milk.getDetails());
