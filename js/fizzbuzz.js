// This is an anonymous function to call a named function
document.getElementById("fizzButton").addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
        runTheNumbers(num1, num2);
}) 

 function runTheNumbers(num1, num2){
     let resultRow = "";
     let resultBody = document.getElementById("resultBody");
     let output = [];
     resultBody.innerHTML = "";
    
    for (let loop = 1; loop <= 100; loop++) {
        let specialValue1 = loop % num1;
        let specialValue2 = loop % num2;
        
    if (specialValue1 == 0 && specialValue2 == 0) 
    {
         
        output[loop] = `<span class="fizzBuzz">FizzBuzz! </span>`;
    }
    else if (specialValue1 == 0)
    {
        output[loop] = `<span class= "fizz">Fizz! </span>`;
    }
    else if (specialValue2 == 0)
    {
        output[loop] = `<span class= "buzz">Buzz! </span>`;
    }
    else 
    {
        output[loop] = `${loop}`;
    }
    }
    for(let loop = 1; loop < 100; loop += 5)
    {
    resultRow += `<tr>
    <td>${output[loop]}</td>
    <td>${output[loop+1]}</td>
    <td>${output[loop+2]}</td>
    <td>${output[loop+3]}</td>
    <td>${output[loop+4]}</td></tr>`;
    }

    resultBody.innerHTML += resultRow;  
    
};
//reset button
document.getElementById("btnClear").addEventListener("click", function(){
     document.getElementById("input1").value = "";
     document.getElementById("input2").value = "";
     document.getElementById("resultBody").innerText = "";
});
