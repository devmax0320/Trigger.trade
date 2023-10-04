// Wait for the chart container to appear on the page
var checkExist = setInterval(function() {
	
	  var tickerButton = document.querySelector('#header-toolbar-symbol-search div[class*="text-"]');
	  
  var chartContainer = document.querySelector(".chart-page");
  if (tickerButton) {
	clearInterval(checkExist);
// Create the main content element and set its styles
	var mainContent = document.createElement("div");
	mainContent.id = "main-content-trigger-trade";
	mainContent.style.position = "absolute";
	mainContent.style.top = "50px";
	mainContent.style.left = "50px";
	mainContent.style.width = "350px";
	mainContent.style.height = "140px";
	mainContent.style.backgroundColor = "#000";
	mainContent.style.color = "#fff";
	mainContent.style.fontFamily = "Arial, sans-serif";
	mainContent.style.fontSize = "14px";
	mainContent.style.cursor = "move";
	// Set the HTML content of the main content element using a string
	mainContent.innerHTML = `
	  <div id="my-extension-toolbar" style="position: absolute; top: 0; left: 0; width: 100%; height: 30px; background-color: #000; box-sizing: border-box;">
		<div style="float: left; padding: 5px;">Trigger.Trade - Market Order</div>
		<div id="minimize-icon" style="float: right; padding: 5px; cursor: pointer;">-</div>
		<div id="maximize-icon2" style="float: right; padding: 5px; cursor: pointer; display: none;">+</div>
	  </div>
	  <div id="my-extension-div" style="position: absolute; top: 30px; left: 0; width: 100%; height: 100px; background-color: #000; cursor: move; box-sizing: border-box; padding: 10px;">
		<div style="display: flex;">
		  <button id="long-button" onclick="alert('You clicked the LONG button!');" style="height:93px;flex: 1; background-color: green; color: #fff; border: none; padding: 10px; margin-right: 10px; cursor: pointer;">LONG</button>
		  <div style="flex: 1; margin: 0 10px;font-size: 13px;"><center><b>Trade Amount</b> <br><span id="trade-amount">0</span> USDT<br><b>Leverage</b> <br>  <span id="long-leverage">0</span> | <span id="short-leverage">0</span></center></div>
		  <button id="short-button" onclick="alert('You clicked the SHORT button!');" style="height:93px;flex: 1; background-color: red; color: #fff; border: none; padding: 10px; cursor: pointer;">SHORT</button>
		</div>
	  </div>
	`;


	// Get the stored position value or set a default value
	chrome.storage.local.get({ position: { x: 50, y: 50 } }, function(data) {
	  mainContent.style.top = data.position.y + "px";
	  mainContent.style.left = data.position.x + "px";
	});

	
	// Append the main content element to the chart container
	var chartContainer = document.querySelector(".chart-page");
	chartContainer.appendChild(mainContent);
	
	// Make the main content element draggable
	dragElement(mainContent);
	  }
	}, 100);
	function dragElement(element) {
	  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	  var toolbar = document.getElementById("my-extension-toolbar");
	  toolbar.onmousedown = dragMouseDown;
	  element.onmousedown = function() {
		return false;
	  };
	
	  function dragMouseDown(e) {
		if (e.target === toolbar) {
		  e = e || window.event;
		  e.preventDefault();
		  pos3 = e.clientX;
		  pos4 = e.clientY;
		  document.onmouseup = closeDragElement;
		  document.onmousemove = elementDrag;
		}
	  }
	
	  function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		element.style.top = (element.offsetTop - pos2) + "px";
		element.style.left = (element.offsetLeft - pos1) + "px";
		
		// Store the updated position value
		chrome.storage.local.set({
		  position: { x: element.offsetLeft, y: element.offsetTop }
		});
	  }
	
	  function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	  }
	  

	// Get the minimize and maximize icons
	var minimizeIcon = document.getElementById("minimize-icon");
	var maximizeIcon = document.getElementById("maximize-icon2");
	var mainContent = document.getElementById("main-content-trigger-trade");
	// Get the my-extension-div element
	var extensionDiv = document.getElementById("my-extension-div");

	// Add click listener to minimize icon
	minimizeIcon.addEventListener("click", function() {
	// Hide the extension div and the minimize icon
	extensionDiv.style.display = "none";
	minimizeIcon.style.display = "none";
	mainContent.style.height = "40px";
	// Show the maximize icon
	maximizeIcon.style.display = "block";
	});

	// Add click listener to maximize icon
	maximizeIcon.addEventListener("click", function() {
	// Show the extension div and the minimize icon
	mainContent.style.height = "140px";
	extensionDiv.style.display = "block";
	minimizeIcon.style.display = "block";
	
	// Hide the maximize icon
	maximizeIcon.style.display = "none";
	});



	  // Get the long and short button elements
	  var longButton = document.getElementById("long-button");
	  var shortButton = document.getElementById("short-button");
	  
	  var tickerButton = document.querySelector('#header-toolbar-symbol-search div[class*="text-"]');
	  var tickerText = tickerButton.textContent.trim(); 
	  // Add event listener for long button click
	  longButton.addEventListener("click", function() {
		alert("You clicked the LONG button! on " + tickerText);
	  });
	  
	  // Add event listener for short button click
	  shortButton.addEventListener("click", function() {
		alert("You clicked the SHORT button! on " + tickerText);
	  });
	  
	  // Get a reference to the element that displays the trade amount
	  var tradeAmount = document.getElementById("trade-amount");
	  var longLeverage = document.getElementById("long-leverage");
	  var shortLeverage = document.getElementById("short-leverage");

	  // Function to update the trade amount text
	  function updateTradeAmount() {
		chrome.storage.local.get("qty", function(result) {
			
		  var value = result.qty;
		  tradeAmount.innerHTML = "" + value + "";
		 
		  
		});
	chrome.storage.local.get("buy_leverage", function(result) {
		
	 var value2 = result.buy_leverage;
	   longLeverage.innerHTML = "" + value2 + "";
	 
	  
	});chrome.storage.local.get("sell_leverage", function(result) {
		
	var value3 = result.sell_leverage;
	  shortLeverage.innerHTML = "" + value3 + "";
	 
	  
	}
	
	
	 
	);
		
		//buy_leverage 
	  }
	  
	  // Call the function to set the initial text
	  updateTradeAmount();
	  
	  // Listen for changes to the stored value and update the trade amount text accordingly
	  chrome.storage.onChanged.addListener(function(changes, namespace) {
		if (changes.qty || changes.buy_leverage || changes.sell_leverage) {
		  updateTradeAmount();
		}
	  });


	}



