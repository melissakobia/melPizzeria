function Order (crust, topping, number) {
  this.crust = crust;
  this.topping = topping;
  this.number = number;

}

var sizePrice = {
  large: 1000,
  medium: 700,
  small : 500
};

var pricing = [];

function grandTotal() {
  var total = 0;
  var i = 0;

  for (i = 0; i < pricing.length; i++) {
      total += pricing[i];
  }
  return total;
}

Order.prototype.crustLarge = function(crust) {
  if (crust === "crispyLarge" || crust === "stuffedLarge" || crust === "gluttenLarge") {
    return crustAmount = 250;
    
  } else {
    alert("Please select the crust");
    
  }
}

Order.prototype.toppingLarge = function(topping){
  if (topping === "cheeseLarge" || topping === "mushroomLarge" || topping === "baconLarge") {
    return toppingAmount = 200;
    
  } else {
    alert("Please select the toppings you would like");
    
  }

}


//User Interface logic













