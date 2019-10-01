 
	
	//BUDGET CONTROLLER


 var budgetController = (function() {

 	//Some Code

 })();



 	//UI CONTROLLER

 var UIController = (function() {
	
 	//Some Code

 })();



 	//GLOBAL APP CONTROLLERw

 var controller = (function(budgetCtrl, UICtrl) {

 	var ctrlAddItem = function() {
 		//1. Get the field input data

 			//2. Add the item to the budget Controller

 			//3. Add the item to the Ui

 			//4. Calculate the budget 

 			//5. Display the budget on the UI

 			console.log('it works');
 			
 	} 

 	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

 	document.addEventListener('keypress', function(event) {

 		if (event.keyCode === 13 || event.which === 13) {
 			
 			ctrlAddItem();
 		}

 	})


 })(budgetController, UIController);

