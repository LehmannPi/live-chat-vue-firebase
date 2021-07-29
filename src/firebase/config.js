import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBWXwmMfJSNPPMbWk6J0qCb72UoV7bWuEM",
  authDomain: "pilot-vue-project.firebaseapp.com",
  projectId: "pilot-vue-project",
  storageBucket: "pilot-vue-project.appspot.com",
  messagingSenderId: "637177796029",
  appId: "1:637177796029:web:3c2abf71c72f6239286ed4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
