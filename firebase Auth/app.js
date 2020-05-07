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
    
}
function AnyonymousLogin()
{
    location.replace("anyomous.html")
};
function redirectMain()
{
    locatioin.replace("main.html")
};



