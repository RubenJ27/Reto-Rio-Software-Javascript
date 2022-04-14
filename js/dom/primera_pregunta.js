const d = document,
st = sessionStorage;

 function firstQuestion(params) {
  let optionOne = d.getElementById("option__one");
  let optionTwo = d.getElementById("option__two");
  let optionSelectorOne = ".option__one";
  let optionSelectorTwo = ".option__two";
  
  
  //console.log(optionOne);

  let optionOneReply = false;
  let optionTwoReply = true;

  let optionReplyCorrectTotal;
  let optionReplyIncorrectTotal;
  //console.log(optionReplyIncorrectTotal)
  
  d.addEventListener("click", e => {
    if (e.target === optionOne && optionOneReply === false || e.target.matches(`${optionSelectorOne} *`)) {//todo: esta linea es para seleccionar todo el selector de css e.target.matches(`${optionOne} *`) en caso de no ponerla no funcionara si se le da click al icono dentro del boton solo si se le da click a el boton como tal, con esta linea habilitados la funcion a todo lo que este dentro de ese selector
      optionReplyIncorrectTotal = 1;
      optionReplyCorrectTotal = 0;
      st.setItem("optionReplyIncorrectTotal", optionReplyIncorrectTotal);//todo: aqui pasamos el valor escogido por el usuario al scope de la siguiente pregunta para ir sumando los valores correctos e incorrecton segun lo que el usuario responda
      st.setItem("optionReplyCorrectTotal", optionReplyCorrectTotal);
      location.href='segunda-pregunta.html';
    }
    if (e.target === optionTwo && optionTwoReply === true || e.target.matches(`${optionSelectorTwo} *`)) {
      optionReplyCorrectTotal = 1;
      optionReplyIncorrectTotal = 0;
      st.setItem("optionReplyCorrectTotal", optionReplyCorrectTotal);
      st.setItem("optionReplyIncorrectTotal", optionReplyIncorrectTotal);
      location.href='segunda-pregunta.html';
     }
  });
  
}
firstQuestion();

