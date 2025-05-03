//PROBLEM 1//
		function generate() {
	    var input;
	    var output = document.getElementById("output");

	    while (true) {
	        input = prompt("Enter a number");
	        if (isNaN(input) || input === null ) {
	            alert("Please enter a number.");
	        } else {
	            break;
	        }
	    }

	    var number = parseInt(input);
	    output.innerHTML = "Number inputted " + number + "<br><br>";

	    if (number % 2 === 1) {
	        for (var i = number; i >= 1; i--) {
	            let line = "";
	            for (var j = 0; j < number; j++) {
	                line += i + " ";
	            }
	            output.innerHTML += line + "<br>";
	        }
	    } else {
	        for (let i = number; i >= 1; i--) {
	            let line = "";
	            for (let j = 0; j < i; j++) {
	                line += i + " ";
	            }
	            output.innerHTML += line + "<br>";
	        }
	    }
	}

	// PROBLEM 2 //
		let contacts = [];
		const MAX = 7;
		const list = document.getElementById("listahan");
		const contact = document.getElementById("contact");

		function updateDisplay() {
		  list.textContent = contacts.join(", ");
		}

		function add() {
		  const name = contact.value.trim();
		  if (name) {
			if (contacts.length === MAX) {
			  contacts.shift();
			}
			contacts.push(name);
			updateDisplay();
			contact.value = ''; 
		  }
		}

		function remove() {
		  if (contacts.length > 0) {
			contacts.pop();
			updateDisplay();
		  }
		}