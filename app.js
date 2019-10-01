 
	
	//BUDGET CONTROLLER


 var budgetController = (function() {

 	//Some Code

 })();



 	//UI CONTROLLER

 var UIController = (function() {
	
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};


 	return {
 		getInput: function() {
 			return {
	 			type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
	 			description: document.querySelector(DOMstrings.inputDescription).value,
	 			value: document.querySelector(DOMstrings.inputValue).value
 			};
 		},

 		getDOMstrings: function() {
 			return DOMstrings;
 		}


 	};

 })();



 	//GLOBAL APP CONTROLLERw

 var controller = (function(budgetCtrl, UICtrl) {

 	var DOM = UICtrl.getDOMstrings();

 	var ctrlAddItem = function() {

 			//1. Get the field input data
 				var input = UICtrl.getInput();
 				console.log(input);


 			//2. Add the item to the budget Controller

 			//3. Add the item to the Ui

 			//4. Calculate the budget 

 			//5. Display the budget on the UI

 			console.log('it works');
 			
 	} 

 	document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

 	document.addEventListener('keypress', function(event) {

 		if (event.keyCode === 13 || event.which === 13) {
 			
 			ctrlAddItem();
 		}

 	})


 })(budgetController, UIController);

