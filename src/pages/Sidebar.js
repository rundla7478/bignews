import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Sidebar(){
	const [categories, setCategories] = useState([]);
	const [tradingPosts, setTradingPosts] = useState([]);

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

	useEffect(() => {
          axios
             .get('https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/posts')
             .then(response => {
             	setTradingPosts(response.data);
             })
             .catch(error => {
             	 console.error('Error get trading post:', error);
             })
	}, []);

  return(
     <>
		<div className="mb-3">
		<div className="section-title mb-0">
		<h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
		</div>
		<div className="bg-white border border-top-0 p-3">
		<a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#39569E'}}>
		<i className="fab fa-facebook-f text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
		<span className="font-weight-medium">12,345 Fans</span>
		</a>
		<a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#52AAF4'}}>
		<i className="fab fa-twitter text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
		<span className="font-weight-medium">12,345 Followers</span>
		</a>
		<a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#0185AE'}}>
		<i className="fab fa-linkedin-in text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
		<span className="font-weight-medium">12,345 Connects</span>
		</a>
		<a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#C8359D'}}>
		<i className="fab fa-instagram text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
		<span className="font-weight-medium">12,345 Followers</span>
		</a>
		<a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#DC472E'}}>
		<i className="fab fa-youtube text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
		<span className="font-weight-medium">12,345 Subscribers</span>
		</a>
		<a href="" className="d-block w-100 text-white text-decoration-none" style={{background: '#055570'}}>
		<i className="fab fa-vimeo-v text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
		<span className="font-weight-medium">12,345 Followers</span>
		</a>
		</div>
		</div>

		<div className="mb-3">
		<div className="section-title mb-0">
		<h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
		</div>
		<div className="bg-white text-center border border-top-0 p-3">
		<a href=""><img className="img-fluid" src="/assets/img/news-800x500-2.jpg" alt="" /></a>
		</div>
		</div>

		<div className="mb-3">
		<div className="section-title mb-0">
		<h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
		</div>
		<div className="bg-white border border-top-0 p-3">
        {tradingPosts.slice(0,5).map((post, index) => (
		<div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
		<img className="img-fluid" src={post.yoast_head_json.og_image[0].url} alt="" style={{width:'110px', height: '110px'}} />
		<div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
		<div className="mb-2">
		<Link className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" to="">
		{categories.find(category => category.id === post.categories[0]).name}
		</Link>
		<a className="text-body" href=""><small>{new Date(post.date).toLocaleDateString()}</small></a>
		</div>
		<Link className="h6 m-0 text-secondary text-uppercase font-weight-bold" to={`/post/${post.id}`}>
		{post.title.rendered}
		</Link>
		</div>
		</div>
        ))}

		</div>
		</div>

		<div className="mb-3">
		<div className="section-title mb-0">
		<h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
		</div>
		<div className="bg-white text-center border border-top-0 p-3">
		<p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
		<div className="input-group mb-2" style={{width: '100%'}}>
		<input type="text" className="form-control form-control-lg" placeholder="Your Email" />
		<div className="input-group-append">
		<button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
		</div>
		</div>
		<small>Lorem ipsum dolor sit amet elit</small>
		</div>
		</div>

     </>
  );
}
export default Sidebar;