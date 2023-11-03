
const Contact = () => {
    return (
        <section id="contact" className="hero is-fullheight-with-navbar">
        <div className="hero-body">
            <div className="container">
                <h1 className="title has-text-centered">Contact</h1>
                <h2 className="subtitle has-text-centered">I'm sure you and I have something to say. Let's share it.</h2>
                <form>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Your name" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="hello@its.me" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-paper-plane"></i>
                            </span>
                            {/* <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span> */}
                        </div>
                        {/* <p className="help is-danger">This email is invalid</p> */}
                    </div>

                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <div className="select">
                                <select>
                                    <option>What about your CV ?</option>
                                    <option>Need some info over a project</option>
                                    <option>Look at my job offer</option>
                                    <option>Let's talk about something</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Your message"></textarea>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Contact;