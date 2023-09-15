import React from 'react';
import Carousel from './Carousel';
import HomeNewsBox from './HomeNewsBox';
import BreakingNews from './BreakingNews';
import FeaturedNews from './FeaturedNews';
import Sidebar from './Sidebar';
import LatestHomeNews from './LatestHomeNews';
function Home(){
   return(
      <>
		<div className="container-fluid">
		<div className="row">
		<div className="col-lg-7 px-0">
		<Carousel />
		</div>
		<div className="col-lg-5 px-0">
		<HomeNewsBox />
		</div>
		</div>
		</div>

		<div className="container-fluid bg-dark py-3 mb-3">
		<div className="container">
		<div className="row align-items-center bg-dark">
		<div className="col-12">
		<div className="d-flex justify-content-between">
		<div 
		className="bg-primary text-dark text-center font-weight-medium py-2" 
		style={{width: '170px'}}
		>
		Breaking News
		</div>
		<BreakingNews />
		</div>
		</div>
		</div>
		</div>
		</div>

		<div className="container-fluid pt-5 mb-3">
		<div className="container">
		<div className="section-title">
		<h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
		</div>
      <FeaturedNews />
		</div>
		</div>

		<div className="container-fluid">
		<div className="container">
		<div className="row">

		<div className="col-lg-8">
      <div className="row">

      <div className="col-12">
	    <div className="section-title">
	    <h4 className="m-0 text-uppercase font-weight-bold">Latest News</h4>
	    <a className="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
	    </div>
	    </div>
       <LatestHomeNews />

      </div>
      </div>

      <div class="col-lg-4">
      <Sidebar />
      </div>
 

      </div>
      </div>
      </div>

      </>
   );
}
export default Home;