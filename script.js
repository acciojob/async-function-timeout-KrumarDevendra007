//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function(){

const text = document.getElementById("text").value;
const delay = document.getElmentById("delay").value;
const output = document.getElementById("output");

const timeDelay = parseInt(delay, 10);

	output.textContent = "";
	
 const waitForDelay = (ms) => {
	 return new Promise((resolve) => {
		 setTimeout(resolve, ms)
	 });
 };


	if(text & timeDelay){
		await waitForDelay(timeDelay)
		output.textContent = text;
	}
	else{
		output.textContent = "Please enter valid text and delay.";
	}

	
});


