import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Category(){
  const { slug } = useParams();
  const [categoryPosts, setCategoryPosts] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {

  	 axios.get(`https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/categories?slug=${slug}`)
      .then(response => {
        const categoryId = response.data[0].id;
        setCategoryName(response.data[0].name);
        
        // Make another API request to get posts for the category
        axios.get(`https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/posts?categories=${categoryId}`)
          .then(response => {
            setCategoryPosts(response.data);
          })
          .catch(error => {
            console.error('Error fetching category posts:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching category ID:', error);
      });

  }, [slug]);


  return(
      <>
		<div className="container-fluid mt-5 pt-3">
		<div className="container">
		<div className="row">

		<div className="col-lg-8">
		<div className="row">
		<div className="col-12">
		<div className="section-title">
		<h4 className="m-0 text-uppercase font-weight-bold">Category: <div dangerouslySetInnerHTML={{ __html: categoryName }} /></h4>
		<a className="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
		</div>
		</div>
		{categoryPosts.map((post, index) => (
		<div className="col-lg-6" key={index}>
		<div className="position-relative mb-3">
		<img className="img-fluid w-100" src={post.yoast_head_json.og_image[0].url} style={{ objectFit: 'cover', width:'364px', height:'245px'}} />
		<div className="bg-white border border-top-0 p-4">
		<div className="mb-2">
		<a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
		href="">{categoryName}</a>
		<a className="text-body" href=""><small>{new Date(post.date).toLocaleDateString()}</small></a>
		</div>
		<Link className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" to={`/post/${post.id}`}>
		{post.title.rendered}
		</Link>
		<p className="m-0"><div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /></p>
		</div>
		
		</div>
		</div>
		))}


		</div>
		</div>

		<div className="col-lg-4">
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
export default Category;