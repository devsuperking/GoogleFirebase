/* <==============> Copy this to <head> tag. <==============>

<script src="/Scripts/Firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.14.0/firebase-database-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.14.0/firebase-functions-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.14.0/firebase-auth-compat.js"></script>

*/

const firebaseConfig = {
    apiKey: "AIzaSyAOadM71rJ8kz9a7B8lhTYqoBNP9b9-jxE",
    authDomain: "fir-jstest-8a47a.firebaseapp.com",
    projectId: "fir-jstest-8a47a",
    storageBucket: "fir-jstest-8a47a.appspot.com",
    messagingSenderId: "580695874556",
    appId: "1:580695874556:web:6fa6bc4943f3b7bd54f079"
};
const lang = "pl";

class Firestore {
    // Main constructor of new() statement.
    constructor() {

        // Initalize firebase features.
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
    }

    // <-----> Get elements from database. <----->
    get(colletion, doc, callback = () => {}) {
        var docRef = this.db.collection(colletion).doc(doc);
        docRef.get().then(doc => {
            if (doc.exists) {
                callback(doc.data());
            } else {
                callback(null);
            }
        });
    }

    // <-----> Get docs from database collection. <----->
    getAllDoc(collection, callback = () => {}) {
        this.db.collection(collection).get().then((querySnapshot) => {
            var docArray = [];
            querySnapshot.forEach((doc) => {
                docArray.push({id: doc.id, data: doc.data()});
            });
            callback(docArray);
        });
    }

    // <-----> Add element to database collection with auto-id. <----->
    add(collection, data, callback = () => {}) {
        this.db.collection(collection).add(data)
        .then((docRef) => {
            callback(docRef.id);
        });
    }

    // <-----> Database query. Find values. <----->
    query(collection, queryVal1, condition, queryVal2, callback = () => {}) {
        this.db.collection(collection).where(queryVal1, condition, queryVal2)
            .get()
            .then((querySnapshot) => {
                var dataArray = [];
                querySnapshot.forEach((doc) => {
                    dataArray.push({id: doc.id, data: doc.data()});
                });
                callback(dataArray);
            });
    }

    // <-----> Set document values. This overwrite all values. <----->
    set(collection, doc, value, callback = () => {}) {
        this.db.collection(collection).doc(doc).set(value)
        .then(() => {callback(true);})
        .catch(() => {
            callback(false);
        });
    }
    
    // <-----> Update database collection. This changes only selected values. <----->
    update(collection, doc, value, callback = () => {}) {
        this.db.collection(collection).doc(doc).update(value)
        .then(callback(true))
        .catch(() => {
            callback(false);
        })
    }
}
class RTDatabase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.database();
    }
    set(ref, data) {
        this.db.ref(ref).set(data);
    }
    get(ref, callback = () => {}) {
        this.db.ref(ref).get().then((snapshot) => {
            if (snapshot.exists) {
                callback(snapshot.val());
            }
        });
    }
    onChange(ref, type, callback = () => {}) {
        this.db.ref(ref).on(type, (e) => {
            callback({key: e.key, value: e.val()});
        });
    }
    update(ref, data, res = () => {}) {
        this.db.ref(ref).update(data).then(() => {
            res();
        });
    }
    add(ref, data, callback = () => {}) {
        const newKey = this.db.ref(ref).push().key;
        this.set(`${ref}${newKey}`, data);
        callback(newKey);
    }
}

