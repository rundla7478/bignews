import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeNewsBox(){
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const apiUrl = 'https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/categories';
    axios(apiUrl)
       .then(response => {
       	  setCategories(response.data);
       })
       .catch(error => {
       	 console.error('Error fetching categories:', error);
       })
  }, []); 

  useEffect(() => {
        const apiUrl = 'https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/posts';
        axios(apiUrl)
           .then(response => {
           	  setPosts(response.data);
           })
           .catch(error => {
           	 console.error('Error fetching posts:', error);
           })
  }, []);


   return(
      <>
       <div className="row mx-0">
        {posts.slice(0,4).map((post, index) => (
		<div className="col-md-6 px-0" key={index}>
		<div className="position-relative overflow-hidden" style={{height: '250px' }}>

		<img className="img-fluid w-100 h-100" src={post.yoast_head_json.og_image[0].url} style={{objectFit: 'cover'}} />
		<div className="overlay">
		<div className="mb-2">
		<Link className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
		to="">{categories.find(category => category.id === post.categories[0]).name}</Link>
		<Link className="text-white" to=""><small>{new Date(post.date).toLocaleDateString()}</small></Link>
		</div>
		<Link className="h6 m-0 text-white text-uppercase font-weight-semi-bold" to={`/post/${post.id}`}>
    {post.title.rendered}
    </Link>
		</div>
		</div>
		</div>
        ))}

		</div>
      </>
   );
}
export default HomeNewsBox;