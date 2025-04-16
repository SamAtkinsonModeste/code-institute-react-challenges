import React, { Component } from "react";
import { savedPosts } from "../post.json";
import css from "./Content.module.css";

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Great job Sam!"
    };
  }
  render() {
    return (
      <div>
        <div className={CSS.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={CSS.SearchResults}>
          savedPosts.map((post) => ({

          })
        </div>
      </div>
    );
  }
}

export default Content;
