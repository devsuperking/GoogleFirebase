const auth = new FirebaseFacebookAuth(["firebase"]);

auth.signInWithPopup((e) => {
    console.log(e.user);
})