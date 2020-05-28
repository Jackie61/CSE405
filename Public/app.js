document.addEventListener('DOMContentLoaded' , event =>{
    const app = firebase.app();
    console.log(app);
  });
  var currentUser = true;
  function googleLogin()
  {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
          const currentUser = result.user;
           console.log(currentUser);
        })
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function() {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        });
  };
  
  function Logout()
  {
    const btnLogout = document.getElementById('logout');
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        console.log("signed out")
    });  
  };
  
  function AnyonymousLogin(){
    //get element
    const btnLogin = document.getElementById('Anyonymouslogin');
  
    btnLogin.addEventListener('click', event => {
        firebase.auth().signInAnonymously().then(result => {
          const currentUser = result.user;
         console.log(currentUser)
      })
    });
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });//firebase code
  
  };
  
  function authStateChanged(users) {
  if (users === null) {
    messageS.innerHTML            = "logged out"
    GoogleLogin.style.visibility  = "visible"
    AnyonyLogin.style.visibility   = "visible"
    userPage.style.display     = "none"
  } else {
    messageS.innerHTML            = "logged in"
    GoogleLogin.style.visibility  = "hidden"
    AnyonyLogin.style.visibility   = "hidden"
    userPage.style.visibility     = "inline"
  
  }
  }
  