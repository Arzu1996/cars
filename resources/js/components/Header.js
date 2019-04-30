import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div id="header">
			<div className="top_info">
				<div className="logo">
					<a href="#">Car<span>enda.az</span></a>
				</div>
				<div className="header_contacts">
					<div className="phone">+994 (70) 832-80-72</div>
					<div>ESQRA şirkəti, Cəfər Cabbarlı 44, Caspian Plaza</div>
				</div>
				<div className="socials">
					<a href="#"> <img src="/images/fb_icon.png"/> </a>
					<a href="#"> <img src="/images/twitter_icon.png"/> </a>
					<a href="#"> <img src="/images/in_icon.png"/> </a>
				</div>
			</div>
			<div className="bg_navigation">
				<div className="navigation_wrapper">
					<div id="navigation">
						<span>Əsas</span>
						<ul>
							<li className="current"><a href="#">Əsas</a></li>
							<li><a href="#">Şirkət</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">Xəbər</a></li>
							<li><a href="#">Şirkətlərə</a></li>
							<li><a href="#">Əlaqə</a></li>
						</ul>
					</div>
					<div id="search_form">
						<form method="get" action="#">
							<input type="text" placeholder="Search on site" onFocus={(e) => e.target.placeholder = ""}  onBlur={(e) => e.target.placeholder = "Search on site"}  className="txb_search"/>
							<input type="submit" placeholder="A x t a r" className="btn_search"/>
						</form>
					</div>
				</div>
			</div>
		</div>
        );
    }
}