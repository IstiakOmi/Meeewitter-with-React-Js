import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Istiak Jaman",
      username: "istiakomi",
      verified: true,
      avatar:
        "https://lh3.googleusercontent.com/cgpeJQe9d_6pSVhcpvmUwp_daENriPnBWD7tWa-mGePpdjqdJJhw2WOCX1phezrpUfSzyQI=s102",
      text: tweetMessage,
      image: tweetImage,
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetBox__inputImage"
          placeholder="Optional: Enter image URL"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Mweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
