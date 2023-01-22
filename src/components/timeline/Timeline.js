import React from 'react'
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';
function Timeline() {
  return (
    <div className='timeline'>
        <div className='timeline--header'>
            <h2>ホーム</h2>
            <TweetBox />
            <Post/>
        </div>
    </div>
  )
}

export default Timeline