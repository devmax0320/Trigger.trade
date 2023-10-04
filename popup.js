// Check if the current URL starts with "https://www.tradingview.com/chart/"
if (window.location.href.startsWith("https://www.tradingview.com/chart/")) {
  // Create a new div element and add it to the body
  var div = document.createElement("div");
  div.id = "myDiv";
  document.body.appendChild(div);
  
  // Make the div draggable
  var isDragging = false;
  var dragX, dragY;
  div.addEventListener("mousedown", function(e) {
	isDragging = true;
	dragX = e.clientX - div.offsetLeft;
	dragY = e.clientY - div.offsetTop;
  });
  document.addEventListener("mousemove", function(e) {
	if (isDragging) {
	  div.style.left = (e.clientX - dragX) + "px";
	  div.style.top = (e.clientY - dragY) + "px";
	}
  });
  document.addEventListener("mouseup", function() {
	isDragging = false;
  });
}

  // Wait for the DOM to be ready
$(function() {
  
  // Get the default tab link
  var defaultTabLink = document.querySelector('.tabs__link[href="#content-1"]');
  
  // Simulate a click on the default tab link
  defaultTabLink.click();
  

  // Load saved values and set them as default values of the form elements
  loadSavedValues();
  
  // Listen for changes in the form elements and save their values
  $("input, select, textarea").on("change", function() {
    saveValue(this);
  });
});

/// Function to load saved values and set them as default values of the form elements
function loadSavedValues() {
  // Loop through all form elements
  $("input, select, textarea").each(function() {
    // Get the name of the form element
    var name = $(this).attr("name");
    if (name) {
      // Load the saved value for this form element
      chrome.storage.local.get(name, function(result) {
        if (result[name]) {
          // Set the saved value as the default value of the form element
          $(this).val(result[name]);
        }
      }.bind(this));
    }
  });
}

// Function to save the value of a form element
function saveValue(element) {
  // Get the name and value of the form element
  var name = $(element).attr("name");
  var value = $(element).val();
  
  // Save the value to chrome.storage.local
  chrome.storage.local.set({ [name]: value }, function() {
    console.log('Value saved for ' + name + ': ' + value);
  });
}


  function hideMultiTp() {
  var popup = document.getElementById("mp");
  popup.style.display = "none";
}

function showMultiTp() {
  var popup = document.getElementById("mp");
  popup.style.display = "block";
} 
  
function hideadvance(){
  jQuery('.advanced').hide();
  
}
function showadvance(){
  jQuery('.advanced').show();
  
}
Array.from(document.querySelector("#form").getElementsByClassName("data")).forEach((element) => {
  element.addEventListener("change", submit);
});

Array.from(document.querySelector("#options").getElementsByClassName("data")).forEach((element) => {
  element.addEventListener("change", updateOptions);
});



function submit() {
  let email_id = document.querySelector("[name=email_id]");
  let result = FORMSJS.readForm("#form");

  version = "1.0.3"
  jsonResult = JSON.stringify(result, null, 2);

  var exitLongObject = JSON.parse(jsonResult);
  exitLongObject['desc'] = "CLOSE A LONG POSITION";
  exitLongObject['position'] = "3";
  exitLongObject['stop_bot_below_balance'] = "0";
  exitLongObject['stop_loss_percent'] = "0";
  exitLongObject['take_profit_percent'] = "0";
  exitLongObject['buy_leverage'] = "0";
  exitLongObject['sell_leverage'] = "0";
  exitLongObject['qty'] = "0";
  exitLongObject['tp_type'] = "1";
  exitLongObject['version'] = version;

  var exitShortObject = JSON.parse(jsonResult);
  exitShortObject['desc'] = "CLOSE A SHORT POSITION";
  exitShortObject['position'] = "4";
  exitShortObject['stop_bot_below_balance'] = "0";
  exitShortObject['stop_loss_percent'] = "0";
  exitShortObject['take_profit_percent'] = "0";
  exitShortObject['buy_leverage'] = "0";
  exitShortObject['sell_leverage'] = "0";
  exitShortObject['qty'] = "0";
  exitShortObject['tp_type'] = "1";
  exitShortObject['version'] = version;

  var entryLongObject = JSON.parse(jsonResult);
  entryLongObject['desc'] = "OPEN A LONG POSITION";
  entryLongObject['position'] = "0";
  entryLongObject['tp_type'] = "1";
  entryLongObject['version'] = version;

  var entryShortObject = JSON.parse(jsonResult);
  entryShortObject['desc'] = "OPEN A SHORT POSITION";
  entryShortObject['position'] = "1";
  entryShortObject['tp_type'] = "1";
  entryShortObject['version'] = version;


  document.querySelector("#api_entry_long").value = JSON.stringify(entryLongObject, null, 2);         
  document.querySelector("#api_entry_short").value = JSON.stringify(entryShortObject, null, 2);

  document.querySelector("#api_exit_long").value = JSON.stringify(exitLongObject, null, 2);         
  document.querySelector("#api_exit_short").value = JSON.stringify(exitShortObject, null, 2);
  
}



