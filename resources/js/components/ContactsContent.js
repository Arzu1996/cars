import React, { Component } from 'react';

export default class Content extends Component {
    render() {
        return (
        	<div id="content">
			<div className="content">
				<div className="breadcrumbs">
					<a href="#">Home</a>
					 <img src="/images/marker_2.gif" alt=""/>
					 <span>Contact Us</span>
				</div>
				<div className="main_wrapper">
					<h1><strong>Contact</strong> Us</h1>
					<div className="contacts_box">
						<div className="left">
							<h3><strong>Contact</strong> details</h3>
							<div className="addr detail">Berlin, Germany, nr. 250330,<br/>main street</div>
							<div className="phones detail">0040 742 016 756<br/>0040 742 016 756</div>
							<div className="email detail single_line"><a href="mailto:#" className="markered">office@autodealer.com</a></div>
							<div className="web detail single_line"><a href="#">http://www.autodealer.com</a></div>
						</div>
						<div className="map">
							<img src="/images/pics/map.jpg" alt=""/>
						// <iframe width="668" height="288" src="https://maps.google.com.ua/maps?f=q&amp;source=s_q&amp;hl=ruamp;hl=en&amp;geocode=&amp;q=%D0%9C%D0%B0%D0%BD%D1%85%D1%8D%D1%82%D1%82%D0%B5%D0%BD,+%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5+%D0%A8%D1%82%D0%B0%D1%82%D1%8B+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8&amp;aq=0&amp;oq=%D0%BC%D0%B0%D0%BD&amp;sll=46.933064,32.007997&amp;sspn=0.243347,0.676346&amp;ie=UTF8&amp;hq=&amp;hnear=%D0%9C%D0%B0%D0%BD%D1%85%D1%8D%D1%82%D1%82%D0%B5%D0%BD,+%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%9D%D1%8C%D1%8E+%D0%99%D0%BE%D1%80%D0%BA,+%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D1%91%D0%BD%D0%BD%D1%8B%D0%B5+%D0%A8%D1%82%D0%B0%D1%82%D1%8B+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8&amp;t=m&amp;ll=40.79042,-73.959961&amp;spn=0.14972,0.457993&amp;z=11&amp;iwloc=A&amp;output=embed"></iframe>
						</div>
					</div>
					<div className="contact_form">
						<h2><strong>Drop</strong> us a line</h2>
						<form method="get" action="#">
							<div className="fld_box">
								<label>Name: </label>
								<input type="text" value=""/>
							</div>
							<div className="fld_box center">
								<label>E-mail: </label>
								<input type="text" value=""/>
							</div>
							<div className="fld_box last">
								<label>Website: </label>
								<input type="text" value=""/>
							</div>
							<div className="clear"></div>
							<label>Message: </label>
							<textarea cols="20" rows="20"></textarea>
							<input type="submit" value="submit" className="submit"/>
						</form>
					</div>
					<div className="personal_box">
						<h2><strong>Sales</strong> reps</h2>
						<ul className="personal_list">
							<li>
								<img src="/images/placeholders/138x138.gif" alt="" className="thumb"/>
								<div className="inner">
									<h4>Jesica Thompson</h4>
									<div className="grey_area"><span>0040 742 016 756,</span><span>0040 742 016 756</span></div>
									<div className="fL">Location: Berlin, Germany</div>
									<div className="fR"><a href="mailto:#" className="markered">Contact via e-mail </a></div>
								</div>
							</li>
							<li className="last">
								<img src="/images/placeholders/138x138.gif" alt="" className="thumb"/>
								<div className="inner">
									<h4>Jesica Thompson</h4>
									<div className="grey_area"><span>0040 742 016 756,</span><span>0040 742 016 756</span></div>
									<div className="fL">Location: Berlin, Germany</div>
									<div className="fR"><a href="mailto:#" className="markered">Contact via e-mail </a></div>
								</div>
							</li>
							<li>
								<img src="/images/placeholders/138x138.gif" alt="" className="thumb"/>
								<div className="inner">
									<h4>Jesica Thompson</h4>
									<div className="grey_area"><span>0040 742 016 756,</span><span>0040 742 016 756</span></div>
									<div className="fL">Location: Berlin, Germany</div>
									<div className="fR"><a href="mailto:#" className="markered">Contact via e-mail </a></div>
								</div>
							</li>
							<li className="last">
								<img src="/images/placeholders/138x138.gif" alt="" className="thumb"/>
								<div className="inner">
									<h4>Jesica Thompson</h4>
									<div className="grey_area"><span>0040 742 016 756,</span><span>0040 742 016 756</span></div>
									<div className="fL">Location: Berlin, Germany</div>
									<div className="fR"><a href="mailto:#" className="markered">Contact via e-mail </a></div>
								</div>
							</li>
						</ul>
					</div>
				 </div>
			</div>
		</div>
        	);
    }
}