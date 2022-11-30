const firebaseConfig = {
    apiKey:"AIzaSyAOadM71rJ8kz9a7B8lhTYqoBNP9b9-jxE",
    authDomain:"fir-jstest-8a47a.firebaseapp.com",
    projectId:"fir-jstest-8a47a",
    storageBucket:"fir-jstest-8a47a.appspot.com",
    messagingSenderId:"580695874556",
    appId:"1:580695874556:web:6fa6bc4943f3b7bd54f079"},
    lang="pl";

const auth = new FirebaseFacebookAuth(["firebase"]);

auth.signInWithPopup((e) => {
    console.log(e.user);
})