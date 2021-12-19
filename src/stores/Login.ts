import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebaseApp';

const SignInEmail = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return true;
    } catch (e) {
        return e;
    }
}

const CreateUserByEmail = async (email: string, password: string) => {
    try {
        let credential = await createUserWithEmailAndPassword(auth, email, password);
        return true;
    } catch (e) {
        return e;
    }
}

const SignOut = () => {
    signOut(auth);
}
export {
    SignInEmail,
    CreateUserByEmail,
    SignOut,
}