import React, {Component} from "react";

export default class Login extends Component {
    render() {
        return (
            <div>
                <form>
                  <h2>Login Here:</h2>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username" />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" />
                  </div>
                  <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}