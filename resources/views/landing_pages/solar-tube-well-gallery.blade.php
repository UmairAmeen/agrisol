@extends('layouts.app')
  
@section('content')
<div class="page-header">
        <div class="container">
          <h2 class="main-title">Solar Tube Well Gallery</h2>
          <h3 class="sub-title">A selection of our best work</h3>
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
            <a property="item" typeof="WebPage" title="Go to the Galleries." href="{{route('home.galleries')}}" class="taxonomy portfolio_category">
              <span property="name">Galleries</span>
            </a>
            <meta property="position" content="2">
          </span>
          <span property="itemListElement" typeof="ListItem">
            <span property="name">Solar Tube Well Gallery</span>
            <meta property="position" content="3">
          </span>
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <main class="col-xs-12">
              <article class="post-inner post-2657 portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio_category-patio">
                <h1 class="widget-title">Solar Tube Well Gallery</h1>
                <div class="row">
                  <div class="col-xs-12 col-md-7 col-md-push-5">
                    <div class="gallery-field-wrapper">
                      <div class="gallery-field gallery-columns-2 gallery-gap-15 clearfix">
                        <div class="gallery-item">
                          <a href="{{asset('themes/landing-pages/assets/images/garden-pond-m.jpg')}}" class="image" data-elementor-lightbox-slideshow="8fdc453">
                            <img width="653" height="375" src="{{asset('themes/landing-pages/assets/images/garden-pond-m-653x375.jpg')}}" alt="Theme Image">
                          </a>
                        </div>
                        <div class="gallery-item">
                          <a href="{{asset('themes/landing-pages/assets/images/garden-4-e.jpg')}}" class="image" data-elementor-lightbox-slideshow="8fdc453">
                            <img width="653" height="375" src="{{asset('themes/landing-pages/assets/images/garden-4-e-653x375.jpg')}}" alt="Theme Image">
                          </a>
                        </div>
                        <div class="gallery-item">
                          <a href="{{asset('themes/landing-pages/assets/images/irrigation_head.jpg')}}" class="image" data-elementor-lightbox-slideshow="8fdc453">
                            <img width="653" height="375" src="{{asset('themes/landing-pages/assets/images/irrigation_head-653x375.jpg')}}" alt="Theme Image">
                          </a>
                        </div>
                        <div class="gallery-item">
                          <a href="{{asset('themes/landing-pages/assets/images/tree_removal.jpg')}}" class="image" data-elementor-lightbox-slideshow="8fdc453">
                            <img width="653" height="375" src="{{asset('themes/landing-pages/assets/images/tree_removal-653x375.jpg')}}" alt="Theme Image">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="gallery-extra clearfix">
                      <p>
                        <a href="{{asset('themes/landing-pages/assets/images/terrace-m.jpg')}}">
                          <img decoding="async" loading="lazy" class="alignnone size-full wp-image-3978" src="{{asset('themes/landing-pages/assets/images/terrace-m.jpg')}}" alt="terrace-m" width="850" height="450" srcset="{{asset('themes/landing-pages/assets/images/terrace-m.jpg')}} 850w, {{asset('themes/landing-pages/assets/images/terrace-m-300x159.jpg')}} 300w, {{asset('themes/landing-pages/assets/images/terrace-m-848x448.jpg')}} 848w, {{asset('themes/landing-pages/assets/images/terrace-m-600x318.jpg')}} 600w, {{asset('themes/landing-pages/assets/images/terrace-m-768x407.jpg')}} 768w" sizes="(max-width: 850px) 100vw, 850px" />
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-5 col-md-pull-7">
                    <div class="gallery-content clearfix">
                      <p>We know that you want to create or update your&nbsp;project gallery as fast and as simple as possible. That’s why we created a very user-friendly gallery module. Just drag and drop your images into the gallery field, set the layout to Fullwidth or Split View and select in how many columns you want to show your images.</p>
                      <p>With 4 mouse-clicks you’re done, and you can create as many galleries as you want. Like the way of building pages with the page builder more? No problem, just activate the page builder on gallery pages with a single click and start building your page!</p>
                      <p>
                        <strong>
                          <span style="color: #a2c046; font-size: 15px;">THE&nbsp;CHALLENGES&nbsp;IN THE DESIGN</span>
                        </strong>
                      </p>
                      <p>We understand that your property is a big investment and we want our customers to know that we are there for them to help them accomplish the dreams that they may have for there property. From new construction landscaping to existing landscapes that need a facelift, our professional staff helps you add value to your property and make your property the envy of the neighborhood.</p>
                      <blockquote class="wp-block-quote">
                        <p>Just drag and drop your images into the gallery field, choose the fullwidth or split layout and set the images columns amount. That’s it!</p>
                        <cite>Patrick Michaels, Client</cite>
                      </blockquote>
                      <p>
                        <strong>
                          <span style="color: #a2c046; font-size: 15px;">THE FINAL LANDSCAPE DESIGN <br>
                          </span>
                        </strong>
                      </p>
                      <p>Our landscape division has many years of experience in all phases of landscaping and our customer focused approach makes the landscape experience just that, an experience.We want our customers to be there from the moment we get to the job until the end of the job so that they can have as much input in the project as possible.&nbsp;We understand that your property is a big investment and we want our customers to know that we are there for them to help them accomplish the dreams that they may have for there property.</p>
                    </div>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
        <nav class="project-navigation">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <a href="{{route('sprinkler-irrigation-gallery')}}" rel="prev">
                  <i class="fas fa-caret-left"></i> Previous </a>
                <a href="{{route('home.galleries')}}" class="summary">
                  <i class="fas fa-th-list"></i>
                </a>
                <a href="{{route('professional-training-gallery')}}" rel="next">Next <i class="fas fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
@endsection