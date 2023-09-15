import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';



function Carousel() {
 const [categories, setCategories] = useState([]);
 const [posts, setPosts] = useState([]);

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
      const postsapiUrl = 'https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/posts';
      axios(postsapiUrl)
         .then(response => {
         	setPosts(response.data);
         })
         .catch(error => {
         	 console.error('Error fetching posts:', error);
         })
   }, []);

  return (
  	<>
    <OwlCarousel className="owl-carousel main-carousel" items={1} loop autoplay>
     {posts.slice(0,3).map((post, index) => (
      <div className="item" style={{height: '500px' }}>
        <img src={post.yoast_head_json.og_image[0].url} alt="Image 1" />
        <div className="overlay">
        <div className="mb-2">
		<Link className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
		to="">{categories.find(category => category.id === post.categories[0]).name}</Link>
		<Link className="text-white" to="">{new Date(post.date).toLocaleDateString()}</Link>
		</div>
		<Link className="h2 m-0 text-white text-uppercase font-weight-bold" to={`/post/${post.id}`}>
		{post.title.rendered}
		</Link>
        </div>
      </div>
     ))}
    </OwlCarousel>
    </>
  );
}

export default Carousel;