// import React from 'react';
import PostData from '../data/posts.json'

const PostList = () => {
    return (
        <div className="homePage">
            <h1>Test Home</h1>
            {PostData.map((postDetail, index) => {
                return (
                <div>
                    <h1>
                    {postDetail.title}
                    </h1>
                    <p>{postDetail.content}</p>
                </div>
                )
            })}
        </div>
    );
}
 
export default PostList;