import React, { Component } from "react";
import PostItem from "./PostItem";
import Loader from "./Loader";
import postsData from "../posts.json";
import css from "./css/Content.module.css";

export class Content extends Component {
  constructor(props) {
    console.log("Content constructor");
    super(props);

    this.state = {
      isLoaded: false
    };
  }

spinnerOff(){
  console.log("spinnerOff called");
  setTimeout(()=> {
    this.setState({
      isLoaded: true
    })
  }, 2000)
}

componentDidMount(){
  console.log("Content componentDidMount");
  this.spinnerOff();
}



  render() {
    console.log("Content render");
    const savedPosts = postsData.savedPosts;
    return (
      <div>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? ( <PostItem savedPosts={savedPosts} />) : ( <Loader />)}
         
        
        </div>
      </div>
    );
  }
}

export default Content;

