const d = document,
st = sessionStorage;

export default function form_info(form) {
  const $form = d.getElementById(form);
  let $data_user;
  let valueForm = $form.name_user.value;
  let isValid = false;
  d.addEventListener("submit", e=> {

    if (e.target === $form && !$form.name_user.value) {
      alert("Por favor ingrese un nombre valido, no se admite que el campo este vacio");
      e.preventDefault();
      isValid = false;
    } else{
      isValid = true;
    }
    
    if (e.target === $form && isValid === true) {
      e.preventDefault();
      location.href='primera-pregunta.html';
      $data_user = $form.name_user.value;
      st.setItem("$data_user", $data_user);
      console.log("Segundo if")
    }
  });  
}