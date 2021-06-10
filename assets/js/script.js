var coinApiPrefix = "https://api.coinpaprika.com/v1/"
var exchangeApiKey = "https://v6.exchangerate-api.com/v6/&f0106a145afb8388dcf1f3d0"


//search token 1
$("#button-1").click(function(){
    //search term value
    var searchTerm = $("#search-1").val()
    //get data value
    fetch(coinApiPrefix + "search?q=" + searchTerm).then(function(response){
        response.json().then(function(data){
            //set name 1
          $("#coin-name-1").text(data.currencies[0].name)
           $("#ticker-1").text("Ticker Symbol: " + data.currencies[0].symbol)
            //get coin price
            fetch(coinApiPrefix + "tickers/" + data.currencies[0].id).then(function(response){
                response.json().then(function(data){
                    //coin data
                    var convert = data.quotes.USD.price
                    //curency symbol table
                    var currencySymbol = ""
                    switch($("#currency-1").val()){
                        case "USD":
                            currencySymbol = "$"
                            break;
                        case "EUR":
                            currencySymbol = "&#128;"
                            break;
                        case "JPY":
                            currencySymbol = "&#165;"
                            break;
                        case "GBP":
                            currencySymbol = "&#163;"
                            break;
                        case "AUD":
                            currencySymbol = "A$"
                            break;
                        case "CAD":
                            currencySymbol = "C$"
                            break;
                        case "CHF":
                            currencySymbol = "&#8355;"
                            break;
                        case "CNY":
                            currencySymbol = "&#165;"
                            break;
                        case "SEK":
                            currencySymbol = "kr"
                            break;
                        case "NZD":
                            currencySymbol = "$"
                            break;
                    }
                    //exchange api call
                    fetch('https://v6.exchangerate-api.com/v6/2b123b2e2008af090ae16479/pair/USD/' + $("#currency-1").val())
                        .then(response => response.json())
                        .then(function(data){
                            //set conversion info
                            $("#rate-1").html(currencySymbol + (data.conversion_rate * convert).toFixed(2))
                        });
                    //price data display
                   $("#price-1").text("Current Price: $" + convert.toFixed(2))
                    //up or down arrow
                    $("#arrow-1").removeClass()
                    if(data.quotes.USD.percent_change_24h > 0){
                        $("#arrow-1").addClass("oi oi-arrow-circle-top")
                    }
                    else if(data.quotes.USD.percent_change_24h < 0){
                        $("#arrow-1").addClass("oi oi-arrow-circle-bottom")
                    }
                    $(".save-button").click(function() {

                        var button1Info = {
                            name: $("#coin-name-1").text(),
                            ticker: $("#ticker-1").text(),
                            price: $("#price-1").text(),
  
                        };
                        
                        localStorage.setItem("button1savedinfo", JSON.stringify(button1Info));
                    
                        
                        
                    })
                })
            })
            
        })
    })
    /* add modal? if nothing is submitted,,, if(searchTerm === "") {
        alert("nothing was submitted please type in your crypto by name.");
} */
})


