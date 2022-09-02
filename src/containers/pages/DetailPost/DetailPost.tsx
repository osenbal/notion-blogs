import React, { useEffect, useState } from 'react';
import { Render } from '@9gustin/react-notion-render';
import { useParams } from 'react-router-dom';
import { GET_DETAIL_POST } from '../../../api/constant';
import './DetailPost.css';
import DetailPostLoading from './DetailPostLoading';

function DetailPost() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetch(`${GET_DETAIL_POST}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Request was aborted');
        } else {
          console.log(error);
          setIsLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      <main id="detail-post">
        <div className="container">
          {!isLoading ? (
            <div className="detail-post__content">
              <Render blocks={post} />
            </div>
          ) : (
            <DetailPostLoading />
          )}
        </div>
      </main>
    </>
  );
}

export default DetailPost;
