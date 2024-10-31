import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
const auth = getAuth();

// Sign in with Google
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  try {
    return signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
};

// sign in with Github
export const signInWithGithub = () => {
  const provider = new GithubAuthProvider();
  try {
    return signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
};

// Sign out from Google
export const doSignOut = () => {
  try {
    return signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
};

// Create a new user with email and password
export const doSignUpWithEmailAndPassword = (email, password) => {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

// Sign in with email and password
export const doSignInWithEmailAndPassword = (email, password) => {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

// Password reset
// export const resetPassword = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//   } catch (error) {
//     console.error(error);
//   }
// };
