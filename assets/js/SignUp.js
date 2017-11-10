function signup() {
//Firebase Files
    
    const txtemail = document.getElementById('txtEmail');
    const txtpassword = document.getElementById('txtPassword');
    const btnsignup = document.getElementById('btnSignup');
    
    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth().createUserWithEmailAndPassword(email, password);
    
    window.location.href = "index.html";
};


