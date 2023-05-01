import React from 'react'
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AdminDashboard = () =>{

  return (

    <div>
      <Helmet>
        <title>Order</title>
      </Helmet>
      <h1 className="my-3">Order </h1>
      <Button>
        <Link to='/addproduct'>add product</Link>
</Button>
    </div>
  );
}
export default AdminDashboard;;