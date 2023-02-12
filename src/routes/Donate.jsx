export default function DonatePage() {
    return <div className="column is-4 is-offset-4">
        <h3 className="title">Donate</h3>
        <div className="box">
            <form method="POST" action="/api/donate">
                <div className="field">
                    <div className="label">
                        Donater
                    </div>
                    <div className="control">
                        <input className="input is-large" type="text" readOnly name="name" value="Logged In User's Name" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input is-large" list="bloodGroups" name="blood group" placeholder="Your Blood Group" autoFocus="" />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <input className="input is-large" type="date" name="donation date" />
                    </div>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">Submit</button>
            </form>
        </div>
        <datalist id="bloodGroups">
            <option value="O+" />
            <option value="O-" />
            <option value="A+" />
            <option value="A-" />
            <option value="B+" />
            <option value="B-" />
            <option value="AB+" />
            <option value="AB-" />
        </datalist>
    </div>
}