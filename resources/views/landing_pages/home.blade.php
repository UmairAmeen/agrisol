@extends('layouts.app')
  
@section('content')
<div id="jumbotron-fullwidth" class="jumbotron carousel slide carousel-slide carousel-touch" data-ride="carousel" data-interval="8000" data-pause="null">
        <div class="carousel-inner">
          <a class="carousel-control left" href="#jumbotron-fullwidth" role="button" aria-label="Previous" data-slide="prev">
            <i class="fas fa-caret-left"></i>
          </a>
          <a class="carousel-control right" href="#jumbotron-fullwidth" role="button" aria-label="Next" data-slide="next">
            <i class="fas fa-caret-right"></i>
          </a>
          <div class="item slide-id-1 active">
            <div class="slide-image">
              <img width="1920" height="729" src="{{asset('themes/landing-pages/assets/images/slide_img_1.jpg')}}" class="attachment-thelandscaper-home-slider-l size-thelandscaper-home-slider-l" alt="Your lawn and landscape
the way it should be" decoding="async" loading="eager" srcset="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_1.jpg 1920w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_1-300x114.jpg 300w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_1-1024x389.jpg 1024w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_1-1536x583.jpg 1536w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_1-600x228.jpg 600w" sizes="100vw" fetchpriority="high" />
            </div>
            <div class="container">
              <div class="carousel-text center">
                <span class="carousel-topheading">Quality that is guaranteed</span>
                <div class="carousel-heading">
                  <h1 class="carousel-heading-tag">Your lawn and landscape <br /> the way it should be </h1>
                </div>
                <div class="carousel-content">
                  <a href="{{route('about-us')}}" class="btn btn-primary">More about us</a>
                  <a href="{{route('contact-us')}}" class="btn btn-outline">Get in touch</a>
                </div>
              </div>
            </div>
          </div>
          <div class="item slide-id-2">
            <div class="slide-image">
              <img width="1920" height="730" src="{{asset('themes/landing-pages/assets/images/slide_img_2.jpg')}}" class="attachment-thelandscaper-home-slider-l size-thelandscaper-home-slider-l" alt="We provide landscaping
services since 1978" decoding="async" loading="eager" srcset="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_2.jpg 1920w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_2-300x114.jpg 300w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_2-1024x389.jpg 1024w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_2-1536x584.jpg 1536w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_2-600x228.jpg 600w" sizes="100vw" />
            </div>
            <div class="container">
              <div class="carousel-text center">
                <span class="carousel-topheading">Lets talk about your ideas</span>
                <div class="carousel-heading">
                  <h2 class="carousel-heading-tag">We provide landscaping <br /> services since 1978 </h2>
                </div>
                <div class="carousel-content">
                  <a href="{{route('home.services')}}" class="btn btn-primary">See our Services</a>
                  <a href="{{route('contact-us')}}" class="btn btn-outline">Get in Touch</a>
                </div>
              </div>
            </div>
          </div>
          <div class="item slide-id-3">
            <div class="slide-image">
              <img width="1920" height="730" src="{{asset('themes/landing-pages/assets/images/slide_img_3.jpg')}}" class="attachment-thelandscaper-home-slider-l size-thelandscaper-home-slider-l" alt="The grass is always greener on
