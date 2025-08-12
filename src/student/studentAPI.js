import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// ✅ Register New Student with coins, testsTaken, etc.
export const registerStudent = async ({ name, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "students", user.uid), {
      uid: user.uid,
      name,
      email,
      coins: 0,               // ✅ Initial coins
      testsTaken: 0,          // ✅ Initial test count
      rank: 0,                // ✅ Optional
      createdAt: new Date(),  // ✅ Timestamp
    });

    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
};

// ✅ Login Student
export const loginStudent = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
};

// ✅ Get Student Profile
export const getStudentProfile = async (uid) => {
  try {
    const docRef = doc(db, "students", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
    else return null;
  } catch (err) {
    console.error("Error fetching profile:", err);
    return null;
  }
};
