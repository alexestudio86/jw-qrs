import { useLoginContext } from "../context/LoginProvider"


export function Login() {

    const {user, login} = useLoginContext();

    return (
        <div className="row py-5 white justify-content-center">
            <div className="col m6 border border-light-gray">
                <div className="p-2 theme-color-02">
                    <h2>Login</h2>
                </div>
                <form className="p-3">
                    <div className="cell-row py-1">
                        <label className="py-1"><b>User</b></label>
                        <input className="input border light-grey" type="text" />
                    </div>
                    <div className="cell-row py-1">
                        <label className="py-1"><b>Password</b></label>
                        <input className="input border light-grey" type="password" />
                    </div>
                    <div className="cell-row py-1">
                        <button className="right button theme-color-02">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}