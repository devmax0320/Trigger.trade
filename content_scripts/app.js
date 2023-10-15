// Wait for the chart container to appear on the page
// Create a <link> element to link your CSS file
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"; // Replace with the actual path to your CSS file

var link1 = document.createElement("link");
link1.rel = "stylesheet";
link1.type = "text/css";
link1.href = "app.css"; // Replace with the actual path to your CSS file


// Append the <link> element to the document's <head> section
document.head.appendChild(link);

var checkExist = setInterval(function() {
	var tickerButton = document.querySelector('#header-toolbar-symbol-search div[class*="text-"]');	

	insertNewButton();
	insertNewPanel();
	if (tickerButton) {
		clearInterval(checkExist);
		// Create the main content element and set its styles
		// var mainContent = document.createElement("div");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
		// mainContent.id = "main-content-trigger-trade";
		// mainContent.style.position = "absolute";
		// mainContent.style.top = "50px";
		// mainContent.style.left = "50px";
		// mainContent.style.width = "350px";
		// mainContent.style.height = "140px";
		// mainContent.style.backgroundColor = "#000";
		// mainContent.style.color = "#fff";
		// mainContent.style.fontFamily = "Arial, sans-serif";
		// mainContent.style.fontSize = "14px";
		// mainContent.style.cursor = "move";
		// // Set the HTML content of the main content element using a string
		// mainContent.innerHTML = `
		// 	<div id="my-extension-toolbar" style="position: absolute; top: 0; left: 0; width: 100%; height: 30px; background-color: #000; box-sizing: border-box;">
		// 		<div style="float: left; padding: 5px;">Trigger.Trade - Market Order</div>
		// 		<div id="minimize-icon" style="float: right; padding: 5px; cursor: pointer;">-</div>
		// 		<div id="maximize-icon2" style="float: right; padding: 5px; cursor: pointer; display: none;">+</div>
		// 	</div>
		// 	<div id="my-extension-div" style="position: absolute; top: 30px; left: 0; width: 100%; height: 100px; background-color: #000; cursor: move; box-sizing: border-box; padding: 10px;">
		// 		<div style="display: flex;">
		// 		<button id="long-button" onclick="alert('You clicked the LONG button!');" style="height:93px;flex: 1; background-color: green; color: #fff; border: none; padding: 10px; margin-right: 10px; cursor: pointer;">LONG</button>
		// 		<div style="flex: 1; margin: 0 10px;font-size: 13px;"><center><b>Trade Amount</b> <br><span id="trade-amount">0</span> USDT<br><b>Leverage</b> <br>  <span id="long-leverage">0</span> | <span id="short-leverage">0</span></center></div>
		// 		<button id="short-button" onclick="alert('You clicked the SHORT button!');" style="height:93px;flex: 1; background-color: red; color: #fff; border: none; padding: 10px; cursor: pointer;">SHORT</button>
		// 		</div>
		// 	</div>
		// 	`;


		// // Get the stored position value or set a default value
		// chrome.storage.local.get({ position: { x: 50, y: 50 } }, function(data) {
		// 	mainContent.style.top = data.position.y + "px";
		// 	mainContent.style.left = data.position.x + "px";
		// });

		
		// Append the main content element to the chart container
		//var chartContainer = document.querySelector(".chart-page");
		//chartContainer.appendChild(mainContent);
		// Make the main content element draggable
		//dragElement(mainContent);
		//insertNewButton();
	}
}, 100);

function insertNewButton() {
	//var righttoolbar = document.querySelector(".toolbar-S4V6IoxY");
	var righttoolbar = document.querySelector("body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--right > div > div.widgetbar-tabs > div > div > div > div")

	var showPanelButton = document.createElement("button");
	showPanelButton.id = 'showPanel';
	showPanelButton.type = "button";
	showPanelButton.ariaLabel = "Alerts";
	showPanelButton.ariaPressed = "false";
	
	showPanelButton.style.height = "44px";
	showPanelButton.style.justifyContent = "center";
	showPanelButton.style.position = "relative";
	showPanelButton.style.width = "44px";
	showPanelButton.style.zIndex = "0";
	showPanelButton.style.alignItems = "center";
	//showPanelButton.style.color = "white";
	showPanelButton.className = "button-I_wb5FjE isActive-I_wb5FjE apply-common-tooltip common-tooltip-vertical accessible-I_wb5FjE"

	showPanelButton.innerHTML = `
		<div class="hoverMask-I_wb5FjE"></div>
		<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44"><path fill="currentColor" d="M13 11h18a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V13c0-1.1.9-2 2-2Zm18-1H13a3 3 0 0 0-3 3v17a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V13a3 3 0 0 0-3-3Zm-2 11H15v1h14v-1Zm-14-5h14v1H15v-1Zm14 10H15v1h14v-1Z"></path></svg></span>
	`;
	righttoolbar.insertBefore(showPanelButton, righttoolbar.firstChild);
	showPanelButton.addEventListener("click", function() {
		var floatingpanel = document.querySelector("body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--right > div > div.widgetbar-pages > div.widgetbar-pagescontent");	
		if (floatingpanel.firstChild.className.includes("active"))
			{ floatingpanel.firstChild.classList.remove("active"); console.log("123"); }
		else
			{ floatingpanel.firstChild.classList.add("active"); console.log("456"); }
	});
	//righttoolbar.appendChild(showPanelButton);
}

