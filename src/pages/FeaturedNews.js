import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';

function FeaturedNews(){

  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [categoryName, setCategoryName] = useState('');


  useEffect(() => {

        axios
           .get('https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/categories?slug=featured')
           .then(response => {

           	const categoryId = response.data[0].id;
            setCategoryName(response.data[0].name);

	        axios
	           .get(`https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/posts?categories=${categoryId}`)
	           .then(response => {
	           	  setFeaturedPosts(response.data);
	           })
	           .catch(error => {
	           	  console.error('Error fetching category posts:', error);
	           });

          })
	      .catch(error => {
		     console.error('Error fetching category ID:', error);
		  });
  }, [])

  return(
      <>
    <OwlCarousel className="owl-carousel news-carousel carousel-item-4 position-relative" items={4} margin={30} loop autoplay nav>
    {featuredPosts.map((post, index) => (
    <div className="position-relative overflow-hidden" style={{height: '300px'}}>
    <img className="img-fluid h-100" src={post.yoast_head_json.og_image[0].url} style={{objectFit: 'cover'}} />
    <div className="overlay">
    <div className="mb-2">
    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
    href="">{categoryName}</a>
    <a className="text-white" href=""><small>{new Date(post.date).toLocaleDateString()}</small></a>
    </div>
    <Link className="h6 m-0 text-white text-uppercase font-weight-semi-bold" to={`/post/${post.id}`}>
    {post.title.rendered}
    </Link>
    </div>
    </div>
    ))}

    </OwlCarousel>
      </>
  );
}
export default FeaturedNews;