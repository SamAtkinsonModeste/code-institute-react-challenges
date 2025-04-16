import React, { Component } from "react";
import postsData from "../posts.json";
import css from "./css/Content.module.css";

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Great job Sam!"
    };
  }
  render() {
    const savedPosts = postsData.savedPosts;
    return (
      <div>
        <div className={CSS.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={CSS.SearchResults}>
         {
          savedPosts.map((post) => {
            return(
              <div className={css.SearchItem}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt={post.title}></img>
                <p>{post.description}</p>
              </div>
            )
          })
         }
        </div>
      </div>
    );
  }
}

export default Content;
