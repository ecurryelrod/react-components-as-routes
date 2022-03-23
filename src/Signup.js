import React, {Component} from "react";

export default class Signup extends Component {
    render() {
        return (
            <div>
                <form>
                  <div>
                    <h2>Sign up here:</h2>
                    <input type="text" name="username" placeholder="New Username"/>
                    <br/>
                    <input type="password" name="password" placeholder="New Password"/>
                    <br/>
                    <input type="submit" value="Signup"/>
                  </div>
                </form>
            </div>
        )
    }
}