function insertNewPanel() {
	var floatingpanel = document.querySelector("body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--right > div > div.widgetbar-pages > div.widgetbar-pagescontent");
	var mainContent = document.createElement("div");
	mainContent.classList.add("widgetbar-page");
	mainContent.innerHTML = `
		<div style="padding: 15px;
					margin: 5px;
					text-transform: uppercase;
		">
			<h3>Choose Account	</h3>
		</div>
		<div>
			<div style="padding: 15px; margin: 5px">
				<span style="text-align: center; padding-right:15px; ">Market</span>
				<input type="text" style="width: 80%; border-radius: 5px; color: white; background-color: #2a3e4f;" placeholder="Limit">
			</div>
			<div style="height: 411px; padding: 5px; margin: 5px;">	
			
				<div class="row" style="padding: 5px; margin:5px;">
					<button class="btn bg-info col-sm-6" style="color:white;">Buy</button>
					<button class="btn col-sm-6" style="color: white; background-color: #222222;">Sell</button>
				</div>
				<div style="padding: 5px; margin:5px;">
					<span >Available</span>
					<span style="text-align: right;	float: right; ">0.0000USDT</span>
				</div>
				<div style="padding: 5px; margin:5px; width: 100%">
					<button class="btn" style="color: white; background-color: #2a3e4f; width: 100%; ">Best Market Price</button>
				</div>
				<div class="input-group mb-3 input-group-sm" style="padding: 5px; margin:5px; width: 100%; color: white;" placeholder="0">
					<input type="text" class="form-control" style="color: white;
															background: transparent;
															border-color: darkblue;"
															
					>
					<span class="input-group-text" style="color: white;
															background: transparent;
															border-color: darkblue;"
					>
						BTC
					</span>
				</div>

				<div style="padding: 5px; margin:5px;">
					<div class="step active" id="step1">
						<h2>Step 1</h2>
						<input type="text" placeholder="Enter something">
						<button onclick="nextStep()">Next</button>
					</div>
				</div>
				<div style="padding: 5px; margin:5px;">
					<div>
						<span >Taker Fees (0.002%)</span>
						<span style="text-align: right;	float: right; ">0.0000 BTC</span>
					</div>
					
					<div>
						<span>Total (excel. fees) </span>
						<span style="text-align: right;	float: right; ">0.0000 BTC</span>
					</div>
					
					<div>
						<span>Cost</span>
						<span style="text-align: right;	float: right; ">0.0000 BSDT</span>
					</div>
				</div>
				<div style="padding: 5px; margin:5px;">
					<button class="btn bg-info" style="color: white; width: 100%">Buy</button>
				</div>

			</div>
		</div>
	`;
	floatingpanel.insertBefore(mainContent, floatingpanel.firstChild);
}

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
		
		});
		
		chrome.storage.local.get("sell_leverage", function(result) {
			var value3 = result.sell_leverage;
			shortLeverage.innerHTML = "" + value3 + "";
		});		
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

var currentStep = 0;
var steps = document.querySelectorAll('.step');

function showStep(stepIndex) {
	steps.forEach(function(step, index) {
		if (index === stepIndex) {
			step.classList.add('active');
		} else {
			step.classList.remove('active');
		}
	});
}

function nextStep() {
	if (currentStep < steps.length - 1) {
		currentStep++;
		showStep(currentStep);
	}
}

function prevStep() {
	if (currentStep > 0) {
		currentStep--;
		showStep(currentStep);
	}
}

function submitForm() {
	// Implement your form submission logic here
	alert('Form submitted!');
}

showStep(currentStep);