your side of the fence" decoding="async" loading="eager" srcset="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_3jpg.jpg 1920w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_3jpg-300x114.jpg 300w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_3jpg-1024x389.jpg 1024w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_3jpg-1536x584.jpg 1536w, https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2021/02/slide_img_3jpg-600x228.jpg 600w" sizes="100vw" />
            </div>
            <div class="container">
              <div class="carousel-text center">
                <span class="carousel-topheading">Exceptional Lawn Care</span>
                <div class="carousel-heading">
                  <h2 class="carousel-heading-tag">The grass is always greener on <br /> your side of the fence </h2>
                </div>
                <div class="carousel-content">
                  <a href="{{route('home.galleries')}}" class="btn btn-primary">See our Gallery</a>
                  <a href="{{route('contact-us')}}" class="btn btn-outline">Get in Touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div class="content">
        <div class="container">
          <div id="pl-11" class="panel-layout">






            <div id="pg-11-0" class="panel-grid panel-no-style">
              <div id="pgc-11-0-0" class="panel-grid-cell">
                <div id="panel-11-0-0-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child panel-last-child" data-index="0">
                  <div class="border-box panel-widget-style panel-widget-style-for-11-0-0-0">
                    <h3 class="widget-title">
                      <span class="light">Exceptional</span> Services We Offer
                    </h3>
                    <div class="textwidget">
                      <p>We provide exceptional landscaping services to a wide range of commercial and residential properties for over 35 years, including large corporate environments, city parks, shopping malls and appartments. Our experienced landscapers set the standard each day in landscape design, paving, hardscaping. We will whip your yard into shape in no time.</p>
                      <p>
                        <a class="more" href="{{route('home.services')}}">SEE ALL SERVICES</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="pgc-11-0-1" class="panel-grid-cell">
                <div id="panel-11-0-1-0" class="so-panel widget widget_qt_feature_page widget-featured-page panel-first-child panel-last-child" data-index="1">
                  <div class="post-item page">
                    <a href="{{route('engineering-designs')}}" class="post-item-image">
                      <img width="360" height="240" src="{{asset('themes/landing-pages/assets/images/trimming_hedge-360x240.jpg')}}" class="attachment-thelandscaper-featured-thumb size-thelandscaper-featured-thumb" alt="Theme Image" decoding="async" srcset="" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" />
                      <div class="overlay">
                        <div class="vertical-center">
                          <span>Find out more</span>
                        </div>
                      </div>
                    </a>
                    <h5 class="title">
                      <a href="{{route('engineering-designs')}}">Engineering Designs</a>
                    </h5>
                    <p>We understand that your property is a big investment and we want our customers to know that we are there for them to help them accomplish the dreams that they may have for there property.&hellip;</p>
                    <a href="{{route('engineering-designs')}}" class="more">Find out more</a>
                  </div>
                </div>
              </div>
              <div id="pgc-11-0-2" class="panel-grid-cell">
                <div id="panel-11-0-2-0" class="so-panel widget widget_qt_feature_page widget-featured-page panel-first-child panel-last-child" data-index="2">
                  <div class="post-item page">
                    <a href="{{route('consultancy')}}" class="post-item-image">
                      <img width="360" height="240" src="{{asset('themes/landing-pages/assets/images/tree_removal-360x240.jpg')}}" class="attachment-thelandscaper-featured-thumb size-thelandscaper-featured-thumb" alt="Theme Image" decoding="async" srcset="" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" />
                      <div class="overlay">
                        <div class="vertical-center">
                          <span>Find out more</span>
                        </div>
                      </div>
                    </a>
                    <h5 class="title">
                      <a href="{{route('consultancy')}}">Consultancy</a>
                    </h5>
                    <p>While tree removal is the choice of last resort, it is sometimes most necessary. Sick trees, trees that uproot sidewalks, cause cracks in the foundation, disrupt sewer lines, have sustained&hellip;</p>
                    <a href="{{route('consultancy')}}" class="more">Find out more</a>
                  </div>
                </div>
              </div>
              <div id="pgc-11-0-3" class="panel-grid-cell">
                <div id="panel-11-0-3-0" class="so-panel widget widget_qt_feature_page widget-featured-page panel-first-child panel-last-child" data-index="3">
                  <div class="post-item page">
                    <a href="{{route('professional-development-course-training')}}" class="post-item-image">
                      <img width="360" height="240" src="{{asset('themes/landing-pages/assets/images/irrigation-360x240.jpg')}}" class="attachment-thelandscaper-featured-thumb size-thelandscaper-featured-thumb" alt="Theme Image" decoding="async" srcset="" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" />
                      <div class="overlay">
                        <div class="vertical-center">
                          <span>Find out more</span>
                        </div>
                      </div>
                    </a>
                    <h5 class="title">
                      <a href="{{route('professional-development-course-training')}}">Professional Development Courses Training</a>
                    </h5>
                    <p>Watering your lawn and is the key to preserving its lushness and beauty. Whether you are looking for a brand new irrigation system to maintain your lawn or the replacement of a sprinkler&hellip;</p>
                    <a href="{{route('professional-development-course-training')}}" class="more">Find out more</a>
                  </div>
                </div>
              </div>
            </div>




            <div id="pg-11-1" class="panel-grid panel-has-style">
              <div class="siteorigin-panels-stretch panel-row-style panel-row-style-for-11-1" data-stretch-type="full">
                <div id="pgc-11-1-0" class="panel-grid-cell">
                  <div id="panel-11-1-0-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child" data-index="4">
                    <div class="text-center white no-border test panel-widget-style panel-widget-style-for-11-1-0-0">
                      <h3 class="widget-title">
                        <span class="light">Project</span> Galleries
                      </h3>
                      <div class="textwidget">
                        <p>
                          <span style="color: #777777;">With so many years of experience in the business, our company is your</span>
                          <br />
                          <span style="color: #777777;"> source for the highest quality and landscaping service.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="panel-11-1-0-1" class="so-panel widget widget_ess-grid-widget widget_ess_grid panel-last-child" data-index="5">
                   
                    <article class="myportfolio-container esg-grid-wrap-container the-landscaper-home esg-entry-skin-the-landscaper-home source_type_post" id="esg-grid-4-1-wrap" data-alias="gallery_homepage">
                      <div id="esg-grid-4-1" class="esg-grid" style="background: transparent;padding: 0px 0px 0px 0px ; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; display:none">
                        <ul>
                          <li id="eg-4-post-id-636_3260" data-skin="the-landscaper-home" class="filterall filter-garden filter-terrace eg-the-landscaper-home-wrapper eg-post-id-636" data-date="1615900205">
                            <div class="esg-media-cover-wrapper">
                              <div class="esg-entry-media">
                                <img src="{{asset('themes/landing-pages/assets/images/300x200transparent.png')}}" data-lazythumb="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/garden-4-e-360x240-25x25.jpg" data-no-lazy="1" data-lazysrc="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/garden-4-e-360x240.jpg" alt="Theme Image" width="360" height="240">
                              </div>
                              <div class="esg-entry-cover">
                                <div class="esg-overlay esg-transition eg-the-landscaper-home-container" data-delay="0" data-duration="default" data-transition="esg-fade"></div>
                                <div class="esg-center eg-post-636 eg-the-landscaper-home-element-2-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-slidedown">
                                  <a class="eg-the-landscaper-home-element-2 eg-post-636" href="#" target="_self">View Gallery</a>
                                </div>
                              </div>
                              <div class="esg-entry-content eg-the-landscaper-home-content">
                                <p class="esg-content eg-post-636 eg-the-landscaper-home-element-4-a">
                                  <a class="eg-the-landscaper-home-element-4 eg-post-636" href="#" target="_self">Garden,Terrace</a>
                                </p>
                                <div class="esg-content eg-post-636 eg-the-landscaper-home-element-0-a">
                                  <a class="eg-the-landscaper-home-element-0 eg-post-636" href="#" target="_self">Modern Garden</a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="eg-4-post-id-638_198" data-skin="the-landscaper-home" class="filterall filter-garden eg-the-landscaper-home-wrapper eg-post-id-638" data-date="1615902793">
                            <div class="esg-media-cover-wrapper">
                              <div class="esg-entry-media">
                                <img src="{{asset('themes/landing-pages/assets/images/300x200transparent.png')}}" data-lazythumb="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/garden-7-e-360x240-25x25.jpg" data-no-lazy="1" data-lazysrc="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/garden-7-e-360x240.jpg" alt="Theme Image" width="360" height="240">
                              </div>
                              <div class="esg-entry-cover">
                                <div class="esg-overlay esg-transition eg-the-landscaper-home-container" data-delay="0" data-duration="default" data-transition="esg-fade"></div>
                                <div class="esg-center eg-post-638 eg-the-landscaper-home-element-2-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-slidedown">
                                  <a class="eg-the-landscaper-home-element-2 eg-post-638" href="#" target="_self">View Gallery</a>
                                </div>
                              </div>
                              <div class="esg-entry-content eg-the-landscaper-home-content">
                                <p class="esg-content eg-post-638 eg-the-landscaper-home-element-4-a">
                                  <a class="eg-the-landscaper-home-element-4 eg-post-638" href="#" target="_self">Garden</a>
                                </p>
                                <div class="esg-content eg-post-638 eg-the-landscaper-home-element-0-a">
                                  <a class="eg-the-landscaper-home-element-0 eg-post-638" href="#" target="_self">Wooden Decks</a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="eg-4-post-id-640_3760" data-skin="the-landscaper-home" class="filterall filter-terrace eg-the-landscaper-home-wrapper eg-post-id-640" data-date="1615902964">
                            <div class="esg-media-cover-wrapper">
                              <div class="esg-entry-media">
                                <img src="{{asset('themes/landing-pages/assets/images/300x200transparent.png')}}" data-lazythumb="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/terrace-2-e-360x240-25x25.jpg" data-no-lazy="1" data-lazysrc="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/terrace-2-e-360x240.jpg" alt="Theme Image" width="360" height="240">
                              </div>
                              <div class="esg-entry-cover">
                                <div class="esg-overlay esg-transition eg-the-landscaper-home-container" data-delay="0" data-duration="default" data-transition="esg-fade"></div>
                                <div class="esg-center eg-post-640 eg-the-landscaper-home-element-2-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-slidedown">
                                  <a class="eg-the-landscaper-home-element-2 eg-post-640" href="#" target="_self">View Gallery</a>
                                </div>
                              </div>
                              <div class="esg-entry-content eg-the-landscaper-home-content">
                                <p class="esg-content eg-post-640 eg-the-landscaper-home-element-4-a">
                                  <a class="eg-the-landscaper-home-element-4 eg-post-640" href="#" target="_self">Terrace</a>
                                </p>
                                <div class="esg-content eg-post-640 eg-the-landscaper-home-element-0-a">
                                  <a class="eg-the-landscaper-home-element-0 eg-post-640" href="#" target="_self">Bistro Terrace</a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="eg-4-post-id-2657_3394" data-skin="the-landscaper-home" class="filterall filter-patio eg-the-landscaper-home-wrapper eg-post-id-2657" data-date="1615915623">
                            <div class="esg-media-cover-wrapper">
                              <div class="esg-entry-media">
                                <img src="{{asset('themes/landing-pages/assets/images/300x200transparent.png')}}" data-lazythumb="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/06/patio-4-e-360x240-25x25.jpg" data-no-lazy="1" data-lazysrc="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/06/patio-4-e-360x240.jpg" alt="Theme Image" width="360" height="240">
                              </div>
                              <div class="esg-entry-cover">
                                <div class="esg-overlay esg-transition eg-the-landscaper-home-container" data-delay="0" data-duration="default" data-transition="esg-fade"></div>
                                <div class="esg-center eg-post-2657 eg-the-landscaper-home-element-2-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-slidedown">
                                  <a class="eg-the-landscaper-home-element-2 eg-post-2657" href="#" target="_self">View Gallery</a>
                                </div>
                              </div>
                              <div class="esg-entry-content eg-the-landscaper-home-content">
                                <p class="esg-content eg-post-2657 eg-the-landscaper-home-element-4-a">
                                  <a class="eg-the-landscaper-home-element-4 eg-post-2657" href="#" target="_self">Patio</a>
                                </p>
                                <div class="esg-content eg-post-2657 eg-the-landscaper-home-element-0-a">
                                  <a class="eg-the-landscaper-home-element-0 eg-post-2657" href="#" target="_self">Walkout Patio</a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="eg-4-post-id-642_3097" data-skin="the-landscaper-home" class="filterall filter-patio filter-pond eg-the-landscaper-home-wrapper eg-post-id-642" data-date="1615989505">
                            <div class="esg-media-cover-wrapper">
                              <div class="esg-entry-media">
                                <img src="{{asset('themes/landing-pages/assets/images/300x200transparent.png')}}" data-lazythumb="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/garden-pond-m-360x240-25x25.jpg" data-no-lazy="1" data-lazysrc="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/garden-pond-m-360x240.jpg" alt="Theme Image" width="360" height="240">
                              </div>
                              <div class="esg-entry-cover">
                                <div class="esg-overlay esg-transition eg-the-landscaper-home-container" data-delay="0" data-duration="default" data-transition="esg-fade"></div>
                                <div class="esg-center eg-post-642 eg-the-landscaper-home-element-2-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-slidedown">
                                  <a class="eg-the-landscaper-home-element-2 eg-post-642" href="#" target="_self">View Gallery</a>
                                </div>
                              </div>
                              <div class="esg-entry-content eg-the-landscaper-home-content">
                                <p class="esg-content eg-post-642 eg-the-landscaper-home-element-4-a">
                                  <a class="eg-the-landscaper-home-element-4 eg-post-642" href="#" target="_self">Patio,Pond</a>
                                </p>
                                <div class="esg-content eg-post-642 eg-the-landscaper-home-element-0-a">
                                  <a class="eg-the-landscaper-home-element-0 eg-post-642" href="#" target="_self">Garden Pond</a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="eg-4-post-id-644_7008" data-skin="the-landscaper-home" class="filterall filter-patio eg-the-landscaper-home-wrapper eg-post-id-644" data-date="1615990062">
                            <div class="esg-media-cover-wrapper">
                              <div class="esg-entry-media">
                                <img src="{{asset('themes/landing-pages/assets/images/300x200transparent.png')}}" data-lazythumb="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/patio-2-e-360x240-25x25.jpg" data-no-lazy="1" data-lazysrc="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/patio-2-e-360x240.jpg" alt="Theme Image" width="360" height="240">
                              </div>
                              <div class="esg-entry-cover">
                                <div class="esg-overlay esg-transition eg-the-landscaper-home-container" data-delay="0" data-duration="default" data-transition="esg-fade"></div>
                                <div class="esg-center eg-post-644 eg-the-landscaper-home-element-2-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-slidedown">
                                  <a class="eg-the-landscaper-home-element-2 eg-post-644" href="#" target="_self">View Gallery</a>
                                </div>
                              </div>
                              <div class="esg-entry-content eg-the-landscaper-home-content">
                                <p class="esg-content eg-post-644 eg-the-landscaper-home-element-4-a">
                                  <a class="eg-the-landscaper-home-element-4 eg-post-644" href="#" target="_self">Patio</a>
                                </p>
                                <div class="esg-content eg-post-644 eg-the-landscaper-home-element-0-a">
                                  <a class="eg-the-landscaper-home-element-0 eg-post-644" href="#" target="_self">Modern Patio</a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="eg-4-post-id-648_1542" data-skin="the-landscaper-home" class="filterall filter-pond eg-the-landscaper-home-wrapper eg-post-id-648" data-date="1615990997">
                            <div class="esg-media-cover-wrapper">
                              <div class="esg-entry-media">
                                <img src="{{asset('themes/landing-pages/assets/images/300x200transparent.png')}}" data-lazythumb="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/06/garden-pond-3-e-360x240-25x25.jpg" data-no-lazy="1" data-lazysrc="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/06/garden-pond-3-e-360x240.jpg" alt="Theme Image" width="360" height="240">
                              </div>
                              <div class="esg-entry-cover">
                                <div class="esg-overlay esg-transition eg-the-landscaper-home-container" data-delay="0" data-duration="default" data-transition="esg-fade"></div>
                                <div class="esg-center eg-post-648 eg-the-landscaper-home-element-2-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-slidedown">
                                  <a class="eg-the-landscaper-home-element-2 eg-post-648" href="#" target="_self">View Gallery</a>
                                </div>
                              </div>
                              <div class="esg-entry-content eg-the-landscaper-home-content">
                                <p class="esg-content eg-post-648 eg-the-landscaper-home-element-4-a">
                                  <a class="eg-the-landscaper-home-element-4 eg-post-648" href="#" target="_self">Pond</a>
                                </p>
                                <div class="esg-content eg-post-648 eg-the-landscaper-home-element-0-a">
                                  <a class="eg-the-landscaper-home-element-0 eg-post-648" href="#" target="_self">Town Pond</a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="eg-4-post-id-650_1313" data-skin="the-landscaper-home" class="filterall filter-garden eg-the-landscaper-home-wrapper eg-post-id-650" data-date="1615991135">
                            <div class="esg-media-cover-wrapper">
                              <div class="esg-entry-media">
                                <img src="{{asset('themes/landing-pages/assets/images/300x200transparent.png')}}" data-lazythumb="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/garden-m-360x240-25x25.jpg" data-no-lazy="1" data-lazysrc="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/05/garden-m-360x240.jpg" alt="Theme Image" width="360" height="240">
                              </div>
                              <div class="esg-entry-cover">
                                <div class="esg-overlay esg-transition eg-the-landscaper-home-container" data-delay="0" data-duration="default" data-transition="esg-fade"></div>
                                <div class="esg-center eg-post-650 eg-the-landscaper-home-element-2-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-slidedown">
                                  <a class="eg-the-landscaper-home-element-2 eg-post-650" href="#" target="_self">View Gallery</a>
                                </div>
                              </div>
                              <div class="esg-entry-content eg-the-landscaper-home-content">
                                <p class="esg-content eg-post-650 eg-the-landscaper-home-element-4-a">
                                  <a class="eg-the-landscaper-home-element-4 eg-post-650" href="#" target="_self">Garden</a>
                                </p>
                                <div class="esg-content eg-post-650 eg-the-landscaper-home-element-0-a">
                                  <a class="eg-the-landscaper-home-element-0 eg-post-650" href="#" target="_self">Mediterrán Garden</a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <article class="esg-filters esg-singlefilters" style="margin-top: 20px; text-align: center; ">
                          <div class="esg-navigationbutton esg-left  esg-fgc-4" style="margin-left: 0.25px !important; margin-right: 0.25px !important; display: none;">
                            <i class="eg-icon-left-open"></i>
                          </div>
                          <div class="esg-navigationbutton esg-right  esg-fgc-4" style="margin-left: 0.25px !important; margin-right: 0.25px !important; display: none;">
                            <i class="eg-icon-right-open"></i>
                          </div>
                        </article>
                        <div class="esg-clear-no-height"></div>
                      </div>
                    </article>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
            </div>





            <div id="pg-11-2" class="panel-grid panel-no-style">
              <div id="pgc-11-2-0" class="panel-grid-cell">
                <div id="panel-11-2-0-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child panel-last-child" data-index="6">
                  <h3 class="widget-title">
                    <span class="light">About</span> Our Company
                  </h3>
                  <div class="textwidget">
                    <p>The Landscaper is a full-service landscaping company with a straightforward and unique design/build philosophy. We believe in having one landscape designer handle the job from its conception on paper, to the realization on your property. The reason; by doing this you are able to communicate and work with a single individual, where you can share your thoughts and idea's with to bring them, in collaboration, to life.</p>
                    <p>The Landscaper is made up of a group of highly skilled landscaping professionals who pays a lot of attention to small details. In the 30+ years of experience our staff keep your property looking and functioning beautifully. Our landscapers are fully licensed</p>
                    <p>The reason; by doing this you are able to communicate and work with a single individual, where you can share your thoughts and idea's with to bring them, in collaboration...</p>
                    <p>
                      <a class="more" href="#">MORE ABOUT US</a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="pgc-11-2-1" class="panel-grid-cell">
                <div id="panel-11-2-1-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child panel-last-child" data-index="7">
                  <div class="content-box text-center panel-widget-style panel-widget-style-for-11-2-1-0">
                    <h3 class="widget-title">
                      <span class="light">Request</span> An Estimate
                    </h3>
                    <div class="textwidget">
                      <div class="wpcf7 no-js" id="wpcf7-f3275-p11-o1" lang="en-US" dir="ltr">
                        <div class="screen-reader-response">
                          <p role="status" aria-live="polite" aria-atomic="true"></p>
                          <ul></ul>
                        </div>
                        <form action="https://demos.qreativethemes.com/thelandscaper/#wpcf7-f3275-p11-o1" method="post" class="wpcf7-form init demo" aria-label="Contact form" novalidate="novalidate" data-status="init">
                          <div style="display: none;">
                            <input type="hidden" name="_wpcf7" value="3275" />
                            <input type="hidden" name="_wpcf7_version" value="5.8" />
                            <input type="hidden" name="_wpcf7_locale" value="en_US" />
                            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f3275-p11-o1" />
                            <input type="hidden" name="_wpcf7_container_post" value="11" />
                            <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                          </div>
                          <div class="request-quote-form">
                            <div class="row">
                              <div class="col-xs-12 col-md-6">
                                <p>
                                  <span class="wpcf7-form-control-wrap" data-name="your-name">
                                    <input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Name" value="" type="text" name="your-name" />
                                  </span>
                                  <span class="wpcf7-form-control-wrap" data-name="your-email">
                                    <input size="40" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your Email" value="" type="email" name="your-email" />
                                  </span>
                                  <span class="wpcf7-form-control-wrap" data-name="service">
                                    <select class="wpcf7-form-control wpcf7-select" aria-invalid="false" name="service">
                                      <option value="Landscape Maintenance">Landscape Maintenance</option>
                                      <option value="Enhancements Services">Enhancements Services</option>
                                      <option value="Irrigation Service">Irrigation Service</option>
                                      <option value="Snow Removal">Snow Removal</option>
                                      <option value="Other Services">Other Services</option>
                                    </select>
                                  </span>
                                </p>
                              </div>
                              <div class="col-xs-12 col-md-6">
                                <p>
                                  <span class="wpcf7-form-control-wrap" data-name="your-message">
                                    <textarea cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your Message" name="your-message"></textarea>
                                  </span>
                                </p>
                              </div>
                              <div class="col-xs-12">
                                <p>
                                  <input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Request a Quote" />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="wpcf7-response-output" aria-hidden="true"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>






            <div id="pg-11-3" class="panel-grid panel-no-style">
              <div id="pgc-11-3-0" class="panel-grid-cell">
                <div id="panel-11-3-0-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child panel-last-child" data-index="8">
                  <div class="no-border panel-widget-style panel-widget-style-for-11-3-0-0">
                    <h3 class="widget-title">
                      <span class="light">Why</span> Choose Us?
                    </h3>
                    <div class="textwidget"></div>
                  </div>
                </div>
              </div>
            </div>





            <div id="pg-11-4" class="panel-grid panel-no-style">
              <div id="pgc-11-4-0" class="panel-grid-cell">
                <div id="panel-11-4-0-0" class="so-panel widget widget_qt_icon_box widget-icon-box panel-first-child" data-index="9">
                  <a class="icon-box icon-small" href="#">
                    <i class="fa fas fa-leaf"></i>
                    <h6 class="title">Specialized Company</h6>
                    <span class="subtitle">We are a landscaping company specialize in residential and commercial landscaping</span>
                  </a>
                </div>
                <div id="panel-11-4-0-1" class="so-panel widget widget_qt_icon_box widget-icon-box panel-last-child" data-index="10">
                  <div class="icon-box icon-small">
                    <i class="fa far fa-calendar-alt"></i>
                    <h6 class="title">Day Scheduling</h6>
                    <span class="subtitle">We schedule regular appointments to visit your property on the same day and time of the week</span>
                  </div>
                </div>
              </div>
              <div id="pgc-11-4-1" class="panel-grid-cell">
                <div id="panel-11-4-1-0" class="so-panel widget widget_qt_icon_box widget-icon-box panel-first-child" data-index="11">
                  <div class="icon-box icon-small">
                    <i class="fa far fa-check-circle"></i>
                    <h6 class="title">Licensed &amp; Insured</h6>
                    <span class="subtitle">All our landscapers are fully licensed, bonded and insured for their safety</span>
                  </div>
                </div>
                <div id="panel-11-4-1-1" class="so-panel widget widget_qt_icon_box widget-icon-box panel-last-child" data-index="12">
                  <div class="icon-box icon-small">
                    <i class="fa far fa-comments"></i>
                    <h6 class="title">Free Consultations</h6>
                    <span class="subtitle">We offer free consultations for our services, and will provide you with an actual quote</span>
                  </div>
                </div>
              </div>
              <div id="pgc-11-4-2" class="panel-grid-cell">
                <div id="panel-11-4-2-0" class="so-panel widget widget_qt_icon_box widget-icon-box panel-first-child" data-index="13">
                  <div class="icon-box icon-small">
                    <i class="fa fas fa-tachometer-alt"></i>
                    <h6 class="title">Dependable Services</h6>
                    <span class="subtitle">We love to take pride in the work we do. Each project is finished in time and budget</span>
                  </div>
                </div>
                <div id="panel-11-4-2-1" class="so-panel widget widget_qt_icon_box widget-icon-box panel-last-child" data-index="14">
                  <a class="icon-box icon-small" href="#">
                    <i class="fa fas fa-trophy"></i>
                    <h6 class="title">Reputable Company</h6>
                    <span class="subtitle">Operating for more than 30 years, earning a reputation for service and beautiful work</span>
                  </a>
                </div>
              </div>
            </div>






            <div id="pg-11-5" class="panel-grid panel-has-style">
              <div class="custom-font siteorigin-panels-stretch panel-row-style panel-row-style-for-11-5" data-stretch-type="full">
                <div id="pgc-11-5-0" class="panel-grid-cell">
                  <div id="panel-11-5-0-0" class="so-panel widget widget_qt_cta_banner widget-cta-banner panel-first-child panel-last-child" data-index="15">
                    <div class="cta-banner cta-block">
                      <div class="cta-banner-text">
                        <div class="cta-banner-title" style="color: #ffffff;">Are you tired of spending hours mowing your lawn every weekend? <br>Take back your free time by having us take care of your garden </div>
                      </div>
                      <div class="cta-banner-buttons">
                        <a href="#" class="btn btn-outline" target="_self">See all Services</a>
                        <a href="#" class="btn btn-outline" target="_self">Send a Message</a>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>






            <div id="pg-11-6" class="panel-grid panel-has-style">
              <div class="siteorigin-panels-stretch panel-row-style panel-row-style-for-11-6" data-stretch-type="full">
                <div id="pgc-11-6-0" class="panel-grid-cell">
                  <div id="panel-11-6-0-0" class="so-panel widget widget_qt_recent_posts_block widget_post_block panel-first-child panel-last-child" data-index="16">
                    <div class="block-posts">
                      <h3 class="widget-title">
                        <span class="light">Latest</span> News <a href="#" class="more">More News</a>
                      </h3>
                      <div class="row">
                        <div class="col-xs-12 col-sm-4 col-md-4">
                          <article class="post-item news">
                            <a href="#" class="post-item-image">
                              <img width="360" height="203" src="{{asset('themes/landing-pages/assets/images/news_3-360x203.jpg')}}" class="attachment-thelandscaper-news-small size-thelandscaper-news-small" alt="Theme Image" decoding="async" srcset="" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" />
                              <div class="label-wrap">
                                <span class="label date">March 15, 2021</span>
                                <span class="label sticky">Sticky</span>
                              </div>
                            </a>
                            <div class="post-item-content">
                              <h5 class="title">
                                <a href="#">Why The Landscaper Is The Best For Business</a>
                              </h5>
                              <p> The Landscaper is a WordPress theme build for Lawn and Landscaping Companies, and other companies with related services.... </p>
                              <a href="#" class="more">Read Post</a>
                            </div>
                          </article>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                          <article class="post-item news">
                            <a href="#" class="post-item-image">
                              <img width="360" height="203" src="{{asset('themes/landing-pages/assets/images/team4-m-min-360x203.jpg')}}" class="attachment-thelandscaper-news-small size-thelandscaper-news-small" alt="Theme Image" decoding="async" srcset="" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" />
                              <div class="label-wrap">
                                <span class="label date">March 17, 2021</span>
                              </div>
                            </a>
                            <div class="post-item-content">
                              <h5 class="title">
                                <a href="#">We Won The &#8216;Best Landscape Company&#8217; Award</a>
                              </h5>
                              <p> Yesterday we were awarded with the &#8216;Best Landscaper Of The Country&#8217; award.&nbsp;These award of excellence... </p>
                              <a href="#" class="more">Read Post</a>
                            </div>
                          </article>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                          <article class="post-item news">
                            <a href="#" class="post-item-image">
                              <img width="360" height="203" src="{{asset('themes/landing-pages/assets/images/team2-m-e-min-360x203.jpg')}}" class="attachment-thelandscaper-news-small size-thelandscaper-news-small" alt="Theme Image" decoding="async" srcset="" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" />
                              <div class="label-wrap">
                                <span class="label date">March 17, 2021</span>
                              </div>
                            </a>
                            <div class="post-item-content">
                              <h5 class="title">
                                <a href="#">Job: Fulltime (+50 hours per week) Landscapers</a>
                              </h5>
                              <p> Are you a top producer who is looking to show your landscaping skills to us and be fairly rewarded? Are you able to... </p>
                              <a href="#" class="more">Read Post</a>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div class="row"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>






            <div id="pg-11-7" class="panel-grid panel-has-style">
              <div class="siteorigin-panels-stretch panel-row-style panel-row-style-for-11-7" data-stretch-type="full">
                <div id="pgc-11-7-0" class="panel-grid-cell">
                  <div id="panel-11-7-0-0" class="so-panel widget widget_qt_testimonials widget-testimonials panel-first-child panel-last-child" data-index="17">
                    <div class="testimonials">
                      <h3 class="widget-title">
                        <a class="right testimonial-control" href="#testimonials-carousel-widget-7-0-0" role="button" aria-label="Previous" data-slide="next">
                          <i class="fas fa-angle-right" aria-hidden="true"></i>
                        </a>
                        <a class="left testimonial-control" href="#testimonials-carousel-widget-7-0-0" role="button" aria-label="Previous" data-slide="prev">
                          <i class="fas fa-angle-left" aria-hidden="true"></i>
                        </a>
                        <span class="light">Client</span> Testimonials
                      </h3>
                      <div id="testimonials-carousel-widget-7-0-0" class="testimonial-carousel carousel slide" data-ride="carousel" data-interval="6000">
                        <div class="carousel-inner">
                          <div class="item active">
                            <div class="row">
                              <div class="col-xs-12 col-sm-6 col-md-6">
                                <blockquote class="testimonial-quote"> The Landscaper is a very good landscaping company. They do tree removal also. We liked them because all the employees are hard working, honest and reliable. They always come on time, and the prices are good too! </blockquote>
                                <div class="testimonial-person">
                                  <cite class="testimonial-author">Ross N. Haynes</cite>
                                  <span class="testimonial-location">New York, US</span>
                                </div>
                              </div>
                              <div class="col-xs-12 col-sm-6 col-md-6">
                                <blockquote class="testimonial-quote"> What a great job carried out by The Landscaper. From the initial planning to completion. Always on time, and left the site spotless on completion. We definitely going to use your landscaping services again in the future! </blockquote>
                                <div class="testimonial-person">
                                  <cite class="testimonial-author">David &amp; Jennifer</cite>
                                  <span class="testimonial-location">Orlando, US</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="row">
                              <div class="col-xs-12 col-sm-6 col-md-6">
                                <blockquote class="testimonial-quote"> We found The Landscaper a pleasure to work with. The staff was friendly, hard working and completed the projects within the time agreed upon. Our own ideas were very carefully listened to and reflected in the design </blockquote>
                                <div class="testimonial-person">
                                  <cite class="testimonial-author">Bob &amp; Kate</cite>
                                  <span class="testimonial-location">London, UK</span>
                                </div>
                              </div>
                              <div class="col-xs-12 col-sm-6 col-md-6">
                                <blockquote class="testimonial-quote"> I wanted to take this opportunity to thank you for the excellent service your company provides. Our yard always looks perfect when you are done. You are very thorough and always go the extra mile. Thanks again! </blockquote>
                                <div class="testimonial-person">
                                  <cite class="testimonial-author">Peter</cite>
                                  <span class="testimonial-location">Barcelona, Spain</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>






            <div id="pg-11-8" class="panel-grid panel-no-style">
              <div id="pgc-11-8-0" class="panel-grid-cell">
                <div id="panel-11-8-0-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child panel-last-child" data-index="18">
                  <div class="text-center no-border panel-widget-style panel-widget-style-for-11-8-0-0">
                    <h3 class="widget-title">
                      <span class="light">Landscaping</span> Awards
                    </h3>
                    <div class="textwidget">With so many years of experience in the business, our company is your <br> source for the highest quality and landscaping service. </div>
                  </div>
                </div>
              </div>
            </div>






            <div id="pg-11-9" class="panel-grid panel-no-style">
              <div id="pgc-11-9-0" class="panel-grid-cell">
                <div id="panel-11-9-0-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="19">
                  <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 1">
                    <img width="195" height="123" src="{{asset('themes/landing-pages/assets/images/client5.jpg')}}" class="attachment-full size-full" alt="landscaping wordpress theme" decoding="async" />
                  </div>
                </div>
              </div>
              <div id="pgc-11-9-1" class="panel-grid-cell">
                <div id="panel-11-9-1-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="20">
                  <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 2">
                    <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client2.jpg')}}" alt="Client Two">
                  </div>
                </div>
              </div>
              <div id="pgc-11-9-2" class="panel-grid-cell">
                <div id="panel-11-9-2-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="21">
                  <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 3">
                    <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client3.jpg')}}" alt="Client Three">
                  </div>
                </div>
              </div>
              <div id="pgc-11-9-3" class="panel-grid-cell">
                <div id="panel-11-9-3-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="22">
                  <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 4">
                    <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client4.jpg')}}" alt="Client Four">
                  </div>
                </div>
              </div>
              <div id="pgc-11-9-4" class="panel-grid-cell">
                <div id="panel-11-9-4-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="23">
                  <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 5">
                    <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client5.jpg')}}" alt="Client Five">
                  </div>
                </div>
              </div>
              <div id="pgc-11-9-5" class="panel-grid-cell">
                <div id="panel-11-9-5-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="24">
                  <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 6">
                    <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client6.jpg')}}" alt="Client Six">
                  </div>
                </div>
              </div>
            </div>





            <div id="pg-11-10" class="panel-grid panel-has-style">
              <div class="siteorigin-panels-stretch panel-row-style panel-row-style-for-11-10" data-stretch-type="full-stretched">
                <div id="pgc-11-10-0" class="panel-grid-cell">
                  <div id="panel-11-10-0-0" class="so-panel widget widget_qt_google_map_iframe widget-google-map-iframe panel-first-child panel-last-child" data-index="25">
                    <div class="qt-map-iframe">
                      <iframe frameborder="0" title="Google Maps" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Central+Park+New+York&amp;z=12&amp;output=embed" width="100%" height="400px;"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>





          </div>
        </div>
      </div>

@endsection