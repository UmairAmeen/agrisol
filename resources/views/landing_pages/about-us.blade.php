@extends('layouts.app')
  
@section('content')
<div class="page-header">
        <div class="container">
          <h1 class="main-title">About Us</h1>
          <h3 class="sub-title">The Landscaper has been in business since 1978</h3>
        </div>
      </div>
      <div class="breadcrumbs">
        <div class="container">
          <!-- Breadcrumb NavXT 7.2.0 -->
          <span property="itemListElement" typeof="ListItem">
            <a property="item" typeof="WebPage" title="" href="{{route('home')}}" class="home">
              <span property="name">Home</span>
            </a>
            <meta property="position" content="1">
          </span>
          <span property="itemListElement" typeof="ListItem">
            <span property="name">About Us</span>
            <meta property="position" content="2">
          </span>
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <main class="col-xs-12">
              <article class="post-181 page type-page status-publish has-post-thumbnail hentry">
                <div id="pl-181" class="panel-layout">
                  <div id="pg-181-0" class="panel-grid panel-no-style">
                    <div id="pgc-181-0-0" class="panel-grid-cell">
                      <div id="panel-181-0-0-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child panel-last-child" data-index="0">
                        <h3 class="widget-title">
                          <span class="light">We</span> Are The Landscaper
                        </h3>
                        <div class="textwidget">
                          <p>The Landscaper is a full-service landscaping company with a straightforward and unique design/build philosophy. We believe in having one landscape designer handle the job from its conception on paper, to the realization on your property. The reason; by doing this you are able to communicate and work with a single individual, where you can share your thoughts and idea's with to bring them, in collaboration, to life.</p>
                          <p>The Landscaper is made up of a group of highly skilled landscaping professionals who pays a lot of attention to small details. In the 30+ years of experience our staff keep your property looking and functioning beautifully. Plus our landscapers are fully licensed.</p>
                          <p>
                            <a class="more" href="{{route('contact-us')}}">Get in Touch</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-0-1" class="panel-grid-cell">
                      <div id="panel-181-0-1-0" class="so-panel widget widget_qt_before_after_slider widget-before-after-slider panel-first-child panel-last-child" data-index="1">
                        <div class="twentytwenty-wrapper twentytwenty-horizontal">
                          <div class="before-after-slider">
                            <img width="850" height="450" src="{{asset('themes/landing-pages/assets/images/hardscaping_hand.jpg')}}" class="attachment-full size-full" alt="Theme Image" loading="lazy">
                            <img width="850" height="450" src="{{asset('themes/landing-pages/assets/images/garden-7-e.jpg')}}" class="attachment-full size-full" alt="Theme Image" loading="lazy">
                            <div class="twentytwenty-overlay">
                              <div class="twentytwenty-before-label" data-content="Before"></div>
                              <div class="twentytwenty-after-label" data-content="After"></div>
                            </div>
                            <div class="twentytwenty-handle"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-181-1" class="panel-grid panel-no-style">
                    <div id="pgc-181-1-0" class="panel-grid-cell">
                      <div id="panel-181-1-0-0" class="so-panel widget widget_text panel-first-child panel-last-child" data-index="2">
                        <div class="textwidget">
                          <div class="dropcap-wrap">
                            <div class="dropcap-pull">
                              <span class="dropcap style1">1978</span>
                            </div>
                            <span class="dropcap-title"> Started the Company</span>
                          </div>Almost four decades ago we started as a company with two man. Not much later a landscape designer joined the team and from that point we began to grow fast.
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-1-1" class="panel-grid-cell">
                      <div id="panel-181-1-1-0" class="so-panel widget widget_text panel-first-child panel-last-child" data-index="3">
                        <div class="textwidget">
                          <div class="dropcap-wrap">
                            <div class="dropcap-pull">
                              <span class="dropcap style1">1997</span>
                            </div>
                            <span class="dropcap-title"> Second Location</span>
                          </div>The last years we grew very quickly, so 1997 was the year we opened a second location. The new location started with five new landscapers.
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-1-2" class="panel-grid-cell">
                      <div id="panel-181-1-2-0" class="so-panel widget widget_text panel-first-child panel-last-child" data-index="4">
                        <div class="textwidget">
                          <div class="dropcap-wrap">
                            <div class="dropcap-pull">
                              <span class="dropcap style1">2015</span>
                            </div>
                            <span class="dropcap-title"> Total of 12 Awards</span>
                          </div>Until the year 2015, we are nominated several times, and won 12 awards in total for landscape design. We are very proud of this achievement.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-181-2" class="panel-grid panel-no-style">
                    <div id="pgc-181-2-0" class="panel-grid-cell">
                      <div id="panel-181-2-0-0" class="so-panel widget widget_text panel-first-child panel-last-child" data-index="5">
                        <h3 class="widget-title">
                          <span class="light">The</span> Landscapers
                        </h3>
                        <div class="textwidget"></div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-181-3" class="panel-grid panel-no-style">
                    <div id="pgc-181-3-0" class="panel-grid-cell">
                      <div id="panel-181-3-0-0" class="so-panel widget widget_qt_team_member widget-team-member panel-first-child panel-last-child" data-index="6">
                        <div class="team-member">
                          <div class="team-member-image">
                            <img width="360" height="240" loading="lazy" src="{{asset('themes/landing-pages/assets/images/team_01s.jpg')}}" alt="John Williams">
                            <div class="team-member-social">
                              <div class="overlay-center">
                                <a href="#" aria-label="Facebook">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                  <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="mailto:" aria-label="Email">
                                  <i class="fas fa-envelope"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="team-member-content">
                            <h4 class="team-member-name"> John Williams </h4>
                            <span class="team-member-tag">CEO / OWNER</span>
                            <p class="team-member-description">Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Omnia contraria, quos etiam insanos esse vultis. Diodorus, eius auditor, adiungit ad honestatem vacuitatem</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-3-1" class="panel-grid-cell">
                      <div id="panel-181-3-1-0" class="so-panel widget widget_qt_team_member widget-team-member panel-first-child panel-last-child" data-index="7">
                        <div class="team-member">
                          <div class="team-member-image">
                            <img width="850" height="564" loading="lazy" src="{{asset('themes/landing-pages/assets/images/team_02.jpg')}}" alt="Larry Vieira">
                            <div class="team-member-social">
                              <div class="overlay-center">
                                <a href="#" aria-label="Facebook">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                  <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="mailto:" aria-label="Email">
                                  <i class="fas fa-envelope"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="team-member-content">
                            <h4 class="team-member-name"> Larry Vieira </h4>
                            <span class="team-member-tag">SENIOR LANDSCAPER</span>
                            <p class="team-member-description">Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Omnia contraria, quos etiam insanos esse vultis. Diodorus, eius auditor, adiungit ad honestatem vacuitatem</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-3-2" class="panel-grid-cell">
                      <div id="panel-181-3-2-0" class="so-panel widget widget_qt_team_member widget-team-member panel-first-child panel-last-child" data-index="8">
                        <div class="team-member">
                          <div class="team-member-image">
                            <img width="850" height="565" loading="lazy" src="{{asset('themes/landing-pages/assets/images/team_03.jpg')}}" alt="Dwight Rogers">
                            <div class="team-member-social">
                              <div class="overlay-center">
                                <a href="#" aria-label="Facebook">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                  <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="mailto:" aria-label="Email">
                                  <i class="fas fa-envelope"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="team-member-content">
                            <h4 class="team-member-name"> Dwight Rogers </h4>
                            <span class="team-member-tag">LANDSCAPER</span>
                            <p class="team-member-description">Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Omnia contraria, quos etiam insanos esse vultis. Diodorus, eius auditor, adiungit ad honestatem vacuitatem</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-181-4" class="panel-grid panel-no-style">
                    <div id="pgc-181-4-0" class="panel-grid-cell">
                      <div id="panel-181-4-0-0" class="so-panel widget widget_qt_team_member widget-team-member panel-first-child panel-last-child" data-index="9">
                        <div class="team-member">
                          <div class="team-member-image">
                            <img width="850" height="567" loading="lazy" src="{{asset('themes/landing-pages/assets/images/team_04.jpg')}}" alt="Ralph Hayes">
                            <div class="team-member-social">
                              <div class="overlay-center">
                                <a href="#" aria-label="Facebook">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                  <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="mailto:" aria-label="Email">
                                  <i class="fas fa-envelope"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="team-member-content">
                            <h4 class="team-member-name"> Ralph Hayes </h4>
                            <span class="team-member-tag">SENIOR LANDSCAPER</span>
                            <p class="team-member-description">Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Omnia contraria, quos etiam insanos esse vultis. Diodorus, eius auditor, adiungit ad honestatem vacuitatem</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-4-1" class="panel-grid-cell">
                      <div id="panel-181-4-1-0" class="so-panel widget widget_qt_team_member widget-team-member panel-first-child panel-last-child" data-index="10">
                        <div class="team-member">
                          <div class="team-member-image">
                            <img width="850" height="567" loading="lazy" src="{{asset('themes/landing-pages/assets/images/team_05.jpg')}}" alt="Frank Anderson">
                            <div class="team-member-social">
                              <div class="overlay-center">
                                <a href="#" aria-label="Facebook">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                  <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="mailto:" aria-label="Email">
                                  <i class="fas fa-envelope"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="team-member-content">
                            <h4 class="team-member-name"> Frank Anderson </h4>
                            <span class="team-member-tag">LANDSCAPER</span>
                            <p class="team-member-description">Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Omnia contraria, quos etiam insanos esse vultis. Diodorus, eius auditor, adiungit ad honestatem vacuitatem</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-4-2" class="panel-grid-cell">
                      <div id="panel-181-4-2-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child panel-last-child" data-index="11">
                        <div class="border-box panel-widget-style panel-widget-style-for-181-4-2-0">
                          <h3 class="widget-title">
                            <span class="light">We</span> are hiring Landscapers
                          </h3>
                          <div class="textwidget">
                            <p>Are you a top producer who is looking to show your landscaping skills to us and be fairly rewarded? Are you able to manage job sites and read landscape drawings?</p>
                            <h6>&nbsp;</h6>
                            <p>
                              <strong>At The Landscaper we offer:</strong>
                            </p>
                            <p>
                              <strong>
                                <span style="font-size: 16px; color: #a2c046;">
                                  <span class="icon-wrap">
                                    <i class="fas fa-check-circle"></i>
                                  </span>
                                </span>
                              </strong>  Full Time, Year Round employment <br />
                              <strong>
                                <span style="font-size: 16px; color: #a2c046;">
                                  <span class="icon-wrap">
                                    <i class="fas fa-check-circle"></i>
                                  </span>
                                </span>
                              </strong>  Shared Benefit Package <br />
                              <strong>
                                <span style="font-size: 16px; color: #a2c046;">
                                  <span class="icon-wrap">
                                    <i class="fas fa-check-circle"></i>
                                  </span>
                                </span>
                              </strong>  Excellent Work Environment <br />
                              <strong>
                                <span style="font-size: 16px; color: #a2c046;">
                                  <span class="icon-wrap">
                                    <i class="fas fa-check-circle"></i>
                                  </span>
                                </span>
                              </strong>  Variety of Services
                            </p>
                            <p>
                              <a class="more" href="#">READ FULL JOB DESCRIPTION</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-181-5" class="panel-grid panel-has-style">
                    <div class="siteorigin-panels-stretch panel-row-style panel-row-style-for-181-5" data-stretch-type="full">
                      <div id="pgc-181-5-0" class="panel-grid-cell">
                        <div id="panel-181-5-0-0" class="so-panel widget widget_qt_count_box widget-count-box panel-first-child panel-last-child" data-index="12">
                          <div class="counter count-box">
                            <div class="count-icon">
                              <i class="fa far fa-check-circle"></i>
                            </div>
                            <div class="count-text">
                              <span class="count-number" data-to="870" data-speed="2000"></span>
                              <span class="count-after">+</span>
                              <span class="count-title">Gardens Designed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pgc-181-5-1" class="panel-grid-cell">
                        <div id="panel-181-5-1-0" class="so-panel widget widget_qt_count_box widget-count-box panel-first-child panel-last-child" data-index="13">
                          <div class="counter count-box">
                            <div class="count-icon">
                              <i class="fa far fa-comments"></i>
                            </div>
                            <div class="count-text">
                              <span class="count-number" data-to="110" data-speed="2000"></span>
                              <span class="count-after">%</span>
                              <span class="count-title">Satisfied Clients</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pgc-181-5-2" class="panel-grid-cell">
                        <div id="panel-181-5-2-0" class="so-panel widget widget_qt_count_box widget-count-box panel-first-child panel-last-child" data-index="14">
                          <div class="counter count-box">
                            <div class="count-icon">
                              <i class="fa fas fa-leaf"></i>
                            </div>
                            <div class="count-text">
                              <span class="count-number" data-to="4820" data-speed="2000"></span>
                              <span class="count-after">m2</span>
                              <span class="count-title">Turf Laid</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pgc-181-5-3" class="panel-grid-cell">
                        <div id="panel-181-5-3-0" class="so-panel widget widget_qt_count_box widget-count-box panel-first-child panel-last-child" data-index="15">
                          <div class="counter count-box">
                            <div class="count-icon">
                              <i class="fa fas fa-users"></i>
                            </div>
                            <div class="count-text">
                              <span class="count-number" data-to="25" data-speed="2000"></span>
                              <span class="count-after">+</span>
                              <span class="count-title">Landscapers</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-181-6" class="panel-grid panel-no-style">
                    <div id="pgc-181-6-0" class="panel-grid-cell">
                      <div id="panel-181-6-0-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child panel-last-child" data-index="16">
                        <div class="text-center no-border panel-widget-style panel-widget-style-for-181-6-0-0">
                          <h3 class="widget-title">
                            <span class="light">Landscaping</span> Awards
                          </h3>
                          <div class="textwidget">
                            <p>With so many years of experience in the business, our company is your <br /> source for the highest quality and landscaping service. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-181-7" class="panel-grid panel-no-style">
                    <div id="pgc-181-7-0" class="panel-grid-cell">
                      <div id="panel-181-7-0-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="17">
                        <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 1">
                          <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client1.jpg')}}">
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-7-1" class="panel-grid-cell">
                      <div id="panel-181-7-1-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="18">
                        <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 2">
                          <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client2.jpg')}}">
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-7-2" class="panel-grid-cell">
                      <div id="panel-181-7-2-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="19">
                        <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 3">
                          <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client3.jpg')}}">
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-7-3" class="panel-grid-cell">
                      <div id="panel-181-7-3-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="20">
                        <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 4">
                          <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client4.jpg')}}">
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-7-4" class="panel-grid-cell">
                      <div id="panel-181-7-4-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="21">
                        <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 5">
                          <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client5.jpg')}}">
                        </div>
                      </div>
                    </div>
                    <div id="pgc-181-7-5" class="panel-grid-cell">
                      <div id="panel-181-7-5-0" class="so-panel widget widget_qt_brand_image widget-brand-logo panel-first-child panel-last-child" data-index="22">
                        <div class="brand-image brand-border brand-hover" data-toggle="tooltip" data-original-title="Award Nr. 6">
                          <img width="195" height="123" loading="lazy" src="{{asset('themes/landing-pages/assets/images/client6.jpg')}}">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </article>
            </main>
          </div>
        </div>
      </div>
@endsection