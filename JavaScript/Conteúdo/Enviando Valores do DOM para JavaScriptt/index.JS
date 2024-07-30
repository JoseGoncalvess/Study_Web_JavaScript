function register(elements) {
  const  nameuser = elements.children.username.value;
  const  password = elements.children.password.value;
  const  passwordConfimation = elements.children.passwordConfirmation.value;

  if (password == passwordConfimation) {
    alert(`Usuario:  ${nameuser} Cadastrado`)
    
  }else{
    alert(`A senha não confere coma senha infomrada!`)

  }
}