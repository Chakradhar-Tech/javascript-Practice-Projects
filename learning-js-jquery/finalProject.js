let cashRegister = {
   itemsForSale:[
    {name:"phone",price:300},
    {name:"Smart TV",price:200},
    {name:"Gaming Console",price:150},

   ],
   shoppingCart: [],

   addItem: function(name){
    let foundItem = this.itemsForSale.find(function(item){
       return item.name === name;
    });

        if(foundItem){
            this.shoppingCart.push(foundItem);
            console.log(`Adding the ${name} into shopping cart.`);
        } else {
            console.log(`sorry, we don't have ${name}.`);
        }
   },

   deleteItem: function(name){
    let findItem = this.shoppingCart.find(function(item){
       return item.name === name;
    });
    if(findItem){
        this.shoppingCart.pop(findItem);
        console.log(`${name} is deleted.`);
    } else {
        console.log(`you do not have ${name} in your cart.`)
    }
   },


   calculateTotalPrice: function(){
    let totalPrice = 0;
    this.shoppingCart.forEach(function(purchasedItem){
        totalPrice +=purchasedItem.price;
    });
    return totalPrice;
   },

   pay:function(paymentAmount){
    let totalPrice =  this.calculateTotalPrice();
    if(totalPrice > 500 ){
        totalPrice -= totalPrice* 10/100;
        console.log(`you get an 10% discount ${totalPrice} .`);
    }

    if(paymentAmount >= totalPrice){
        if(paymentAmount - totalPrice > 0){
            console.log(`Here, is your change ${paymentAmount - totalPrice}.`);
        }
    console.log("Thank you! For your purchase, pls come again.");
    }else {
        console.log("you don't have enough money.");
    }
   },

};



cashRegister.addItem("Phone");
cashRegister.addItem("Smart TV");
console.log(cashRegister.calculateTotalPrice());
cashRegister.pay(700);