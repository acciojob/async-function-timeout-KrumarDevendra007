//your JS code here. If required.

const text = document.getElementById("text");
const delay = document.getElmentById("delay");
const output = document.getElementById("output");

funtion getData() {
	return new Promise((resolve()) => {
		setTimeOut(() => {
			resolve(() => {
				output.innerHTML = `${text}`			
			});
		}, delay);
	});
}

async funtion fetchData(){
	try{
	  const data = await getData();
	}
	catch (error){
		console.log(error);
	}
}
