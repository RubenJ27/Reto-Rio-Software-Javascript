const d = document,
st = sessionStorage;

 function secondQuestion(params) {
  let optionOne = d.getElementById("option__one");
  let optionTwo = d.getElementById("option__two");
  let optionThree = d.getElementById("option__three");
  let optionFour = d.getElementById("option__four");
  let optionSelectorOne = ".option__one";
  let optionSelectorTwo = ".option__two";

  let optionOneReply = false;
  let optionTwoReply = false;
  let optionThreeReply = true;
  let optionFourReply = false;

  let optionReplyCorrectTotal;
  let optionReplyIncorrectTotal;
  d.addEventListener("click", e => {
    if (e.target === optionOne && optionOneReply === false || e.target.matches(`${optionSelectorOne} *`)) {
      optionReplyIncorrectTotal = st.getItem("optionReplyIncorrectTotal");
      st.getItem("optionReplyCorrectTotal");
      optionReplyIncorrectTotal++;
      st.setItem("optionReplyIncorrectTotal", optionReplyIncorrectTotal );
      location.href='resultado-respuestas.html';
    }
    if (e.target === optionTwo && optionTwoReply === false || e.target.matches(`${optionSelectorTwo} *`)) {
      optionReplyIncorrectTotal = st.getItem("optionReplyIncorrectTotal");
      st.getItem("optionReplyCorrectTotal");
      optionReplyIncorrectTotal++;
      st.setItem("optionReplyIncorrectTotal", optionReplyIncorrectTotal);
      location.href='resultado-respuestas.html';
      console.log(optionReplyIncorrectTotal);
     }
     if (e.target === optionThree && optionThreeReply === true) {
      optionReplyCorrectTotal = +1;
      optionReplyIncorrectTotal = +0;
      st.setItem("optionReplyCorrectTotal", optionReplyCorrectTotal);
      st.setItem("optionReplyIncorrectTotal", optionReplyIncorrectTotal);
      location.href='resultado-respuestas.html';
     }
     if (e.target === optionFour && optionFourReply === false) {
      optionReplyIncorrectTotal = +1;
      optionReplyCorrectTotal = +0;
      st.setItem("optionReplyCorrectTotal", optionReplyCorrectTotal);
      st.setItem("optionReplyIncorrectTotal", optionReplyIncorrectTotal);
      location.href='resultado-respuestas.html';
     }
  });
  
}
secondQuestion();