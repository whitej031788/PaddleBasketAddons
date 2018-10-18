function Basket() {
    this.result = 0;
    this.contents = [];
  }

$(document).ready(function() {
    basket = new Basket();

    $('#subscripton1').click(function() {
        basket.result = basket.result + 35;
        basket.contents.push({name: "Subscription1", id: "123456"});
        showBasketsContent();
    });

    $('#subscripton2').click(function() {
        basket.result = basket.result + 70;
        basket.contents.push({name: "Subscription2", id: "123456"});
        showBasketsContent();
    });

    $('#addition1').click(function() {
        basket.result = basket.result + 2;
        basket.contents.push({name: "Addition1", id: "123456"});
        showBasketsContent();
    });

    $('#addition2').click(function() {
        basket.result = basket.result + 5;
        basket.contents.push({name: "Addition2", id: "123456"});
        showBasketsContent();
    });

    $('#addition3').click(function() {
        basket.result = basket.result + 10;
        basket.contents.push({name: "Addition3", id: "123456"});
        showBasketsContent();
    });

    $('#addition4').click(function() {
        basket.result = basket.result + 15;
        basket.contents.push({name: "Addition4", id: "123456"});
        showBasketsContent();
    });
})

function showBasketAmount() {
    document.getElementById("result").innerHTML = basket.result;
}

 function showBasketProducts() {
    document.getElementById("contents").innerHTML = JSON.stringify(basket.contents);
}

function showSubscriptionProducts() {
    document.getElementById("subscription").innerHTML = data;
}

function showBasketsContent() {
    showBasketAmount();
    showBasketProducts();
}
