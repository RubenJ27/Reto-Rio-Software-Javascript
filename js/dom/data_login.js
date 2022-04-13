const d = document;

export default function form_info(form) {
  const $form = d.getElementById(form);
  let $data_user;
  let valueForm = $form.name_user.value;
  console.log(valueForm);
  d.addEventListener("submit", e=> {

    if (e.target === $form && $form.name_user.value === "") {
      alert("Por favor ingrese un nombre valido, no se admite que el campo este vacio");
      e.preventDefault();
    }
    
    if (e.target === $form && typeof $form.name_user.value === "string") {
      e.preventDefault();
      location.href='primera-pregunta.html';
      $data_user = $form.name_user.value;
    }
  });  
}