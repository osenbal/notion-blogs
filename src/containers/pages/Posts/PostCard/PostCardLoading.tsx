import React from 'react';
import './PostCardLoading.modules.css';

function PostCardLoading() {
  return (
    <div className="post__card-loading col-12 col-md-6">
      <div className="card border-0">
        <div className="card-img-top post__image-loading" />
        <div className="card-body p-0 pt-3">
          <p className="card-text post__date-loading"></p>
          <p className="card-text fs-4 post__title-loading"></p>
          <p className="card-text post__description-loading"></p>
          <p className="post__link-detail-loading"></p>
        </div>
      </div>
    </div>
  );
}

function LoadingCards() {
  const loadPages = [1, 2, 3, 4];

  return (
    <>
      {loadPages.map((num) => (
        <PostCardLoading key={num} />
      ))}
    </>
  );
}

export default LoadingCards;
