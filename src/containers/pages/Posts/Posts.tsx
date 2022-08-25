import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { GET_POSTS, GET_BY_CATEGORY } from '../../../api/constant';
import PostCard from './PostCard/PostCard';
import PostCardLoading from './PostCard/PostCardLoading';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const categoryParams = useParams()?.category;

  const LIMIT_POSTS = 6;

  const getPostsFirstPage = (controller: any) => {
    fetch(`${GET_POSTS}?page=${1}&limit=${LIMIT_POSTS}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*',
      },
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setMaxPage(data?.data?.totalItems);
        setPosts(data?.data?.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Request was aborted');
        } else {
          setIsLoading(false);
        }
      });
  };

  const getMorePost = (controller: any, pageNum: any) => {
    fetch(`${GET_POSTS}?page=${pageNum}&limit=${LIMIT_POSTS}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*',
      },
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setMaxPage(data?.data?.totalItems);
        setPosts((prev) => [...prev, ...data?.data?.results]);
        setIsLoadMore(false);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Request was aborted');
        } else {
          setIsLoadMore(false);
        }
      });
  };

  const getPostFiltered = useCallback(
    (controller: any) => {
      fetch(`${GET_BY_CATEGORY}/${categoryParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Allow-Control-Allow-Origin': '*',
        },
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setPosts(data?.data);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.name === 'AbortError') {
            console.log('Request was aborted');
          } else {
            setIsLoading(false);
          }
        });
    },
    [categoryParams]
  );

  const loadMore = (e: any) => {
    if (maxPage <= posts.length || categoryParams) {
      e.target.disabled = true;
      return;
    }
    setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    if (pageNumber > 1) {
      const controller = new AbortController();
      setIsLoadMore(true);

      getMorePost(controller, pageNumber);
      return () => {
        controller.abort();
      };
    }
  }, [pageNumber]);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    if (!categoryParams) {
      getPostsFirstPage(controller);
    } else {
      setPageNumber(1);
      getPostFiltered(controller);
    }

    return () => {
      controller.abort();
    };
  }, [categoryParams, getPostFiltered]);

  const renderPosts =
    posts?.length !== 0 ? (
      posts?.map((post: any) => <PostCard key={post.id} post={post} />)
    ) : (
      <div className="w-100">
        <p className="text-center fs-3 fw-semibold">No Post Found</p>
      </div>
    );

  return (
    <>
      <section id="posts" className="container">
        <div className="row justify-content-between align-items-start gy-5">
          {isLoading ? <PostCardLoading /> : renderPosts}
          {isLoadMore ? <PostCardLoading /> : null}
        </div>
        {posts?.length !== 0 && posts.length < maxPage && !categoryParams ? (
          <button
            disabled={isLoadMore}
            type="button"
            onClick={loadMore}
            className="btn btn-dark mx-auto d-block mt-5"
          >
            Load More
          </button>
        ) : null}
      </section>
    </>
  );
}

export default Posts;
