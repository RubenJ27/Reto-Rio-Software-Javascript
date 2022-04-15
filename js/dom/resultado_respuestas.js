const d = document,
w = window,
st = sessionStorage;


function scoreboar(params) {
  let nameUser = st.getItem("$data_user");
  let incorrect = st.getItem("optionReplyIncorrectTotal");
  let correct = st.getItem("optionReplyCorrectTotal");
  let questionsCorrect = d.querySelector(".answers__correct").innerHTML=`${correct} respuestas correctas`;
  let questionsIncorrect = d.querySelector(".answers__incorrect").innerHTML=`${incorrect} respuestas incorrecta`;
  let scoreboarNameUser = d.querySelector(".answers__login__name").innerHTML=`${nameUser}:`;
  console.log(`Preguntas incorrectas ${incorrect}`);
  console.log(`Preguntas correctas ${correct}`);  
};

scoreboar();
