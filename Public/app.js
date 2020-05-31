
var login = false;

document.addEventListener('DOMContentLoaded' , event =>{
    const app = firebase.app();
    console.log(app);
    handleSignedOutUser();
  });
  function handleSignedOutUser() {
    if(login === false)
    {
      document.getElementById('SignedIn').style.display = 'none';
      document.getElementById('NotSignedIn').style.display = 'block';
    }}

  
  function googleLogin()
  {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
          const currentUser = result.user;
          handleSignedINUser();
           console.log(currentUser);
        })

  };
  
  function Logout()
  {
    const btnLogout = document.getElementById('logout');
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
       handleSignedOutUser();
        console.log("signed out")
    });  
    login = false;
    };
  
  function AnyonymousLogin(){
    //get element
    const btnLogin = document.getElementById('Anyonymouslogin');
  
    btnLogin.addEventListener('click', event => {
        firebase.auth().signInAnonymously().then(result => {
          const currentUser = result.user;
          document.getElementById('SignedIn').style.display = 'block';
          document.getElementById('NotSignedIn').style.display = 'none';
         console.log(currentUser)
      })
    });
  };

  function handleSignedINUser(){
    login === true;
    document.getElementById('SignedIn').style.display = 'block';
    document.getElementById('NotSignedIn').style.display = 'none';
  }

  


