function submit(){
	var input = document.getElementById('input').value;
	var encrypted = String(CryptoJS.AES.encrypt(input, "bullish"));
	var myArray = [] ;
	myArray = encrypted.split(""); 

	function chunkArray(myArray,chunk_size){

	var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  
  for (index = 0; index < arrayLength; index += chunk_size) {
      myChunk = myArray.slice(index, index+chunk_size);
      tempArray.push(myChunk);
  }
  return tempArray; 
	}
	result = chunkArray(myArray,6); 
	console.log(result);

	var i = 0
	for (i = 0, demo = ""; i < result.length; i++ )
	{
	demo += result[i] + "- Node " + (i+1) + "<br>"; 
	}

	var decrypted = CryptoJS.AES.decrypt(encrypted, "bullish");

document.getElementById('output').innerHTML = demo;	
document.getElementById("demo1").innerHTML = encrypted;
document.getElementById("demo2").innerHTML = decrypted;
document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}