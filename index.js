

document.querySelector("#calc").addEventListener("click",function(event){
    event.preventDefault();
    let height=document.querySelector("#height").value;
    let weight=document.querySelector("#weight").value;
     
    if (isNaN(height)|| isNaN(weight)|| height<=0|| weight<=0) {
        alert("Please use valid number for height and weight.");
        return;
        
    }
    let bmi=weight/Math.pow(height,2);
    let bmiF=bmi.toFixed(2);
    handleClick(bmiF);
     
     
    })
    
function handleClick(bmiF){
    
    let resultElement=document.querySelector("#heading");
    if(bmiF<18.5){
        
       resultElement.innerText="The BMI value is low! Eat and exercise daily!";
        resultElement.style.color="red";

    }else if(18.5<=bmiF && bmiF<=24.5){
        resultElement.innerHTML="PERFECT.You are healthy.";
        resultElement.style.color="green";
    }else if(24.5<bmiF && bmiF<=30.5){
        resultElement.innerHTML="First stage of obesity.Start exercise.";
        resultElement.style.color="yellow";

    }else if(30.5<bmiF && bmiF<=35.5){
        resultElement.innerHTML="Second stage of obesity.Start exercise today.";
        resultElement.style.color="red";
    }else{
        resultElement.innerHTML="Final stage of obesity.Start exercise today.You are in danger!";
        resultElement.style.color="red"; 
    }
}


  



