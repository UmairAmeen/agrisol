@extends('layouts.app')
  
@section('content')
<div class="page-header">
        <div class="container">
          <h1 class="main-title">Make an Appointment</h1>
          <h3 class="sub-title">Our team of landscapers will always be on time</h3>
        </div>
      </div>
      <div class="breadcrumbs">
        <div class="container">
          <!-- Breadcrumb NavXT 7.2.0 -->
          <span property="itemListElement" typeof="ListItem">
            <a property="item" typeof="WebPage" title="Go to The Home Page." href="{{route('home')}}" class="home">
              <span property="name">Home</span>
            </a>
            <meta property="position" content="1">
          </span>
          <span property="itemListElement" typeof="ListItem">
            <span property="name">Make an Appointment</span>
            <meta property="position" content="2">
          </span>
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <main class="col-xs-12">
              <article class="post-5268 page type-page status-publish hentry">
                <div id="pl-5268" class="panel-layout">
                  <div id="pg-5268-0" class="panel-grid panel-no-style">
                    <div id="pgc-5268-0-0" class="panel-grid-cell">
                      <div id="panel-5268-0-0-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child" data-index="0">
                        <div class="content-box panel-widget-style panel-widget-style-for-5268-0-0-0">
                          <h3 class="widget-title">
                            <span class="light">Have</span> a Question?
                          </h3>
                          <div class="textwidget">
                            <p>
                              <img class="alignnone size-full wp-image-5157" src="{{asset('themes/landing-pages/assets/images/team_06.jpg')}}" alt="" width="850" height="567" />
                            </p>
                            <p>Feel free to ask any landscaping or gardening questions over the phone.</p>
                            <h3 style="margin-top: 10px;margin-bottom: 0;">
                              <span style="color: #9fc612;">
                                <span style="color: #ababab;">
                                  <span class="icon-wrap">
                                    <i class="fas fa-phone"></i>
                                  </span>
                                </span> 123 777 456 789 </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div id="panel-5268-0-0-1" class="so-panel widget widget_qt_icon_box widget-icon-box" data-index="1">
                        <div class="icon-box icon-big">
                          <i class="fa fas fa-home"></i>
                          <h6 class="title">Contact Details</h6>
                          <span class="subtitle">200 Park Avenue, New York, US +123 - 777 - 456 - 789</span>
                        </div>
                      </div>
                      <div id="panel-5268-0-0-2" class="so-panel widget widget_qt_icon_box widget-icon-box panel-last-child" data-index="2">
                        <div class="icon-box icon-big">
                          <i class="fa fas fa-clock"></i>
                          <h6 class="title">Working Hours</h6>
                          <span class="subtitle">Monday - Friday: 08:00 - 17:00 Saturday &amp; Sunday: CLOSED</span>
                        </div>
                      </div>
                    </div>
                    <div id="pgc-5268-0-1" class="panel-grid-cell">
                      <div id="panel-5268-0-1-0" class="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child panel-last-child" data-index="3">
                        <div class="textwidget">
                          <p>Feel free to ask any landscaping or gardening questions over the phone, or get in touch via our contact form below. Your message will be dispatched directly to our staff who will answer as soon as they can.</p>
                          <h6></h6>
                          <p>
                          <div class="wpcf7 no-js" id="wpcf7-f5267-p5268-o1" lang="en-US" dir="ltr">
                            <div class="screen-reader-response">
                              <p role="status" aria-live="polite" aria-atomic="true"></p>
                              <ul></ul>
                            </div>
                            <form action="https://demos.qreativethemes.com/thelandscaper/make-an-appointment/#wpcf7-f5267-p5268-o1" method="post" class="wpcf7-form init demo" aria-label="Contact form" novalidate="novalidate" data-status="init">
                              <div style="display: none;">
                                <input type="hidden" name="_wpcf7" value="5267" />
                                <input type="hidden" name="_wpcf7_version" value="5.8" />
                                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f5267-p5268-o1" />
                                <input type="hidden" name="_wpcf7_container_post" value="5268" />
                                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                              </div>
                              <div class="row">
                                <div class="col-xs-12 col-md-6">
                                  <p>
                                    <span>Your Name <span class="wpcf7-form-control-wrap" data-name="your-name">
                                        <input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Full Name" value="" type="text" name="your-name" />
                                      </span>
                                    </span>
                                  </p>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                  <p>
                                    <span>Your Address <span class="wpcf7-form-control-wrap" data-name="your-address">
                                        <input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Address" value="" type="text" name="your-address" />
                                      </span>
                                    </span>
                                  </p>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                  <p>
                                    <span>Your Email address <span class="wpcf7-form-control-wrap" data-name="your-email">
                                        <input size="40" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email address" value="" type="email" name="your-email" />
                                      </span>
                                    </span>
                                  </p>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                  <p>
                                    <span>Your Phone Number <span class="wpcf7-form-control-wrap" data-name="your-phone">
                                        <input size="40" class="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel" aria-required="true" aria-invalid="false" placeholder="Phone Number" value="" type="tel" name="your-phone" />
                                      </span>
                                    </span>
                                  </p>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                  <p>
                                    <span>Date of Appointment * <span class="wpcf7-form-control-wrap" data-name="the-date">
                                        <input class="wpcf7-form-control wpcf7-date wpcf7-validates-as-date" aria-invalid="false" value="" type="date" name="the-date" />
                                      </span>
                                    </span>
                                  </p>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                  <p>
                                    <span>Time of Appointment * <span class="wpcf7-form-control-wrap" data-name="the-time">
                                        <select class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="the-time">
                                          <option value="08:00 AM">08:00 AM</option>
                                          <option value="09:00 AM">09:00 AM</option>
                                          <option value="10:00 AM">10:00 AM</option>
                                          <option value="11:00 AM">11:00 AM</option>
                                          <option value="12:00 AM">12:00 AM</option>
                                          <option value="01:00 PM">01:00 PM</option>
                                          <option value="02:00 PM">02:00 PM</option>
                                          <option value="03:00 PM">03:00 PM</option>
                                          <option value="04:00 PM">04:00 PM</option>
                                          <option value="05:00 PM">05:00 PM</option>
                                          <option value="06:00 PM">06:00 PM</option>
                                        </select>
                                      </span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-xs-12 col-md-6">
                                  <p>
                                    <span>I am interested in:</span>
                                    <span class="wpcf7-form-control-wrap" data-name="services">
                                      <span class="wpcf7-form-control wpcf7-checkbox">
                                        <span class="wpcf7-list-item first">
                                          <label>
                                            <input type="checkbox" name="services[]" value="Lawn &amp; Garden Care" />
                                            <span class="wpcf7-list-item-label">Engineering Designs</span>
                                          </label>
                                        </span>
                                        <span class="wpcf7-list-item">
                                          <label>
                                            <input type="checkbox" name="services[]" value="Planting &amp; Removal" />
                                            <span class="wpcf7-list-item-label">Consultancy</span>
                                          </label>
                                        </span>
                                        <span class="wpcf7-list-item">
                                          <label>
                                            <input type="checkbox" name="services[]" value="Irrigation &amp; Drainage" />
                                            <span class="wpcf7-list-item-label">Professional Development Courses Training</span>
                                          </label>
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                  <p>
                                    <span>Additional Message</span>
                                    <span class="wpcf7-form-control-wrap" data-name="extra-message">
                                      <textarea cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Write your message" name="extra-message"></textarea>
                                    </span>
                                    <input class="wpcf7-form-control wpcf7-submit has-spinner btn btn-primary" type="submit" value="Make Appointment" />
                                  </p>
                                </div>
                              </div>
                              <div class="wpcf7-response-output" aria-hidden="true"></div>
                            </form>
                          </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-5268-1" class="panel-grid panel-has-style">
                    <div class="siteorigin-panels-stretch panel-row-style panel-row-style-for-5268-1" data-stretch-type="full-stretched">
                      <div id="pgc-5268-1-0" class="panel-grid-cell">
                        <div id="panel-5268-1-0-0" class="so-panel widget widget_qt_google_map_iframe widget-google-map-iframe panel-first-child panel-last-child" data-index="4">
                          <div class="qt-map-iframe">
                            <iframe frameborder="0" title="Google Maps" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Central+Park+New+York&amp;z=12&amp;output=embed" width="100%" height="400px;"></iframe>
                          </div>
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