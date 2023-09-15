import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';


function Single(){
	const { postID } = useParams();
	const [singlePost, setSinglePost] = useState({});
	const [categories, setCategories] = useState([]);

	useEffect(() => {
        axios
           .get('https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/categories')
           .then(response => {
           	  setCategories(response.data);
           })
           .catch(error => {
           	  console.error('Error fetching Category', error);
           })
	}, []);

	useEffect(() => {
          axios
             .get(`https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/posts/${postID}`)
             .then(response => {
             	setSinglePost(response.data);
             })
             .catch(error => {
             	console.error('Error fetching post:', error);
             })
	}, [postID])
  return(
     <>

		<div className="container-fluid mt-5 mb-3 pt-3">
		<div className="container">
		<div className="row align-items-center">
		<div className="col-12">
		<div className="d-flex justify-content-between">
		<div className="section-title border-right-0 mb-0" style={{width: '180px'}}>
		<h4 className="m-0 text-uppercase font-weight-bold">Tranding</h4>
		</div>
		<OwlCarousel 
		className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center bg-white border border-left-0" 
		items={1} 
		loop 
		autoplay 
		style={{ width: 'calc(100% - 180px)',paddingRight: '100px', }}>
		
		<div className="item text-truncate">
		<a className="text-secondary text-uppercase font-weight-semi-bold" href="">
		Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales
		</a>
		</div>
		<div className="item text-truncate">
		<a className="text-secondary text-uppercase font-weight-semi-bold" href="">
		Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales
		</a>
		</div>
		</OwlCarousel>
		</div>
		</div>
		</div>
		</div>
		</div>


		<div className="container-fluid">
		<div className="container">
		<div className="row">
		<div className="col-lg-8">
		<div className="position-relative mb-3">
		{singlePost.yoast_head_json && singlePost.yoast_head_json.og_image && (
          <img
            className="img-fluid w-100"
            src={singlePost.yoast_head_json.og_image[0].url}
            style={{ objectFit: 'cover' }}
            alt="Post Image"
          />
         )}
		<div className="bg-white border border-top-0 p-4">
		<div className="mb-3">
		{singlePost.categories &&
		  singlePost.categories.length > 0 &&
		  categories.some((category) => category.id === singlePost.categories[0]) ? (
		    <a
		      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
		      href=""
		    >
		      {
		        categories.find((category) => category.id === singlePost.categories[0]).name
		      }
		    </a>
		  ) : (
		    // Handle the case where the category is not found
		    <span>No Category Found</span>
		  )}
		<a className="text-body" href="">{singlePost.date && new Date(singlePost.date).toLocaleDateString()}</a>
		</div>
		<h1 className="mb-3 text-secondary text-uppercase font-weight-bold">
		{singlePost.title ? singlePost.title.rendered : ''}
		</h1>
		<div
            dangerouslySetInnerHTML={{
              __html: singlePost.content ? singlePost.content.rendered : '',
            }}
          />
		</div>
		<div className="d-flex justify-content-between bg-white border border-top-0 p-4">
		<div className="d-flex align-items-center">
		<img className="rounded-circle mr-2" src="/assets/img/user.jpg" width="25" height="25" alt="" />
		<span>John Doe</span>
		</div>
		<div className="d-flex align-items-center">
		<span className="ml-3"><i class="far fa-eye mr-2"></i>12345</span>
		<span className="ml-3"><i class="far fa-comment mr-2"></i>123</span>
		</div>
		</div>
		</div>



		</div>

		<div class="col-lg-4">
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
		<i className="fab fa-twitter text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
		<span className="font-weight-medium">12,345 Followers</span>
		</a>
		<a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#0185AE' }}>
		<i className="fab fa-linkedin-in text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
		<span className="font-weight-medium">12,345 Connects</span>
		</a>
		<a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#C8359D' }}>
		<i className="fab fa-instagram text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
		<span className="font-weight-medium">12,345 Followers</span>
		</a>
		<a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#DC472E' }}>
		<i className="fab fa-youtube text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
		<span className="font-weight-medium">12,345 Subscribers</span>
		</a>
		<a href="" className="d-block w-100 text-white text-decoration-none" style={{ background: '#055570' }}>
		<i className="fab fa-vimeo-v text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
		<span className="font-weight-medium">12,345 Followers</span>
		</a>
		</div>
		</div>
		<div className="mb-3">
		<div className="section-title mb-0">
		<h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
		</div>
		<div className="bg-white text-center border border-top-0 p-3">
		<p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
		<div className="input-group mb-2" style={{ width: '100%' }}>
		<input type="text" className="form-control form-control-lg" placeholder="Your Email" />
		<div className="input-group-append">
		<button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
		</div>
		</div>
		<small>Lorem ipsum dolor sit amet elit</small>
		</div>
		</div>
		</div>
		</div>
		</div>
		</div>
     </>
  );
}
export default Single;