function copy_api_entry_long() {
  submit();
  var copyText = document.getElementById("api_entry_long");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("myTooltip1");
  tooltip.innerHTML = "Copied: API Entry Long";
  }

function copy_api_entry_short() {
  submit();
  var copyText = document.getElementById("api_entry_short");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("myTooltip3");
  tooltip.innerHTML = "Copied: API Entry Short";
  }

function copy_api_exit_long() {
  submit();
  var copyText = document.getElementById("api_exit_long");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("myTooltip2");
  tooltip.innerHTML = "Copied: API Exit Long";
  }

function copy_api_exit_short() {
  submit();
  var copyText = document.getElementById("api_exit_short");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("myTooltip4");
  tooltip.innerHTML = "Copied: API Exit Short";
  }

function copy_webhook() {
  submit();
  navigator.clipboard.writeText("https://asia-southeast1-bybit-daviddtech.cloudfunctions.net/trigger_trade_variable_bot");

  var tooltip = document.getElementById("myTooltip5");
  tooltip.innerHTML = "Copied: Webhook URL";
  }   
function copy_webhook_usd() {
  submit();
  navigator.clipboard.writeText("https://asia-southeast1-bybit-daviddtech.cloudfunctions.net/trigger_trade_variable_bot_perp");
  
  var tooltip = document.getElementById("myTooltip5");
  tooltip.innerHTML = "Copied: Webhook URL";
  }   	
  function copy_webhook_binance() {
  submit();
  navigator.clipboard.writeText("https://asia-southeast1-bybit-daviddtech.cloudfunctions.net/trigger_trade_variable_bot-binance");
  
  var tooltip = document.getElementById("myTooltip5");
  tooltip.innerHTML = "Copied: Webhook URL";
  }           

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
  }

submit(); 
// It'll auto fill the result box.
jQuery(window).load(function(){
submit(); 

});


function toggletp1(){
  jQuery('#tp1_div').toggle();
  
}
  
function toggletp2(){

  jQuery('#tp2_div').toggle();
  
}

function toggletp3(){

  jQuery('#tp3_div').toggle();
  
  
}

function api_entry_long() {
  
}

function api_entry_short() {
  
}

function api_exit_long() {
  
}

