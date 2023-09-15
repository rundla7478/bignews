import React, { useState } from 'react';

function Contact(){

	const[formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const handleChange = (e) => {

		const {name, value} = e.target;
		setFormData({ ...formData, [name]: value });

	}
  
  const handleSubmit = (e) => {
     e.preventDefault();
  }

   return(
       <>
		<div className="container-fluid mt-5 pt-3">
		<div className="container">
		<div className="row">
		<div className="col-lg-8">
		<div className="section-title mb-0">
		<h4 className="m-0 text-uppercase font-weight-bold">Contact Us For Any Queries</h4>
		</div>
		<div className="bg-white border border-top-0 p-4 mb-3">
		<div className="mb-4">
		<h6 className="text-uppercase font-weight-bold">Contact Info</h6>
		<p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
		<div className="mb-3">
		<div className="d-flex align-items-center mb-2">
		<i className="fa fa-map-marker-alt text-primary mr-2"></i>
		<h6 className="font-weight-bold mb-0">Our Office</h6>
		</div>
		<p className="m-0">123 Street, New York, USA</p>
		</div>
		<div className="mb-3">
		<div className="d-flex align-items-center mb-2">
		<i className="fa fa-envelope-open text-primary mr-2"></i>
		<h6 className="font-weight-bold mb-0">Email Us</h6>
		</div>
		<p className="m-0">info@example.com</p>
		</div>
		<div className="mb-3">
		<div className="d-flex align-items-center mb-2">
		<i className="fa fa-phone-alt text-primary mr-2"></i>
		<h6 className="font-weight-bold mb-0">Call Us</h6>
		</div>
		<p className="m-0">+012 345 6789</p>
		</div>
		</div>
		<h6 className="text-uppercase font-weight-bold mb-3">Contact Us</h6>
		<form onSubmit={handleSubmit}>
		<div className="form-row">
		<div className="col-md-6">
		<div className="form-group">
		<input 
		type="text" 
		class="form-control p-4" 
		placeholder="Your Name"
		name="name"
		value={formData.name}
		onChange={handleChange} 
		required="required"
		/>
		</div>
		</div>
		<div className="col-md-6">
		<div className="form-group">
		<input 
		type="email" 
		className="form-control p-4" 
		placeholder="Your Email" 
		name="email"
		value={formData.email}
		onChange={handleChange}
		required="required"/>
		</div>
		</div>
		</div>
		<div className="form-group">
		<input 
		type="text" 
		className="form-control p-4" 
		placeholder="Subject"
		name="subject"
		value={formData.subject}
		onChange={handleChange} 
		required="required"/>
		</div>
		<div className="form-group">
		<textarea 
		className="form-control" 
		rows="4" 
		placeholder="Message" 
		name="message"
		value={formData.message}
		onChange={handleChange}
		required="required"></textarea>
		</div>
		<div>
		<button className="btn btn-primary font-weight-semi-bold px-4" style={{height: '50px'}} type="submit">Send Message</button>
		</div>
		</form>
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
export default Contact;