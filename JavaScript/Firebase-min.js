// Add this elements to <head>
/*
<script src="/Scripts/Firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.14.0/firebase-database-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.14.0/firebase-functions-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.14.0/firebase-auth-compat.js"></script> */

// Database class definition.
const firebaseConfig = {
    apiKey: "AIzaSyAjJ2zxr5jomZySTXlSzqcgSm1vXSTIUlA",
    authDomain: "quizizapp.firebaseapp.com",
    databaseURL: "https://quizizapp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "quizizapp",
    storageBucket: "quizizapp.appspot.com",
    messagingSenderId: "75300306655",
    appId: "1:75300306655:web:79f4b3549e6434103d336a",
    measurementId: "G-65Q6S37KF8"
};

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

// Database class definition.
class Database {

    // Main constructor of new() statement.
    constructor() {
        // Initalize firebase features.
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.database();
    }
    // Set element to database.
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
        // value, child_added, child_removed, child_changed, child_moved
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
        // Initalize firebase features.
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
