import React from 'react';

const PostList = ({posts}) => (
    <div className='postlist'>
        <ul>
            {posts.map(post => (
                <li key={post._id}>
                    <a href={`/post/${post._id}`}>{post.title}</a>
                    <small className="date">{post.createdAt.format(Constants.Time.formatToMs)}</small>
                </li>
            ))}
        </ul>
  </div>
);

export default PostList;
