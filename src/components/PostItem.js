import React from "react";

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <h4>{author.name}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
}

function PostComment({ comments }) {
  return (
    <div className="comment-body">
      {comments.map((comment) => (
        <div key={comment.id} className="comment-content">
          <img src={comment.author.avatar} className="comment-avatar" />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
      <form>
        <input placeholder="Escreva um comentário"></input>
      </form>
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p>{content}</p>
      <hr />
      <PostComment comments={comments} />
    </div>
  );
}

export default PostItem;
