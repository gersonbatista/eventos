import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2FNAgbTrfxUma9CnMa3q7rENJ8MiwtYc",
    authDomain: "primeiro-projeto-vue.firebaseapp.com",
    databaseURL: "https://primeiro-projeto-vue.firebaseio.com",
    projectId: "primeiro-projeto-vue",
    storageBucket: "primeiro-projeto-vue.appspot.com",
    messagingSenderId: "594686213755",
    appId: "1:594686213755:web:9a76a69ede80cf2ffbecde"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);