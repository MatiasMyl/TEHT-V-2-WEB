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
  //answerMainColour = result.answer1[1].option
  //answerPopulation = result.answer2[1].option
  //answerCelebrated = result.answer3[0].option

  document.getElementById("label11").innerHTML = result.answer3[0].option
});


function onClick(){
  wrongAnswers = [];
  correctAnswers = [];


  
}


