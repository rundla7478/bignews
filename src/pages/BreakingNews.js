import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';

function BreakingNews(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     const postsapiUrl = 'https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/posts';
      axios(postsapiUrl)
         .then(response => {
         	setPosts(response.data);
         })
         .catch(error => {
         	 console.error('Error fetching posts:', error);
         });
  }, [])
  return(
     <>
     <OwlCarousel className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3" items={1} loop autoplay style={{ width: 'calc(100% - 185px)',paddingRight: '95px', }}>
		{posts.map((post, index) => (
		<div className="item text-truncate" key={index}>
		<Link className="text-white text-uppercase font-weight-semi-bold" to={`/post/${post.id}`}>
		 {post.title.rendered}
		</Link>
		</div>
         ))}
		</OwlCarousel>
     </>
  );
}
export default BreakingNews;