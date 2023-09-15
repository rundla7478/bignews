import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Footer(){
	const [categories, setCategories] = useState([]);
	const [posts, setPosts] = useState([]);

  useEffect(() => {
    //const apiKey = 'a51cac45e92040a1bc46da3c15fe3260'; // Replace with your News API key
    const apiUrl = 'https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/categories';

    axios
      .get(apiUrl)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
        const apiUrlOne = 'https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/posts';
        axios
           .get(apiUrlOne)
           .then(response => {
           	  setPosts(response.data);
           })
           .catch(error => {
           	  console.error('Error fetching posts:', error);
           });
  }, [])


   return(
      <>
	<div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
	<div className="row py-4">
	<div className="col-lg-3 col-md-6 mb-5">
	<h5 className="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
	<p className="font-weight-medium"><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
	<p className="font-weight-medium"><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
	<p className="font-weight-medium"><i className="fa fa-envelope mr-2"></i>info@example.com</p>
	<h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
	<div className="d-flex justify-content-start">
	<a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
	<a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
	<a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
	<a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-instagram"></i></a>
	<a className="btn btn-lg btn-secondary btn-lg-square" href="#"><i className="fab fa-youtube"></i></a>
	</div>
	</div>
	<div className="col-lg-3 col-md-6 mb-5">
	<h5 className="mb-4 text-white text-uppercase font-weight-bold">Popular News</h5>
    {posts.slice(0, 5).map((post, index) => (
			<div className="mb-3" key={index}>
			<div className="mb-2">
			<Link className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="">
			{categories.find(category => category.id === post.categories[0]).name}
			</Link>
			<a className="text-body" href=""><small>{new Date(post.date).toLocaleDateString()}</small></a>
			</div>
			<Link className="small text-body text-uppercase font-weight-medium" to={`/post/${post.id}`}>
			{post.title.rendered}</Link>
			</div>
    ))}
	

	</div>
	<div className="col-lg-3 col-md-6 mb-5">
	<h5 className="mb-4 text-white text-uppercase font-weight-bold">Categories</h5>
	<div className="m-n1">
	{categories.map((category, index) => (
      <Link to={`/category/${category.slug}`} className="btn btn-sm btn-secondary m-1" key={index}>
        <div dangerouslySetInnerHTML={{ __html: category.name }} />
      </Link>
    ))}
	</div>
	</div>
	<div className="col-lg-3 col-md-6 mb-5">
	<h5 className="mb-4 text-white text-uppercase font-weight-bold">Flickr Photos</h5>
	<div className="row">
	<div className="col-4 mb-3">
	<a href=""><img className="w-100" src="/assets/img/news-110x110-1.jpg" alt="" /></a>
	</div>
	<div className="col-4 mb-3">
	<a href=""><img className="w-100" src="/assets/img/news-110x110-2.jpg" alt="" /></a>
	</div>
	<div className="col-4 mb-3">
	<a href=""><img className="w-100" src="/assets/img/news-110x110-3.jpg" alt="" /></a>
	</div>
	<div className="col-4 mb-3">
	<a href=""><img className="w-100" src="/assets/img/news-110x110-4.jpg" alt="" /></a>
	</div>
	<div className="col-4 mb-3">
	<a href=""><img className="w-100" src="/assets/img/news-110x110-5.jpg" alt="" /></a>
	</div>
	<div className="col-4 mb-3">
	<a href=""><img className="w-100" src="/assets/img/news-110x110-1.jpg" alt="" /></a>
	</div>
	</div>
	</div>
	</div>
	</div>
	<div className="container-fluid py-4 px-sm-3 px-md-5" style={{ background: '#111111' }}>
	<p className="m-0 text-center">&copy; <a href="#">Your Site Name</a>. All Rights Reserved. Design by <a href="https://htmlcodex.com">HTML Codex</a><br/>
	Distributed by <a href="https://themewagon.com">ThemeWagon</a>
	</p>
	</div>

	<a href="#" className="btn btn-primary btn-square back-to-top"><i className="fa fa-arrow-up"></i></a>
      </>
   	);
}
export default Footer;