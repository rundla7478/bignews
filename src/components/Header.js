import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Header(){
   const [categories, setCategories] = useState([]); 
   useEffect(() => {
   const categoryapiUrl = 'https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/categories';
   axios(categoryapiUrl)
      .then(response => {
      	 setCategories(response.data);
      })
      .catch(error => {
          console.error('Error fetching categories:', error);
      });
 }, []);

   return(
      <>
		<div className="container-fluid d-none d-lg-block">
		<div className="row align-items-center bg-dark px-lg-5">
		<div className="col-lg-9">
		<nav className="navbar navbar-expand-sm bg-dark p-0">
		<ul className="navbar-nav ml-n2">
		<li className="nav-item border-right border-secondary">
		<a className="nav-link text-body small" href="#">Monday, January 1, 2045</a>
		</li>
		<li className="nav-item border-right border-secondary">
		<a className="nav-link text-body small" href="#">Advertise</a>
		</li>
		<li className="nav-item border-right border-secondary">
		<a className="nav-link text-body small" href="#">Contact</a>
		</li>
		<li className="nav-item">
		<a className="nav-link text-body small" href="#">Login</a>
		</li>
		</ul>
		</nav>
		</div>
		<div className="col-lg-3 text-right d-none d-md-block">
		<nav className="navbar navbar-expand-sm bg-dark p-0">
		<ul className="navbar-nav ml-auto mr-n2">
		<li className="nav-item">
		<a className="nav-link text-body" href="#"><small className="fab fa-twitter"></small></a>
		</li>
		<li className="nav-item">
		<a className="nav-link text-body" href="#"><small className="fab fa-facebook-f"></small></a>
		</li>
		<li className="nav-item">
		<a className="nav-link text-body" href="#"><small className="fab fa-linkedin-in"></small></a>
		</li>
		<li className="nav-item">
		<a className="nav-link text-body" href="#"><small className="fab fa-instagram"></small></a>
		</li>
		<li className="nav-item">
		<a className="nav-link text-body" href="#"><small className="fab fa-google-plus-g"></small></a>
		</li>
		<li className="nav-item">
		<a className="nav-link text-body" href="#"><small className="fab fa-youtube"></small></a>
		</li>
		</ul>
		</nav>
		</div>
		</div>
		<div className="row align-items-center bg-white py-3 px-lg-5">
		<div className="col-lg-4">
		<Link to="/" className="navbar-brand p-0 d-none d-lg-block">
		<h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-secondary font-weight-normal">News</span></h1>
		</Link>
		</div>
		
		</div>
		</div>

	<div className="container-fluid p-0">
	<nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
	<Link to="/" className="navbar-brand d-block d-lg-none">
	<h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
	</Link>
	<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
	<span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
	<div className="navbar-nav mr-auto py-0">
	<Link to="/" className="nav-item nav-link active">Home</Link>
   {categories.slice(0,7).map((category, index) => (
   	category && category.name ? (
	<Link to={`/category/${category.slug}`} className="nav-item nav-link" key={index}>{category.name}</Link>
	) : null
   ))}
	<Link to="/contact" className="nav-item nav-link">Contact</Link>
	</div>
	<div className="input-group ml-auto d-none d-lg-flex" style={{ width: '100%', maxWidth: '300px' }}>
	<input type="text" className="form-control border-0" placeholder="Keyword" />
	<div className="input-group-append">
	<button className="input-group-text bg-primary text-dark border-0 px-3"><i
	className="fa fa-search"></i></button>
	</div>
	</div>
	</div>
	</nav>
	</div>
      </>
   );
}
export default Header;