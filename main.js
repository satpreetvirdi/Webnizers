//Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAbMsFUQlAtSFfljf8i57d6p0EDQJ2diXE",
    authDomain: "webnizers.firebaseapp.com",
    databaseURL: "https://webnizers.firebaseio.com",
    projectId: "webnizers",
    storageBucket: "webnizers.appspot.com",
    messagingSenderId: "983516315383",
    appId: "1:983516315383:web:293c31ec4dd6e7bb865df2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let messagesRef = firebase.database().ref("submissions");


document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var companyname = getInputVal('companyname');
    var email = getInputVal('email');
    var budget = getInputVal('budget');
    var Service = getInputVal('Service');

    saveMessage(name, phone, companyname, email, budget, Service);



    document.querySelector('.alert').style.display = 'block';


    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
    // clear form
    document.getElementById('contactform').reset();

}


function getInputVal(id) {
    return document.getElementById(id).value;
}



function saveMessage(name, phone, companyname, email, budget, Service) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        phone: phone,
        companyname: companyname,
        email: email,
        budget: budget,
        Service: Service,

    });
}