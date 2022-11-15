import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  doc,
  query,
  getFirestore,
  collection,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6q_kJefa4kaLe4emXOLfeK9foqq63Xcg",
  authDomain: "cryptosight-a3f9b.firebaseapp.com",
  projectId: "cryptosight-a3f9b",
  storageBucket: "cryptosight-a3f9b.appspot.com",
  messagingSenderId: "263300410370",
  appId: "1:263300410370:web:2fb5070ecf9d345c5b0b1b",
  measurementId: "G-RWQSW2BG74",
};

export const tables = {
  usersTable: "users",
  walletTable: "wallet",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);
const user = auth.currentUser;

export function logOut() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("uid");
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getUserIdDocument(userid) {
  return `/${tables.usersTable}/${userid}`;
}
export const addCoinToFavs = async (coinName) => {
  let unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userDocRef = doc(db, tables.usersTable, user.uid);

      await addDoc(collection(db, tables.walletTable), {
        coinid: coinName,
        quantity: 0,
        userid: userDocRef,
      }).then(() => {
        console.log("coin added");
      });
    }
  });
  unsubscribe();
};
export const deleteCoinFromFavs = async (coinName) => {
  const q = query(
    collection(db, tables.walletTable),
    where("coinid", "==", coinName)
  );
  const querySnapshot = await getDocs(q);
  if (querySnapshot.size) {
    const document = querySnapshot.docs[0];
    const docRef = doc(db, tables.walletTable, document.id);
    await deleteDoc(docRef);
  }
};
export async function getUser(userid) {
  const q = query(
    collection(db, tables.usersTable),
    where("uid", "==", userid)
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
export async function getCoinDocByName(coinName) {
  const q = query(
    collection(db, tables.walletTable),
    where("coinid", "==", coinName)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.length ? querySnapshot.docs[0] : null;
}
export async function updateCoinsValues(coinData) {
  let unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      const coinDoc = await getCoinDocByName(coinData.coinid);
      if (coinDoc === null || coinDoc === undefined) {
        return;
      }
      const coinDocRef = doc(db, tables.walletTable, coinDoc.id);
      await setDoc(coinDocRef, {
        ...coinData,
      })
        .then(() => {
          console.log("coin updated");
        })
        .catch((error) => {
          console.log("Error updating coin: ", error);
        });
    }
  });
  unsubscribe();
}
export { db, auth };
