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

/*
I could have created the NavBarChild component using my RequiredInputs and ClickAbleButton components, but I wanted to keep the NavBarForm component simple and focused on the login functionality. The NavBarChild component is a separate component that handles the form submission and input validation. This way, the NavBarForm component remains clean and easy to understand, while still being able to use the reusable components for inputs and buttons.
If I had created the NavBarChild component, it would have looked like this:
import React from "react";
import ClickAbleButton from "./ClickAbleButton";
import RequiredInputs from "./RequiredInputs";

const NavBarChild = ({ handleClick }) => {
  return (
    <form>
      <RequiredInputs
        label="Username"
        type="text"
        id="username"
        name="username"
      />
      <RequiredInputs
        label="Password"
        type="password"
        id="password"
        name="password"
      />
      <ClickAbleButton
        btnText="Submit"
        onClick={handleClick}
        type="submit"
      />
    </form>
  );
};

export default NavBarChild;
*/
