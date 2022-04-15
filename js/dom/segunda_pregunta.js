const d = document,
st = sessionStorage;

 function secondQuestion(params) {
  let optionOne = d.getElementById("option__one");
  let optionTwo = d.getElementById("option__two");
  let optionThree = d.getElementById("option__three");
  let optionFour = d.getElementById("option__four");
  let optionSelectorOne = ".option__one";
  let optionSelectorTwo = ".option__two";
  let optionSelectorThree = ".option__three";
  let optionSelectorFour = ".option__four";
  //todo: contador de preguntas dinamico para que se modifique dependiendo de cuantas preguntas queramos agregar mas facilmente*/
  let counterNumQuestionCurrent;
  let counterNumQuestionsTotal;
  counterNumQuestionCurrent = st.getItem("counterNumQuestionCurrent", counterNumQuestionCurrent);
  counterNumQuestionCurrent = 2;
  //++counterNumQuestionCurrent;
  counterNumQuestionsTotal = st.getItem("counterNumQuestionsTotal", counterNumQuestionsTotal);
  st.setItem("counterNumQuestionCurrent", counterNumQuestionCurrent);
  let counterQuestions = d.querySelector(".container__counter__questions").innerHTML=`${counterNumQuestionCurrent}/${counterNumQuestionsTotal}`;

  let optionOneReply = false;
  let optionTwoReply = false;
  let optionThreeReply = true;
  let optionFourReply = false;

  let optionReplyCorrectTotal;
  let optionReplyIncorrectTotal;
  console.log(counterNumQuestionCurrent);
  d.addEventListener("click", e => {
    if ((e.target === optionOne && optionOneReply === false) || e.target.matches(`${optionSelectorOne} *`)) {
      optionReplyIncorrectTotal = st.getItem("optionReplyIncorrectTotal");
      st.getItem("optionReplyCorrectTotal");
      optionReplyIncorrectTotal++;
      st.setItem("optionReplyIncorrectTotal", optionReplyIncorrectTotal );
      location.href='tercera-pregunta.html';
    }
    if ((e.target === optionTwo && optionTwoReply === false) || e.target.matches(`${optionSelectorTwo} *`)) {
      optionReplyIncorrectTotal = st.getItem("optionReplyIncorrectTotal");
      st.getItem("optionReplyCorrectTotal");
      optionReplyIncorrectTotal++;
      st.setItem("optionReplyIncorrectTotal", optionReplyIncorrectTotal);
      location.href='tercera-pregunta.html';
     }
     if ((e.target === optionThree && optionThreeReply === true) || e.target.matches(`${optionSelectorThree} *`)) {
      optionReplyCorrectTotal = st.getItem("optionReplyCorrectTotal");
      st.getItem("optionReplyCorrectTotal");
      optionReplyCorrectTotal++;
      st.setItem("optionReplyCorrectTotal", optionReplyCorrectTotal);
      location.href='tercera-pregunta.html';
      //console.log(optionReplyIncorrectTotal);
     }
     if ((e.target === optionFour && optionFourReply === false) || e.target.matches(`${optionSelectorFour} *`)) {
      optionReplyIncorrectTotal = st.getItem("optionReplyIncorrectTotal");
      st.getItem("optionReplyCorrectTotal");
      optionReplyIncorrectTotal++;
      st.setItem("optionReplyIncorrectTotal", optionReplyIncorrectTotal);
      location.href='tercera-pregunta.html';
     }
  });
  
}
secondQuestion();