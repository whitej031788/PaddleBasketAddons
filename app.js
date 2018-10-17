function Basket() {
    this.result = 0;
  }

$(document).ready(function() {
    basket = new Basket();

    $('#subscripton1').click(function() {
        basket.result = basket.result + 35;
        showBasketAmount()
    });

    $('#subscripton2').click(function() {
        basket.result = basket.result + 70;
        showBasketAmount()
    });

    $('#addition1').click(function() {
        basket.result = basket.result + 2;
        showBasketAmount()
    });

    $('#addition2').click(function() {
        basket.result = basket.result + 5;
        showBasketAmount()
    });

    $('#addition3').click(function() {
        basket.result = basket.result + 10;
        showBasketAmount()
    });

    $('#addition4').click(function() {
        basket.result = basket.result + 15;
        showBasketAmount()
    });
})

function showBasketAmount() {
    document.getElementById("demo").innerHTML = basket.result;
 }