function api_exit_short() {
  
}




 jQuery('.copy-to-clipboard').on('click', function (e) {
    jQuery('.copy-to-clipboard').removeClass('copied');
    jQuery(e.target).addClass('copied');
 })


 jQuery('input[type=radio][name=version-boilerplate]').on('change', function () {
    switch (jQuery(this).val()) {
       case '4':
          jQuery("#mainform").show();
          jQuery("#mainform2").hide();
          jQuery("#v3").hide();
          break;
       case '3':
          jQuery("#mainform").hide();
          jQuery("#mainform2").show();
          jQuery("#v3").show();
          break;
    }


 });

 jQuery('input[type=radio][name=qty_in_percentage]').on('change', function () {
    switch (jQuery(this).val()) {
       case '1':
          jQuery(".perusd").text("Share of the portfolio in percentage that would be used in this strategy.");
          jQuery("#percentPort_slider").show();
          jQuery("#percentPort_percent_sign").show();
          jQuery("#PercentPortval").attr("placeholder", "Enter Percent of Portfolio here");

          break;
       case '2':
          jQuery(".perusd").text("USDT Amount");
          jQuery("#percentPort_slider").hide();
          jQuery("#percentPort_percent_sign").hide();
          jQuery("#PercentPortval").attr("placeholder", "Enter USDT value here");


          break;
       case '0':
          jQuery(".perusd").text("Absolute Value (e.g. BTC)");
          jQuery("#percentPort_slider").hide();
          jQuery("#percentPort_percent_sign").hide();
          jQuery("#PercentPortval").attr("placeholder", "Enter Absolute value here");


          break;
    }


 });




 jQuery('input[type=radio][name=use_takeprofit]').on('change', function () {
    switch (jQuery(this).val()) {
       case '0':


          jQuery(".takeprofit").hide();
          jQuery(".takeprofit").hide();
          jQuery("#long_take_profit_percent").val("#");
          jQuery("#short_take_profit_percent").val("#");
          break;
       case '1':
          val_short = jQuery("#short_take_profit_percentrange").val();
          val_long = jQuery("#long_take_profit_percent_range").val();
          jQuery(".takeprofit").show();
          jQuery(".takeprofit").show();
          jQuery("#long_take_profit_percent").val(val_long);
          jQuery("#short_take_profit_percent").val(val_short);
          break;
    }


 });
 jQuery('input[type=radio][name=use_stoploss]').on('change', function () {
    switch (jQuery(this).val()) {
       case '0':


          jQuery(".stoploss").hide();
          jQuery(".stoploss").hide();
          jQuery("#long_stop_loss_percent").val("#");
          jQuery("#short_stop_loss_percent").val("#");
          break;
       case '1':
          val_short = jQuery("#short_stop_loss_percent_range").val();
          val_long = jQuery("#long_stop_loss_percent_range").val();
          jQuery(".stoploss").show();
          jQuery(".stoploss").show();
          jQuery("#long_stop_loss_percent").val(val_long);
          jQuery("#short_stop_loss_percent").val(val_short);
          break;
    }


 });


 jQuery('input[type=radio][name=inverse]').on('change', function () {
    switch (jQuery(this).val()) {
       case '0':


          jQuery(".usd-perps").hide();
          jQuery(".usdt-perps").show();
          jQuery(".webhook-usd").hide();
          jQuery(".webhook-usdt").show();

          //jQuery("#long_stop_loss_percent").val("#");
          //jQuery("#short_stop_loss_percent").val("#");
          break;
       case '1':
          //val_short = jQuery("#short_stop_loss_percent_range").val();
          //val_long = jQuery("#long_stop_loss_percent_range").val();
          jQuery(".usd-perps").show();
          jQuery(".usdt-perps").hide();

          jQuery(".webhook-usd").show();
          jQuery(".webhook-usdt").hide();
          //jQuery("#long_stop_loss_percent").val(val_long);
          //jQuery("#short_stop_loss_percent").val(val_short);
          break;
    }


 });
 //long_stop_loss_percent_range long_take_profit_percent_range





 jQuery('select[name=coin_pair_main]').on('change', function () {
    coin_pair_main = jQuery(this).val();

    //jQuery("#myLeverageOutput_short").text(percentport);
    jQuery("#coin_pair").val(coin_pair_main);
 });

 jQuery('select[name=coin_pair_main_usd]').on('change', function () {
    coin_pair_main = jQuery(this).val();

    //jQuery("#myLeverageOutput_short").text(percentport);
    jQuery("#coin_pair").val(coin_pair_main);
 });

 jQuery('input[type=range][name=long_stop_loss_percent_range]').on('change', function () {
    long_stop_loss_percent_range = jQuery(this).val();

    //jQuery("#myLeverageOutput_short").text(percentport);
    jQuery("#long_stop_loss_percent").val(long_stop_loss_percent_range);
 });


 jQuery('input[type=range][name=long_take_profit_percent_range]').on('change', function () {
    long_take_profit_percent_range = jQuery(this).val();

    //jQuery("#myLeverageOutput_short").text(percentport);
    jQuery("#long_take_profit_percent").val(long_take_profit_percent_range);
 });

 jQuery('input[type=range][name=short_stop_loss_percent_range]').on('change', function () {
    short_stop_loss_percent_range = jQuery(this).val();

    //jQuery("#myLeverageOutput_short").text(percentport);
    jQuery("#short_stop_loss_percent").val(short_stop_loss_percent_range);
 });


 jQuery('input[type=range][name=short_take_profit_percent_range]').on('change', function () {
    short_take_profit_percent_range = jQuery(this).val();

    //jQuery("#myLeverageOutput_short").text(percentport);
    jQuery("#short_take_profit_percent").val(short_take_profit_percent_range);
 });



 jQuery('input[type=range][name=leverageLONG]').on('change', function () {
    leverageval_long = jQuery(this).val();
    jQuery("#myLeverageOutput_long").text(leverageval_long);
    jQuery("#buy_leverage").val(leverageval_long);
 });
 jQuery('input[type=range][name=leverageSHORT]').on('change', function () {
    leverageval_short = jQuery(this).val();
    jQuery("#myLeverageOutput_short").text(leverageval_short);
    jQuery("#sell_leverage").val(leverageval_short);
 });
 jQuery('input[type=range][name=percentPort]').on('change', function () {
    percentport = jQuery(this).val();

    //jQuery("#myLeverageOutput_short").text(percentport);
    jQuery("#PercentPortval").val(percentport);
 });