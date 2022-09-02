import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../../type.d/type';
import ImageFeature1 from '../../../../assets/images/thumbs/thumb-blog-1.png';
import ImageFeature2 from '../../../../assets/images/thumbs/thumb-blog.png';

function PostCard({ post }: { post: Post }) {
  function formatDate(date: any) {
    const dateObj = new Date(date);
    const result = dateObj.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    return result;
  }

  function getRandomIMage() {
    // get random number between 1 and 2
    const randomNumb = Math.floor(Math.random() * 2) + 1;
    if (randomNumb < 2) {
      return ImageFeature1;
    } else {
      return ImageFeature2;
    }
  }

  return (
    <div className="post__card col-12 col-md-6">
      <div className="card border-0">
        <img
          src={
            post?.featuredImage?.url ? post.featuredImage.url : getRandomIMage()
          }
          className="card-img-top post__image"
          alt="featured post"
        />
        <div className="card-body p-0 pt-3">
          {post.categories && (
            <div className="d-flex gap-2">
              {post?.categories?.map((category: any, index: number) => (
                <p
                  style={{
                    backgroundColor: `${category?.color}`,
                    borderRadius: `4px`,
                    padding: `0 8px`,
                  }}
                  key={index}
                >
                  {category?.name}
                </p>
              ))}
            </div>
          )}

          <p className="card-text post__date">
            {formatDate(post?.createdAt).toString()}
          </p>
          <p className="card-text fs-4 post__title">{post?.title}</p>
          <p className="card-text post__description">{post?.description}</p>
          <Link
            className="post__link-detail"
            to={`/post/${post?.id}`}
            replace={true}
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
