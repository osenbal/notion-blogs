import React from 'react';
import { Link } from 'react-router-dom';
import ImageFeature from '../../../../assets/images/thumbs/thumb-blog.png';

function PostCard({ post }: { post: any }) {
  function formatDate(date: any) {
    const dateObj = new Date(date);
    const result = dateObj.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    return result;
  }

  return (
    <div className="post__card col-12 col-md-6">
      <div className="card border-0">
        <img src={ImageFeature} className="card-img-top" alt="featured post" />
        <div className="card-body p-0 pt-3">
          <p className="card-text post__date">
            {formatDate(post?.createdAt).toString()}
          </p>
          <p className="card-text fs-4 post__title">{post?.title}</p>
          <p className="card-text post__description">{post?.description}</p>
          <Link className="post__link-detail" to={`/post/${post?.id}`}>
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
