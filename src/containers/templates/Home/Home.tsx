import React, { useEffect, useState } from 'react';
import Navigation from './Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { GET_CATEGORIES } from '../../../api/constant';
import { CategoryPost } from '../../../type.d/type';
import './Home.css';

function Home() {
  const [categories, setCategories] = useState<CategoryPost[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(GET_CATEGORIES, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*',
      },
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data?.data);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Request was aborted');
        } else {
          console.log(error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <main id="home">
        <Navigation categories={categories} />

        <Outlet />
      </main>
    </>
  );
}

export default Home;
