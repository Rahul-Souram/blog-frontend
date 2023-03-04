import * as React from 'react';
import { Link } from "gatsby"

const NotFoundPage = () => (
    <div className="container">
      <h1>404: Not Found</h1>
      <p>Oops it's a dead end</p>
      <div className="home-btn">
      <Link to='/'>Back to Home</Link>
      </div>
    </div>
);

export default NotFoundPage;