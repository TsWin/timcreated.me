// Me.timcreated@reply-n0-website!
const Contact = () => {
    return (
        <section id="contact" className="hero is-fullheight-with-navbar">
        <div className="hero-body">
            <div className="container is-flex is-flex-direction-column">
                <h1 className="title has-text-centered">Contact</h1>
                <h2 className="subtitle has-text-centered">Je suis sûr que vous avez quelque chose d'intéressant à dire. Partagez-le.</h2>
                {/* <form>
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
                            </span> */}
                            {/* <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        {/* <p className="help is-danger">This email is invalid</p> */}
                    {/* </div>

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
                            <button className="button is-black has-text-white">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-dark has-text-white">Cancel</button>
                        </div>
                    </div>
                </form> */}
                <div className="buttons is-justify-content-center">
                    <a className="button is-black has-text-white" href="mailto:me@timcreated.me">Envoyez moi un email</a>
                    </div>
            </div>
        </div>
    </section>
    )
}

export default Contact;