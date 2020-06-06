
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
          handleSignedINUser(currentUser);
          user = result.user;
           console.log(currentUser);
        })

  };
  
  function Logout()
  {
        firebase.auth().signOut();
        login = false;
        handleSignedOutUser();
        console.log("signed out")
    };
  
  function AnyonymousLogin(){
    //get element
    const btnLogin = document.getElementById('Anyonymouslogin');
  
    btnLogin.addEventListener('click', event => {
        firebase.auth().signInAnonymously().then(result => {
          anyomuser = '{"person":['+
              '{"displayName" : "","email" : ""}]}';
          const currentUser = anyomuser;
          handleSignedINUser(currentUser);
         console.log(currentUser)
      })
    });
  };

  function handleSignedINUser(user){
    login === true;
    document.getElementById('SignedIn').style.display = 'block';
    document.getElementById('NotSignedIn').style.display = 'none';
    document.getElementById('Name').textContent= "Name: " + user.displayName;
    document.getElementById('Email').textContent= "Email: " + user.email;
  }


function readFirestor()
{
  var db = firebase.firestore();
  db.collection('post').doc("mypost")
    .onSnapshot(function(doc) {
      console.log("Current data: ", doc.data());
    });
}
