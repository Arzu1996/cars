import React, { Component } from 'react';

export default class Content extends Component {
    render() {
        return (
        	<div id="content">
			<div className="content">
				<div className="wrapper_1">
					<div className="slider_wrapper">
						<div className="home_slider">
							<div className="slider slider_1">
								<div className="slide">
									<img src="/images/placeholders/620x425.gif" alt=""/>
									<div className="description">
										<h2 className="title">2012 Mercedes-Benz CLS 320</h2>
										<p className="desc"><span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span></p>
										<div className="price">$ 32 200</div>
									</div>
								</div>
								<div className="slide">
									<img src="/images/placeholders/620x425.gif" alt=""/>
									<div className="description">
										<h2 className="title">2010 Mercedes-Benz Sport</h2>
										<p className="desc"><span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span></p>
										<div className="price">$ 32 200</div>
									</div>
								</div>
								<div className="slide">
									<img src="/images/placeholders/620x425.gif" alt=""/>
									<div className="description">
										<h2 className="title">2002 Subaru Impreza</h2>
										<p className="desc"><span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span></p>
										<div className="price">$ 32 200</div>
									</div>
								</div>
								<div className="slide">
									<img src="/images/placeholders/620x425.gif" alt=""/>
									<div className="description">
										<h2 className="title">2012 Cadillac LaBaron</h2>
										<p className="desc"><span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span></p>
										<div className="price">$ 32 200</div>
									</div>
								</div>
								<div className="slide">
									<img src="/images/placeholders/620x425.gif" alt=""/>
									<div className="description">
										<h2 className="title">2012 Ferrari Maranello 320</h2>
										<p className="desc"><span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span></p>
										<div className="price">$ 32 200</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="search_auto_wrapper">
						<div className="search_auto">
							<h3><strong>Maşın</strong> tap</h3>
							<div className="categories">
								<input type="radio" id="search_radio_1" checked="checked" name="category"/>
								<label for="search_radio_1" className="search_radio_1"></label>
								<input type="radio" id="search_radio_2" name="category"/>
								<label for="search_radio_2" className="search_radio_2"></label>
								<input type="radio" id="search_radio_3" name="category"/>
								<label for="search_radio_3" className="search_radio_3"></label>
								<input type="radio" id="search_radio_4" name="category"/>
								<label for="search_radio_4" className="search_radio_4"></label>
							</div>
							<div className="clear"></div>
							<label><strong>Marka:</strong></label>
							<div className="select_box_1">
								<select className="select_1">
									<option value="0">İstənilən</option>
									<option value="1">Audi</option>
									<option value="2">Mercedes-Benz</option>
									<option value="3">BMW</option>
									<option value="4">Lexus</option>
									<option value="5">Lincoln</option>
									<option value="6">Ford</option>
									<option value="7">Fiat</option>
									<option value="8">Dodge</option>
								</select>
							</div>
							<label><strong>Model:</strong></label>
							<div className="select_box_1">
								<select className="select_1">
									<option value="0">İstənilən</option>
									<option value="1">R8</option>
									<option value="2">S500</option>
									<option value="3">540i</option>
									<option value="4">RX300</option>
									<option value="5">Navigator</option>
									<option value="6">Taurus</option>
									<option value="7">Doblo</option>
									<option value="8">Viper</option>
								</select>
							</div>
							<label><strong>İl:</strong></label>
							<div className="select_box_2">
								<select className="select_2">
									<option value="0">dən</option>
									<option value="1">2013</option>
									<option value="2">2012</option>
									<option value="3">2011</option>
									<option value="4">2010</option>
									<option value="5">2009</option>
									<option value="6">2008</option>
									<option value="7">2007</option>
									<option value="8">2006</option>
								</select>
								<select className="select_2">
									<option value="0">dək</option>
									<option value="1">2013</option>
									<option value="2">2012</option>
									<option value="3">2011</option>
									<option value="4">2010</option>
									<option value="5">2009</option>
									<option value="6">2008</option>
									<option value="7">2007</option>
									<option value="8">2006</option>
								</select>
								<div className="clear"></div>
							</div>
							<label><strong>Qiymət:</strong></label>
							<div className="select_box_2">
								<select className="select_2">
									<option value="0">dən</option>
									<option value="1">1000</option>
									<option value="2">2000</option>
									<option value="3">3000</option>
									<option value="4">4000</option>
									<option value="5">5000</option>
									<option value="6">6000</option>
									<option value="7">7000</option>
									<option value="8">8000</option>
								</select>
								<select className="select_2">
									<option value="0">dək</option>
									<option value="1">1000</option>
									<option value="2">2000</option>
									<option value="3">3000</option>
									<option value="4">4000</option>
									<option value="5">5000</option>
									<option value="6">6000</option>
									<option value="7">7000</option>
									<option value="8">8000</option>
								</select>
								<div className="clear"></div>
							</div>
							<label><strong>Probeq:</strong></label>
							<div className="select_box_2">
								<select className="select_2">
									<option value="0">dən</option>
									<option value="1">1000</option>
									<option value="2">2000</option>
									<option value="3">3000</option>
									<option value="4">4000</option>
									<option value="5">5000</option>
									<option value="6">6000</option>
									<option value="7">7000</option>
									<option value="8">8000</option>
								</select>
								<select className="select_2">
									<option value="0">dək</option>
									<option value="1">1000</option>
									<option value="2">2000</option>
									<option value="3">3000</option>
									<option value="4">4000</option>
									<option value="5">5000</option>
									<option value="6">6000</option>
									<option value="7">7000</option>
									<option value="8">8000</option>
								</select>
								<div className="clear"></div>
							</div>
							<div className="chb_wrapper">
								<input type="checkbox"/>
								<label className="check_label">Yalnız yenilər</label>
							</div>
							<input type="submit" value="A X T A R" className="btn_search"/>
							<div className="clear"></div>
						</div>
					</div>
					<div className="clear"></div>
				</div>
				<div className="recent">
					<h2><strong>Az əvvəl</strong> baxdıqlarım</h2>
					<div className="recent_carousel">
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
						<div className="slide">
							<a href="#">
								<img src="/images/placeholders/220x164.gif" alt=""/>
								<div className="description">Registration 2010<br/>3.0 Diesel<br/>230 HP<br/>Body Coupe<br/>80 000 Miles</div>
								<div className="title">Mercedes-Benz <span className="price">$ 115 265</span></div>
							</a>
						</div>
					</div>
				</div>
				<div className="banners">
					<div className="banner_1 main_banner">
						<div className="text_wrapper">
							<p className="title"><strong>Looking</strong> for a car?</p>
							<p className="desc">1.000 new offers every day. 35.000 offers on site</p>
						</div>
						<a href="#">Search</a>
					</div>
					<div className="banner_2 main_banner">
						<div className="text_wrapper">
							<p className="title"><strong>Want</strong> to sell a car?</p>
							<p className="desc">200.000 visitors every day. Add your offer now!</p>
						</div>
						<a href="#">Sell</a>
					</div>
				</div>
				<div className="wrapper_2">
					<div className="left">
						<div className="recent_blog">
							<h2><strong>Recent</strong> from the blog</h2>
							<div className="post_block">
								<a href="#" className="thumb"><img src="/images/placeholders/180x135.gif" alt=""/></a>
								<h5><a href="#">THE IMPORTANCE OF LUXURY SUV SALES EXPLAINED</a></h5>
								<div className="date">November 1, 2012 </div>
								<div className="post"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... Aliquam hendrerit sagittis urna,</p></div>
							</div>
							<div className="post_block">
								<a href="#" className="thumb"><img src="/images/placeholders/180x135.gif" alt=""/></a>
								<h5><a href="#">THE IMPORTANCE OF LUXURY SUV SALES EXPLAINED</a></h5>
								<div className="date">November 1, 2012 </div>
								<div className="post"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... Aliquam hendrerit sagittis urna,</p></div>
							</div>
							<div className="post_block last">
								<a href="#" className="thumb"><img src="/images/placeholders/180x135.gif" alt=""/></a>
								<h5><a href="#">THE IMPORTANCE OF LUXURY SUV SALES EXPLAINED</a></h5>
								<div className="date">November 1, 2012 </div>
								<div className="post"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... Aliquam hendrerit sagittis urna,</p></div>
							</div>
							<div className="clear"></div>
						</div>
						<div className="tabs_wrapper home_tabs section">
						  	<ul className="tabs">
						    	<li className="current">Dealers</li>
						    	<li>Service Stations</li>
						    	<li>Insurance</li>
						 	</ul>
						 	<div className="box visible">
						 		<a href="#" className="all">Show all...</a>
						   		<div className="results">Found 433 dealers</div>
						   		<div className="clear"></div>
						   		<div className="tabs_carousel">
						   			<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">St. Louis Auto Dealers</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Executive Cars Group</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Rim Wear</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Dj Cruz’s Auto Sales</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">St. Louis Auto Dealers</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Executive Cars Group</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Rim Wear</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Dj Cruz’s Auto Sales</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">St. Louis Auto Dealers</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Executive Cars Group</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Rim Wear</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Dj Cruz’s Auto Sales</a>
									</div>
								</div>
						  	</div>
						  	<div className="box">
						    	<a href="#" className="all">Show all...</a>
						   		<div className="results">Found 50 stations</div>
						   		<div className="clear"></div>
						   		<div className="tabs_carousel">
						   			<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">St. Louis Auto Dealers</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Executive Cars Group</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Rim Wear</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Dj Cruz’s Auto Sales</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">St. Louis Auto Dealers</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Executive Cars Group</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Rim Wear</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Dj Cruz’s Auto Sales</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">St. Louis Auto Dealers</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Executive Cars Group</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Rim Wear</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Dj Cruz’s Auto Sales</a>
									</div>
								</div>
						  	</div>
						  	<div className="box">
						    	<a href="#" className="all">Show all...</a>
						   		<div className="results">Found 10 incurances</div>
						   		<div className="clear"></div>
						   		<div className="tabs_carousel">
						   			<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">St. Louis Auto Dealers</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Executive Cars Group</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Rim Wear</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Dj Cruz’s Auto Sales</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">St. Louis Auto Dealers</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Executive Cars Group</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Rim Wear</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Dj Cruz’s Auto Sales</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">St. Louis Auto Dealers</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Executive Cars Group</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Rim Wear</a>
									</div>
									<div className="slide">
										<a href="#" className="img"><img src="/images/placeholders/150x110.gif" alt=""/></a>
										<a href="#" className="title">Dj Cruz’s Auto Sales</a>
									</div>
								</div>
						  	</div>
						</div>
						<div className="video_box">
							<h2><strong>Video</strong> reviews</h2>
							<div className="post_block">
								<div className="preview">
									<a href="http://player.vimeo.com/video/54510052">
										<img src="/images/placeholders/180x115.gif" alt=""/>
										<span className="hover"></span>
										<img src="/images/video_play.png" alt="" className="video_play"/>
									</a>
								</div>
								<h5><a href="#">THE IMPORTANCE OF LUXURY SUV SALES EXPLAINED</a></h5>
								<div className="post"><p>10 min 31 sec (12,4 Mb)</p></div>
							</div>
							<div className="post_block">
								<div className="preview">
									<a href="http://player.vimeo.com/video/13412780">
										<img src="/images/placeholders/180x115.gif" alt=""/>
										<span className="hover"></span>
										<img src="/images/video_play.png" alt="" className="video_play"/>
									</a>
								</div>
								<h5><a href="#">THE IMPORTANCE OF LUXURY SUV SALES EXPLAINED</a></h5>
								<div className="post"><p>10 min 31 sec (12,4 Mb)</p></div>
							</div>
							<div className="post_block last">
								<div className="preview">
									<a href="http://player.vimeo.com/video/22884674">
										<img src="/images/placeholders/180x115.gif" alt=""/>
										<span className="hover"></span>
										<img src="/images/video_play.png" alt="" className="video_play"/>
									</a>
								</div>
								<h5><a href="#">THE IMPORTANCE OF LUXURY SUV SALES EXPLAINED</a></h5>
								<div className="post"><p>10 min 31 sec (12,4 Mb)</p></div>
							</div>
							<div className="clear"></div>
						</div>
					</div>
					<div className="right">
						<div className="news_wrapper">
							<div className="news">
								<h2><strong>Auto</strong> news</h2>
								<div className="news_box">
									<a href="#" className="thumb">
										<img src="/images/placeholders/180x135.gif" alt=""/>
									</a>
									<h5><a href="#">UNOFFICIAL PORSCHE 918 SPYDER PRICING POPS UP</a></h5>
									<div className="date">November 1, 2012 </div>
									<div className="post">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
									</div>
								</div>
								<div className="news_box bottom">
									<a href="#" className="thumb">
										<img src="/images/placeholders/180x135.gif" alt=""/>
									</a>
									<h5><a href="#">UNOFFICIAL PORSCHE 918 SPYDER PRICING POPS UP</a></h5>
									<div className="date">November 1, 2012 </div>
									<div className="post">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
									</div>
								</div>
								<div className="all_wrapper"><a href="#" className="all_news">All news</a></div>
							</div>
						</div>
						<div className="banners_wrapper">
							<div className="get_news_box">
								<h3><strong>Get</strong> daily news</h3>
								<form method="get" action="#">
									<input type="text" onblur="if(this.value=='') this.value='Enter your email';" onfocus="if(this.value=='Enter your email') this.value='';" value="Enter your email" className="txb"/>
									<input type="submit" value="subscribe" className="btn_subscribe"/>
								</form>
							</div>
							<div className="side_banners">
								<a href="#"><img src="/images/banners/banner.jpg" alt=""/></a>
							</div>
						</div>
					</div>
					<div className="clear"></div>
				</div>
			</div>
		</div>


        	);
    }
}