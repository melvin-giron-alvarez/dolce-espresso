import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB9lDaXOER3wwYekFyuParDBWgzymzXBUA",
    authDomain: "dolce-espresso.firebaseapp.com",
    projectId: "dolce-espresso",
    storageBucket: "dolce-espresso.appspot.com",
    messagingSenderId: "11093260013",
    appId: "1:11093260013:web:6db3de407b219c5bce3ee4",
    measurementId: "G-GV06EJZ7YC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };