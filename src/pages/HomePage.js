import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>Go to <Link to='/products'>Products page</Link></p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  )
}

export default HomePage;