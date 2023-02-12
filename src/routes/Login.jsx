const LoginPage = () => {
    return <div className="column is-4 is-offset-4">
        <h3 className="title">Login</h3>
        <div className="box">
            <form method="POST" action="/api/login">
                <div className="field">
                    <div className="control">
                        <input className="input is-large" type="email" name="email" placeholder="Your Email" autoFocus="" />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <input className="input is-large" type="password" name="password" placeholder="Your Password" />
                    </div>
                </div>
                <div className="field">
                    <label className="checkbox">
                        <input type="checkbox" name="remember" />
                        Remember me
                    </label>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">Login</button>
            </form>
        </div>
    </div>
}

export default LoginPage;