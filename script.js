async function getData() {
  const url = "https://raw.githubusercontent.com/MatiasMyl/TEHT-V-2-WEB/refs/heads/main/answers.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}


getData().then(result => {
  console.log(result);

  //Correct answers
  answerMainColour = result.answer1[1].option //White
  answerPopulation = result.answer2[1].option //5.5 million
  answerCelebrated = result.answer3[0].option //Independence day
  
  //Question 1 set up
  document.getElementById("p1").innerHTML = result.question1[0].option
  document.getElementById("p2").innerHTML = result.question1[1].option
  document.getElementById("label1").innerHTML = result.answer1[0].option
  document.getElementById("label2").innerHTML = result.answer1[1].option
  document.getElementById("label3").innerHTML = result.answer1[2].option
  
  //Question 2 set up
  document.getElementById("p3").innerHTML = result.question2[0].option
  document.getElementById("p4").innerHTML = result.question2[1].option
  document.getElementById("label4").innerHTML = result.answer2[0].option
  document.getElementById("label5").innerHTML = result.answer2[1].option
  document.getElementById("label6").innerHTML = result.answer2[2].option
  
  //Question 3 set up
  document.getElementById("p5").innerHTML = result.question3[0].option
  document.getElementById("p6").innerHTML = result.question3[1].option
  document.getElementById("label7").innerHTML = result.answer3[0].option
  document.getElementById("label8").innerHTML = result.answer3[1].option
  document.getElementById("label9").innerHTML = result.answer3[2].option
});


//Button functionality

function onClick(){

 let wrongAnswers = 0;
 let correctAnswers = 0;

  if(document.getElementById("white").checked){
    correctAnswers ++;
  }else{
    wrongAnswers ++;
  }
  if(document.getElementById("5.5mil").checked){
  correctAnswers ++;
  }else{
    wrongAnswers ++;
  }
  if(document.getElementById("independence").checked){
  correctAnswers ++;
  }else{
    wrongAnswers ++;
  }
  
  document.getElementById("results").innerHTML = "You scored " + correctAnswers + "/3" 
  
}


