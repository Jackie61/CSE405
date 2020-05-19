document.addEventListener("DOMContentLoaded" , event =>{
    const app = firebase.app();
    console.log(app);
})

function googleLogin()
{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
           var name = user.displayName;
           document.getElementById('Name').innerHTML = name;
           
           console.log(user)
        }).catch(console.log)
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
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
}


function Logout()
{
    const btnLogout = document.getElementById('logout');
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        console.log("signed out")
    });

}
function AnyonymousLogin(){
    //get element
    const btnLogin = document.getElementById('Anyonymouslogin');

    btnLogin.addEventListener('click', e => {
        firebase.auth().signInAnonymously();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser);
    });
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
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