@extends('layouts.app')
  
@section('content')
<div class="page-header">
  <div class="container">
    <h1 class="main-title">Products</h1>
    <h3 class="sub-title">Enhance the look of your property with our services</h3>
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
      <span property="name">Products</span>
      <meta property="position" content="2">
    </span>
  </div>
</div>
<div class="content">
  <div class="container">
    <div class="row">
      <main class="col-xs-12">
        <article class="post-921 page type-page status-publish hentry">
          <div id="pl-921" class="panel-layout">
            <div id="pg-921-0" class="panel-grid panel-no-style">
              <div id="pgc-921-0-0" class="panel-grid-cell">
                <div id="panel-921-0-0-0" class="so-panel widget widget_qt_feature_page widget-featured-page panel-first-child panel-last-child" data-index="0">
                  <div class="post-item page">
                    <a href="{{route('filters')}}" class="post-item-image">
                      <img width="360" height="240" src="{{asset('themes/landing-pages/assets/images/trimming_hedge-360x240.jpg')}}" class="attachment-thelandscaper-featured-thumb size-thelandscaper-featured-thumb" alt="Theme Image" decoding="async" srcset="" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" />
                      <div class="overlay">
                        <div class="vertical-center">
                          <span>READ MORE</span>
                        </div>
                      </div>
                    </a>
                    <h5 class="title">
                      <a href="{{route('filters')}}">Filters</a>
                    </h5>
                    <p>We understand that your property is a big investment and we want our customers to know that we are there for them to help them accomplish the dreams that they may have for there property.&hellip;</p>
                    <a href="{{route('filters')}}" class="more">READ MORE</a>
                  </div>
                </div>
              </div>
              <div id="pgc-921-0-1" class="panel-grid-cell">
                <div id="panel-921-0-1-0" class="so-panel widget widget_qt_feature_page widget-featured-page panel-first-child panel-last-child" data-index="1">
                  <div class="post-item page">
                    <a href="{{route('drip-irrigation')}}" class="post-item-image">
                      <img width="360" height="240" src="{{asset('themes/landing-pages/assets/images/snow_removal-360x240.jpg')}}" class="attachment-thelandscaper-featured-thumb size-thelandscaper-featured-thumb" alt="Theme Image" decoding="async" srcset="" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" />
                      <div class="overlay">
                        <div class="vertical-center">
                          <span>READ MORE</span>
                        </div>
                      </div>
                    </a>
                    <h5 class="title">
                      <a href="{{route('drip-irrigation')}}">Drip Irrigation</a>
                    </h5>
                    <p>Snow and Ice removal services can be customized to fit your level of need. We have the equipment to accomandate any residential, or commercial client, while providing te best possible&hellip;</p>
                    <a href="{{route('drip-irrigation')}}" class="more">READ MORE</a>
                  </div>
                </div>
              </div>
              <div id="pgc-921-0-2" class="panel-grid-cell">
                <div id="panel-921-0-2-0" class="so-panel widget widget_qt_feature_page widget-featured-page panel-first-child panel-last-child" data-index="2">
                  <div class="post-item page">
                    <a href="{{route('sprinkler-irrigation')}}" class="post-item-image">
                      <img width="360" height="240" src="{{asset('themes/landing-pages/assets/images/tree_removal-360x240.jpg')}}" class="attachment-thelandscaper-featured-thumb size-thelandscaper-featured-thumb" alt="Theme Image" decoding="async" srcset="" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" />
                      <div class="overlay">
                        <div class="vertical-center">
                          <span>READ MORE</span>
                        </div>
                      </div>
                    </a>
                    <h5 class="title">
                      <a href="{{route('sprinkler-irrigation')}}">Sprinkler Irrigation</a>
                    </h5>
                    <p>While tree removal is the choice of last resort, it is sometimes most necessary. Sick trees, trees that uproot sidewalks, cause cracks in the foundation, disrupt sewer lines, have sustained&hellip;</p>
                    <a href="{{route('sprinkler-irrigation')}}" class="more">READ MORE</a>
                  </div>
                </div>
              </div>
            </div>
            <div id="pg-921-1" class="panel-grid panel-no-style">
              <div id="pgc-921-1-0" class="panel-grid-cell">
                <div id="panel-921-1-0-0" class="so-panel widget widget_qt_feature_page widget-featured-page panel-first-child panel-last-child" data-index="3">
                  <div class="post-item page">
                    <a href="{{route('automated-irrigation')}}" class="post-item-image">
                      <img width="360" height="240" src="{{asset('themes/landing-pages/assets/images/leaf_blower-360x240.jpg')}}" class="attachment-thelandscaper-featured-thumb size-thelandscaper-featured-thumb" alt="Theme Image" decoding="async" srcset="" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" />
                      <div class="overlay">
                        <div class="vertical-center">
                          <span>READ MORE</span>
                        </div>
                      </div>
                    </a>
                    <h5 class="title">
                      <a href="{{route('automated-irrigation')}}">Automated Irrigation</a>
                    </h5>
                    <p>Our fall clean-up service is the process of removing all leaves, branches and other debris that have accumulated over the course of the summer season. It is important for the health&hellip;</p>
                    <a href="{{route('automated-irrigation')}}" class="more">READ MORE</a>
                  </div>
                </div>
              </div>
            </div>
            <div id="pg-921-2" class="panel-grid panel-has-style">
              <div class="siteorigin-panels-stretch panel-row-style panel-row-style-for-921-2" data-stretch-type="full">
                <div id="pgc-921-2-0" class="panel-grid-cell">
                  <div id="panel-921-2-0-0" class="so-panel widget widget_qt_cta_banner widget-cta-banner panel-first-child panel-last-child" data-index="6">
                    <div class="cta-banner cta-inline">
                      <div class="cta-banner-text">
                        <div class="cta-banner-title" style="color: #ffffff;">Already know what service you need for your garden?</div>
                      </div>
                      <div class="cta-banner-buttons">
                        <a href="{{route('make-an-appointment')}}" class="btn btn-outline" target="_self">Make Appointment</a>
                        <a href="{{route('contact-us')}}" class="btn btn-outline" target="_self">Send a Message</a>
                      </div>
                      <div class="clearfix"></div>
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