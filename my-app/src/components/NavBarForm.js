import React, { Component } from "react";
import ClickAbleButton from "./ClickAbleButton";
import RequiredInputs from "./RequiredInputs";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>

        {this.state.isLoggedIn ? (
          <form>
            <RequiredInputs
              label="Username"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />

            <RequiredInputs
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />

            <ClickAbleButton
              btnText="Submit"
              onClick={this.handleClick}
              type="submit"
            />
          </form>
        ) : (
          <ClickAbleButton btnText="Log In" onClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default NavBarForm;
