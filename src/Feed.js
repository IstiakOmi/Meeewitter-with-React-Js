import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
        <img
          src="https://cdn.dribbble.com/users/430847/screenshots/5097896/dribbble-final.gif"
          height="40px"
          width="50px"
          alt=""
        />
      </div>

      {/* TweetBox */}
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
      {/* <Post
        displayName="Nazia Hasnain"
        username="hasnaintammee"
        verified
        text="Hey, is it Working?"
        avatar="https://cdn5.vectorstock.com/i/1000x1000/67/89/lovely-girl-avatar-of-cute-little-curly-girl-vector-21906789.jpg"
        image="https://i.pinimg.com/originals/3a/69/7c/3a697c57e8bc3987c1680157c41f56ff.gif"
      /> */}
    </div>
  );
}

export default Feed;
