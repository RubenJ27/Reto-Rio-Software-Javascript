const d = document,
w = window,
st = sessionStorage;


function scoreboar(params) {
  let nameUser = st.getItem("$data_user");
  let correctQuestions = st.getItem("optionReplyCorrectTotal");
  let incorrectQuestions = st.getItem("optionReplyIncorrectTotal");
  correctQuestions = parseInt(correctQuestions);
  incorrectQuestions = parseInt(incorrectQuestions);
  if (correctQuestions === 1) {
    let questionsCorrect = d.querySelector(".answers__correct").innerHTML=`${correctQuestions} respuesta correcta`;
  }
  if (correctQuestions > 1) {
    let questionsCorrect = d.querySelector(".answers__correct").innerHTML=`${correctQuestions} respuestas correctas`;
  }
  if (correctQuestions === 0) {
    let questionsCorrect = d.querySelector(".answers__correct").innerHTML=`${correctQuestions} respuestas correctas`;
  }
  if (incorrectQuestions === 1) {
    let questionsIncorrect = d.querySelector(".answers__incorrect").innerHTML=`${incorrectQuestions} respuesta incorrecta`;
  }
  if (incorrectQuestions === 0) {
    let questionsIncorrect = d.querySelector(".answers__incorrect").innerHTML=`${incorrectQuestions} respuestas incorrectas`;
  }
  if (incorrectQuestions > 1) {
    let questionsIncorrect = d.querySelector(".answers__incorrect").innerHTML=`${incorrectQuestions} respuestas incorrectas`;
  }
    
    
  
  
  let scoreboarNameUser = d.querySelector(".answers__login__name").innerHTML=`${nameUser}:`;
  console.log(`Preguntas incorrectas ${correctQuestions}`);
  console.log(`Preguntas correctas ${incorrectQuestions}`);  
  console.log(correctQuestions)
};

scoreboar();
