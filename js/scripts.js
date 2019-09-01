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
  if (crust === "Crispy" || crust === "Stuffed" || crust === "Glutten") {
    return crustAmount = 250;
    
  } else {
    alert("Please select the crust");
    
  }
}

Order.prototype.toppingLargePrice = function(topping){
  if (topping === "Cheese" || topping === "Mushroom" || topping === "Pepperoni" || topping === "Bacon") {
    return toppingAmount = 200;
    
  } else {
    alert("Please select the toppings you would like");
    
  }

}

Order.prototype.crustMediumPrice = function(crust) {
  if (crust === "Crispy" || crust === "Stuffed" || crust === "Glutten Free") {
    return crustAmount = 200;
    
  } else {
    alert("Please select the crust");
    
  }
}

Order.prototype.toppingMediumPrice = function(topping){
  if (topping === "Cheddar cheese" || topping === "Mushrooms" || topping === "Pepperoni" || topping === "Bacon") {
    return toppingAmount = 150;
    
  } else {
    alert("Please select the toppings you would like");
    
  }

}


//User Interface logic

$(document).ready(function () {

  $("button#largebtn").click(function (event) {

    event.preventDefault();
    
    
    var inputCrust = $("input:radio[name = crust]:checked").val();
    var inputToppings = $("input:checkbox[name = topping]:checked").val();
    var inputNumber = parseInt($("input#pizzaNumber1").val());
    var newOrder = new Order(inputCrust, inputToppings, inputNumber);

    var pizzaPrice = sizePrice.large;
    var crustPrice = newOrder.crustLargePrice(inputCrust);
    var toppingPrice = newOrder.toppingLargePrice(inputToppings);
    var total = (pizzaPrice + crustPrice + toppingPrice) * inputNumber; 
    //alert(total); 

    

    $("ol#newOrdersList").append("<li> <span class='myOrders'>" + " Large Pizza   " + total + "Ksh" + "</span></li>");

    pricing.push(total);

    $(".myOrders").last().click(function () {
      $("#showOrders").show();
      $("#crustOrdered").text(newOrder.crust);
      $("#toppingsOrdered").text(newOrder.topping);
      $("#numberOrdered").text(newOrder.number);
      $("#totalPrice").text("Kshs  " + total);
    });



  });

  //Medium pizza

  $("button#mediumBtn").click(function (event) {

    event.preventDefault();
    
    
    var inputCrust = $("input:radio[name = crust]:checked").val();
    var inputToppings = $("input:checkbox[name = topping]:checked").val();
    var inputNumber = parseInt($("input#pizzaNumber2").val());
    var newOrder = new Order(inputCrust, inputToppings, inputNumber);

    var pizzaPrice = sizePrice.medium;
    var crustPrice = newOrder.crustMediumPrice(inputCrust);
    var toppingPrice = newOrder.toppingMediumPrice(inputToppings);
    var total = (pizzaPrice + crustPrice + toppingPrice) * inputNumber; 
    //alert(total); 

    

    $("ol#newOrdersList").append("<li> <span class='myOrders2'>" + " Medium Pizza   " + total + "Ksh" + "</span></li>");

    pricing.push(total);

    $(".myOrders2").last().click(function () {
      $("#showOrders").show();
      $("#crustOrdered").text(newOrder.crust);
      $("#toppingsOrdered").text(newOrder.topping);
      $("#numberOrdered").text(newOrder.number);
      $("#totalPrice").text("Kshs  " + total);
    });



  });









});