//search token 2
$("#button-2").click(function(){
    //search term value
    var searchTerm = $("#search-2").val()
    //get data from api
    fetch(coinApiPrefix + "search?q=" + searchTerm).then(function(response){
        response.json().then(function(data){
            //set name 2
            $("#coin-name-2").text(data.currencies[0].name)
            $("#ticker-2").text("Ticker Symbol: " + data.currencies[0].symbol)
            $("#price-2")
            //get price info
            fetch(coinApiPrefix + "tickers/" + data.currencies[0].id).then(function(response){
                response.json().then(function(data){
                    //coin data
                    var convert = data.quotes.USD.price
                    //curency symbol table
                    var currencySymbol = ""
                    switch($("#currency-2").val()){
                        case "USD":
                            currencySymbol = "$"
                            break;
                        case "EUR":
                            currencySymbol = "&#128;"
                            break;
                        case "JPY":
                            currencySymbol = "&#165;"
                            break;
                        case "GBP":
                            currencySymbol = "&#163;"
                            break;
                        case "AUD":
                            currencySymbol = "A$"
                            break;
                        case "CAD":
                            currencySymbol = "C$"
                            break;
                        case "CHF":
                            currencySymbol = "&#8355;"
                            break;
                        case "CNY":
                            currencySymbol = "&#165;"
                            break;
                        case "SEK":
                            currencySymbol = "kr"
                            break;
                        case "NZD":
                            currencySymbol = "$"
                            break;
                    }
                    //exchange api call
                    fetch('https://v6.exchangerate-api.com/v6/2b123b2e2008af090ae16479/pair/USD/' + $("#currency-2").val())
                        .then(response => response.json())
                        .then(function(data){
                            //set conversion info
                            $("#rate-2").html(currencySymbol + (data.conversion_rate * convert).toFixed(2))
                        });
                    //display price info
                    $("#price-2").text("Current Price: $" + (data.quotes.USD.price).toFixed(2))
                    //up or down arrow
                    $("#arrow-2").removeClass()
                    if(data.quotes.USD.percent_change_24h > 0){
                        $("#arrow-2").addClass("oi oi-arrow-circle-top")
                    }
                    else if(data.quotes.USD.percent_change_24h < 0){
                        $("#arrow-2").addClass("oi oi-arrow-circle-bottom")
                    }
                    $(".save-button").click("click", function(){
                        var button2Info = {
                            name: $("#coin-name-2").text(),
                            ticker: $("#ticker-2").text(),
                            price: $("#price-2").text()
                            
                        };

                        localStorage.setItem("button2savedinfo", JSON.stringify(button2Info));
                        
                        
                    })
                   
                    
                })
            })
        })
        
    })

    
})
//update when an option is chosen
$("#currency-1").change(function(){
    //search term value
    var searchTerm = $("#search-1").val()
    //get data value
    fetch(coinApiPrefix + "search?q=" + searchTerm).then(function(response){
        response.json().then(function(data){
            //get coin price
            fetch(coinApiPrefix + "tickers/" + data.currencies[0].id).then(function(response){
                response.json().then(function(data){
                    //coin data
                    var convert = data.quotes.USD.price
                    //curency symbol table
                    var currencySymbol = ""
                    switch($("#currency-1").val()){
                        case "USD":
                            currencySymbol = "$"
                            break;
                        case "EUR":
                            currencySymbol = "&#128;"
                            break;
                        case "JPY":
                            currencySymbol = "&#165;"
                            break;
                        case "GBP":
                            currencySymbol = "&#163;"
                            break;
                        case "AUD":
                            currencySymbol = "A$"
                            break;
                        case "CAD":
                            currencySymbol = "C$"
                            break;
                        case "CHF":
                            currencySymbol = "&#8355;"
                            break;
                        case "CNY":
                            currencySymbol = "&#165;"
                            break;
                        case "SEK":
                            currencySymbol = "kr"
                            break;
                        case "NZD":
                            currencySymbol = "$"
                            break;
                    }
                    //exchange api call
                    fetch('https://v6.exchangerate-api.com/v6/2b123b2e2008af090ae16479/pair/USD/' + $("#currency-1").val())
                        .then(response => response.json())
                        .then(function(data){
                            //set conversion info
                            $("#rate-1").html(currencySymbol + (data.conversion_rate * convert).toFixed(2))
                    });
                })
            })
        })
    })
})

$("#currency-2").change(function(){
    //search term value
    var searchTerm = $("#search-2").val()
    //get data value
    fetch(coinApiPrefix + "search?q=" + searchTerm).then(function(response){
        response.json().then(function(data){
            //get coin price
            fetch(coinApiPrefix + "tickers/" + data.currencies[0].id).then(function(response){
                response.json().then(function(data){
                    //coin data
                    var convert = data.quotes.USD.price
                    //curency symbol table
                    var currencySymbol = ""
                    switch($("#currency-2").val()){
                        case "USD":
                            currencySymbol = "$"
                            break;
                        case "EUR":
                            currencySymbol = "&#128;"
                            break;
                        case "JPY":
                            currencySymbol = "&#165;"
                            break;
                        case "GBP":
                            currencySymbol = "&#163;"
                            break;
                        case "AUD":
                            currencySymbol = "A$"
                            break;
                        case "CAD":
                            currencySymbol = "C$"
                            break;
                        case "CHF":
                            currencySymbol = "&#8355;"
                            break;
                        case "CNY":
                            currencySymbol = "&#165;"
                            break;
                        case "SEK":
                            currencySymbol = "kr"
                            break;
                        case "NZD":
                            currencySymbol = "$"
                            break;
                    }
                    //exchange api call
                    fetch('https://v6.exchangerate-api.com/v6/2b123b2e2008af090ae16479/pair/USD/' + $("#currency-2").val())
                        .then(response => response.json())
                        .then(function(data){
                            //set conversion info
                            $("#rate-2").html(currencySymbol + (data.conversion_rate * convert).toFixed(2))
                    });
                })
            })
        })
    })
})



