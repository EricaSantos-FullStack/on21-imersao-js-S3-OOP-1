class InvoiceItem {
    constructor(id, description, quantity, price){
        this.id = id;   
        this.description = description;
        this.quantity = quantity;   
        this.price = price;
    }

    getId(){
        return this.id;
    }
}

const newProduct = new InvoiceItem(123, "Produto x", 20, 40);
console.log(newProduct);