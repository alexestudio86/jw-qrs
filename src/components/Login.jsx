import { useLoginContext } from "../context/LoginProvider"


export function Login() {

    const {user, login} = useLoginContext();
    return (
        <>
            <button
                onClick={ () => {
                    console.log('user1: ', user);
                    login(true);
                    setTimeout( () => {
                        console.log('user2: ', user)
                    },3000 );
                } }
            >Login</button>
        </>
    )
}