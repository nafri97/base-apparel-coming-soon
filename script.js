function checkEmail(){
    let emailInput= document.getElementById("emailInput");
    let pesan = document.getElementById("pesan")
    let errorIcon = document.getElementById("errorIcon")
    let boxInput = document.getElementById("boxInput")
    console.log("sukses");
    let validEmail = /^\S+@\S+\.\S+$/;
    if (validEmail.test(emailInput.value)){
      pesan.innerHTML = "Thank you! We'll keep you updated and send you exclusive offers when we launch. Stay tuned!" 
      pesan.style.margin = "10px"
      pesan.style.color = "hsl(0, 6%, 24%)"  
      errorIcon.style.display = "none" 
      boxInput.style.border ="solid 2px hsl(0, 7%, 67%)";
      emailInput.value = '';
    }
    else{
      pesan.innerHTML ="Please provide valid Email"
      pesan.style.margin = "10px"
      pesan.style.color = "#922"
      errorIcon.style.display = "block"
      boxInput.style.border = "solid 3px #922"
    }
  }
