import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LatestHomeNews(){
	const [categories, setCategories] = useState([]);
	const [latestPosts, setLatestPosts] = useState([]);

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
             	setLatestPosts(response.data);
             })
             .catch(error => {
             	 console.error('Error get trading post:', error);
             })
	}, []);
	return(
		<>
		{latestPosts.map((post, index) => (
		<div className="col-lg-6">
		<div className="position-relative mb-3">
		<img className="img-fluid w-100" src={post.yoast_head_json.og_image[0].url} style={{objectFit:'cover'}} />
		<div className="bg-white border border-top-0 p-4">
		<div className="mb-2">
		<Link className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
		to="">{categories.find(category => category.id === post.categories[0]).name}</Link>
		<Link className="text-body" to=""><small>{new Date(post.date).toLocaleDateString()}</small></Link>
		</div>
		<Link className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" to={`/post/${post.id}`}>
		{post.title.rendered}
		</Link>
		<p className="m-0"><div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /></p>
		</div>
		
		</div>
		</div>
		))}
		</>
	);
}
export default LatestHomeNews;