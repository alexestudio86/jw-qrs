import { useState } from "react";
import { useLoginContext } from "../context/LoginProvider"


export function Modal() {

    const {user, login} = useLoginContext();
    const [modal, setModal] = useState(true);

    return (
        <>
            {
                modal &&
                <>
                    <div className="black vw-100 vh-100 opacity-max" style={{position:'fixed', left:'0', top:'0', overflow:'auto'}}>
                    </div>
                    <dialog className="show" style={{zIndex: 9}}>
                        <p>Ingrese sus credenciales para continuar</p>
                        <button
                            className="button"
                            onClick={ () => {setModal(false)} }
                        >Cancel</button>
                        <button
                            className="button"
                            onClick={ () => {
                                console.log('user1: ', user);
                                login(true);
                                setTimeout( () => {
                                    console.log('user2: ', user)
                                },3000 );
                            } }
                        >Login</button>
                    </dialog>
                </>
            }
        </>
    )
}