class FilesStorage {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.storage();
    }
    delete(ref) {
        this.db.ref(ref);
    }
    uploadBase64(ref, b64, response = () => {}) {
        this.db.ref(ref).putString(b64, 'base64').then((snapshot) => {
            response();
        });
    }
}
class FirebaseBaseAuth
{
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
    }
    signInAnonymously(res) {
        this.auth.signInAnonymously().then(() => {
            res();
        });
    }
    register(email, password) {
        this.auth.createUserWithEmailAndPassword(email, password).then((user) => {
            var authed = user.user;

        });
    }
    login(email, password, ref = () => {}) {
        this.auth.signInWithEmailAndPassword(email, password).then((user) => {
            ref(user.user);
        }).catch((error) => {
            ref(error.code);
        });
    }
    onAuth(res = () => {}) {
        this.auth.onAuthStateChanged((user) => {
            if (user) {
                res(user);
            } else {
                res(null);
            }
        });
    }
    signOut(res = () => {}) {
        this.auth.signOut().then(() => {
            res();
        });
    }
    getCurrentUser(res = () => {}) {
        res(this.auth.currentUser);
    }
    getUserInfo(res = () => {}) {
        const user = this.auth.currentUser;
        if (user !== null) {

        }
    }
    updateProfile(obj, res = () => {}) {
        const user = this.auth.currentUser;
        user.updateProfile(obj).then(() => {res()});
    }
    updateEmail(email, res = () => {}) {
        const user = this.auth.currentUser;
        user.updateEmail(email).then(() => {
            res();
        });
    }
    setPassword(newPassword, res = () => {}) {
        const user = this.auth.currentUser;
        user.updatePassword(newPassword).then(() => {
            res();
        });
    }
    deleteUser(res = () => {}) {
        const user = this.auth.currentUser;
        user.delete().then(() => {
            res();
        });
    }
    reauth(res = () => {}) {
        const user = this.auth.currentUser;
        const crendical = promptForCredentials();
        user.reauthenticateWithCredential
    }
    isLogged(res = () => {}) {
        this.onAuth(() => {
            if (this.auth.currentUser) {
                res(true);
            } else {
                res(false);
            }
        });
    }
}
class FirebaseGoogleAuth {
    constructor(scopes, customParameters) {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.provider = new firebase.auth.GoogleAuthProvider();
        if (scopes !== undefined) {
            for(var x in scopes) {
                this.provider.addScope('https://www.googleapis.com/auth/' + scopes[x]);
            }
        }
        this.auth.useDeviceLanguage();
        if (customParameters !== undefined) {
            this.provider.setCustomParameters(customParameters);
        }
    }
    signInWithPopup(res = () => {}) {
        this.auth.signInWithPopup(this.provider).then((e) => {
            var credential = e.credential;
            var token = e.accessToken;
            var user = e.user;
            res({crendical: credential, token: token, user: user});
        }).catch((e) => {res(NaN);});
    }
}
class FirebaseFacebookAuth {
    constructor(scopes, customParameters = {'display': 'popup'}) {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.provider = new firebase.auth.FacebookAuthProvider();
        if (scopes !== undefined) {
            for(var x in scopes) {
                this.provider.addScope(scopes[x]);
            }
        }
        this.auth.useDeviceLanguage();
        if (customParameters !== undefined) {
            this.provider.setCustomParameters(customParameters);
        }
    }
    signInWithPopup(res = () => {}) {
        this.auth.signInWithPopup(this.provider).then((e) => {
            var credential = e.credential;
            var token = e.accessToken;
            var user = e.user;
            res({crendical: credential, token: token, user: user});
        }).catch((e) => {res(NaN);});
    }
}
class FirebaseTwitterAuth {
    constructor(scopes, customParameters = {'lang': lang}) {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.provider = new firebase.auth.FacebookAuthProvider();
        if (scopes !== undefined) {
            for(var x in scopes) {
                this.provider.addScope(scopes[x]);
            }
        }
        if (customParameters !== undefined) {
            this.provider.setCustomParameters(customParameters);
        }
    }
    signInWithPopup(res = () => {}) {
        this.auth.signInWithPopup(this.provider).then((e) => {
            var credential = e.credential;
            var token = e.accessToken;
            var secret = e.secret;
            var user = e.user;
            res({crendical: credential, token: token, user: user, secret: secret});
        }).catch((e) => {res(NaN);});
    }
}