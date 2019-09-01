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

Order.prototype.crustLargePrice = function(crust) {
  if (crust === "crispyLarge" || crust === "stuffedLarge" || crust === "gluttenLarge") {
    return crustAmount = 250;
    
  } else {
    alert("Please select the crust");
    
  }
}

Order.prototype.toppingLargePrice = function(topping){
  if (topping === "cheeseLarge" || topping === "mushroomLarge" || topping === "baconLarge") {
    return toppingAmount = 200;
    
  } else {
    alert("Please select the toppings you would like");
    
  }

}


//User Interface logic

$(document).ready(function () {

  $("button#largebtn").click(function (event) {

    event.preventDefault();
    
    var newOrder = new Order(inputCrust, inputToppings, inputNumber);
    var inputCrust = $("input:radio[name = crust]:checked").val();
    var inputToppings = $("input:checkbox[name = topping]:checked").val();
    var inputNumber = parseInt($("input#pizzaNumber1").val());

    var pizzaPrice = sizePrice.large;
    var crustPrice = newOrder.crustLargePrice(inputCrust);
    var toppingPrice = newOrder.toppingLargePrice(inputToppings);
    var total = (pizzaPrice + crustPrice + toppingPrice) * inputNumber; 
    //alert(total); 

    

    $("ol#newOrdersList").append("<li> <span id='myOrders'>" + " Large Pizza   " + total + "Ksh" + "</span></li>");



  });






});













