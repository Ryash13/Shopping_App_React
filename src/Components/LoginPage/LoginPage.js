import { faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react'
import NavBar from '../NavBar/NavBar';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h4><FontAwesomeIcon className="mr-3" icon={faSignInAlt} />&nbsp;SIGN IN</h4>
                            <hr />
                            <form>
                                <div className="form-group row">
                                    <label className="col-sm-4 col-form-label"><h6 style={{ fontSize: "16px" }}>E-mail: </h6></label>
                                    <div className="col-sm-7">
                                        <FontAwesomeIcon icon={faEnvelope} style={{
                                            position: "absolute",
                                            fontSize: "20px", left: "275px", top: "395px"
                                        }} />
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Enter Email Id"
                                            value={this.state.email} />
                                    </div>
                                </div>
                                <div className="form-group row" style={{ marginTop: "12px" }}>
                                    <label className="col-sm-4 col-form-label"><h6 style={{ fontSize: "16px" }}>Password: </h6></label>
                                    <div className="col-sm-7">
                                        <FontAwesomeIcon icon={faLock} style={{
                                            position: "absolute",
                                            fontSize: "20px", left: "275px", top: "447px"
                                        }} />
                                        <input
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            required
                                            placeholder="Enter Password"
                                            value={this.state.password} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <button type="submit" style={{ width: "100px", padding: "6px 6px" }} className="btn btn-dark mx-3">
                                        <FontAwesomeIcon className="mr-3" icon={faSignInAlt} />&nbsp;&nbsp;Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;