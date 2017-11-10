function signInto() {
    window.alert("Hi");
    //Firebase Files
    
    //Get elements
    const txtemail = document.getElementById('txtEmail');
    const txtpassword = document.getElementById('txtPassword');
    const btnlogin = document.getElementById('btnLogin');
    
    //Log in
    btnlogin.addEventListener('click', e => {
            
    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth().signInWithEmailAndPassword(email, password);
    });
    
   if (g-signin2.addEventListener('click', e =>)) {
      window.location.href = "index.html";
   } 
       
}