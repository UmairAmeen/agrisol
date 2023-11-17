@extends('layouts.app')
  
@section('content')
<div class="page-header">
  <div class="container">
    <h1 class="main-title">Gallery Lightbox</h1>
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
      <a property="item" typeof="WebPage" title="Go to Galleries." href="{{route('home.galleries')}}" class="post post-page">
        <span property="name">Galleries</span>
      </a>
      <meta property="position" content="2">
    </span>
    <span property="itemListElement" typeof="ListItem">
      <span property="name">Gallery Lightbox</span>
      <meta property="position" content="3">
    </span>
  </div>
</div>
<div class="content">
  <div class="container">
    <div class="row">
      <main class="col-xs-12">
        <article class="post-5905 page type-page status-publish hentry">
          <div id="pl-5905" class="panel-layout">
            <div id="pg-5905-0" class="panel-grid panel-no-style">
              <div id="pgc-5905-0-0" class="panel-grid-cell">
                <div id="panel-5905-0-0-0" class="so-panel widget widget_ess-grid-widget widget_ess_grid panel-first-child panel-last-child" data-index="0">
                  <style type="text/css"></style>
                  <style type="text/css">
                    .the-landscaper .esg-filter-wrapper {
                      width: 100%
                    }

                    .the-landscaper .navigationbuttons,
                    .the-landscaper .esg-pagination,
                    .the-landscaper .esg-filters {
                      text-transform: uppercase;
                      text-align: center
                    }

                    .the-landscaper .esg-filterbutton {
                      position: relative
                    }

                    .the-landscaper .esg-loadmore-wrapper {
                      margin-top: 30px
                    }

                    .the-landscaper .esg-filterbutton,
                    .the-landscaper .esg-sortbutton,
                    .the-landscaper .esg-cartbutton {
                      display: block;
                      padding: 14px 25px;
                      color: #999999;
                      font-family: "Roboto", sans-serif;
                      font-size: 15px;
                      font-weight: bold;
                      z-index: 2;
                      text-transform: none;
                      cursor: pointer;
                      background-color: #f5f5f5;
                      border-radius: 1px;
                      transition: all 100ms ease-in
                    }

                    .the-landscaper .esg-navigationbutton.esg-left,
                    .the-landscaper .esg-navigationbutton.esg-right {
                      border-color: #50524B
                    }

                    @media(min-width:992px) {

                      .the-landscaper .esg-filterbutton,
                      .the-landscaper .esg-sortbutton,
                      .the-landscaper .esg-cartbutton {
                        position: relative;
                        display: inline-block;
                        margin-right: 7px
                      }

                      .the-landscaper .esg-filter-checked {
                        padding: 1px 3px;
                        color: #999999;
                        background: #f9f9f9;
                        margin-left: 7px;
                        font-size: 9px;
                        font-weight: 300;
                        line-height: 9px;
                        vertical-align: middle
                      }
                    }

                    .the-landscaper .esg-filterbutton.selected,
                    .the-landscaper .esg-filterbutton:hover {
                      background-color: #A2C046;
                      color: #ffffff;
                      border-color: #A2C046
                    }

                    .the-landscaper .esg-navigationbutton {
                      display: inline-block;
                      bottom: 22px;
                      padding: 12px 13px;
                      font-family: "Roboto", sans-serif;
                      font-weight: bold;
                      cursor: pointer;
                      color: #999999;
                      border: 2px solid #dedede;
                      border-radius: 1px;
                      -webkit-border-radius: 1px;
                      transition: all 100ms ease-out
                    }

                    .the-landscaper .esg-navigationbutton:hover {
                      border-color: #cccccc
                    }

                    .the-landscaper .esg-navigationbutton * {
                      color: #999999;
                      transition: all 100ms ease-out
                    }

                    .the-landscaper .esg-navigationbutton:hover * {
                      color: #ffffff
                    }

                    .the-landscaper .esg-sortbutton-order.tp-desc:hover {
                      color: #333333
                    }

                    .the-landscaper .esg-sortbutton-wrapper,
                    .the-landscaper .esg-cartbutton-wrapper {
                      display: inline-block
                    }

                    .the-landscaper .esg-sortbutton-order,
                    .the-landscaper .esg-cartbutton-order {
                      display: inline-block;
                      vertical-align: top;
                      border: none;
                      width: 40px;
                      line-height: 40px;
                      font-size: 12px;
                      font-weight: 700;
                      color: #999;
                      cursor: pointer;
                      background: #eee;
                      background: #fff;
                      margin-left: 5px
                    }

                    .the-landscaper .esg-cartbutton {
                      color: #fff;
                      cursor: default !important
                    }

                    .the-landscaper .esg-cartbutton .esgicon-basket {
                      color: #fff;
                      font-size: 15px;
                      line-height: 15px;
                      margin-right: 10px
                    }

                    .the-landscaper .esg-cartbutton-wrapper {
                      cursor: default !important
                    }

                    .the-landscaper .esg-sortbutton,
                    .the-landscaper .esg-cartbutton {
                      display: inline-block;
                      position: relative;
                      cursor: pointer;
                      margin-right: 0px;
                      border-radius: 2px
                    }
                  </style>
                  <style type="text/css">
                    .eg-the-landscaper-lightbox-element-31 {
                      font-size: 16px !important;
                      line-height: 22px !important;
                      color: #ffffff !important;
                      font-weight: 400 !important;
                      padding: 17px 17px 17px 17px !important;
                      border-radius: 50% 50% 50% 50% !important;
                      background: #a2c046 !important;
                      z-index: 2 !important;
                      display: block;
                      border-top-width: 0px !important;
                      border-right-width: 0px !important;
                      border-bottom-width: 0px !important;
                      border-left-width: 0px !important;
                      border-color: #ffffff !important;
                      border-style: solid !important
                    }

                    .eg-the-landscaper-lightbox-element-24 {
                      font-size: 16px !important;
                      line-height: 22px !important;
                      color: #ffffff !important;
                      font-weight: 700 !important;
                      padding: 0px 0px 0px 0px !important;
                      border-radius: 0px 0px 0px 0px !important;
                      background: transparent !important;
                      z-index: 2 !important;
                      display: block;
                      font-family: "Roboto", sans-serif !important;
                      text-transform: capitalize !important
                    }
                  </style>
                  <style type="text/css">
                    .eg-the-landscaper-lightbox-element-31:hover {
                      font-size: 16px !important;
                      line-height: 22px !important;
                      color: #ffffff !important;
                      font-weight: 400 !important;
                      border-radius: 60px 60px 60px 60px !important;
                      background: #98b63c !important;
                      border-top-width: 0px !important;
                      border-right-width: 0px !important;
                      border-bottom-width: 0px !important;
                      border-left-width: 0px !important;
                      border-color: #98b63c !important;
                      border-style: solid !important
                    }

                    .eg-the-landscaper-lightbox-element-24:hover {
                      font-size: 16px !important;
                      line-height: 22px !important;
                      color: #ffffff !important;
                      font-weight: 700 !important;
                      border-radius: 0px 0px 0px 0px !important;
                      background: transparent !important;
                      font-family: "Roboto", sans-serif !important;
                      text-transform: capitalize !important
                    }
                  </style>
                  <style type="text/css">
                    .eg-the-landscaper-lightbox-element-31-a {
                      display: inline-block !important;
                      float: none !important;
                      clear: none !important;
                      margin: 0px 0px 20px 0px !important;
                      position: relative !important
                    }
                  </style>
                  <style type="text/css">
                    .eg-the-landscaper-lightbox-element-24-a {
                      display: block !important;
                      text-align: center !important;
                      clear: none !important;
                      margin: 0px 0px 0px 0px !important;
                      position: relative !important
                    }
                  </style>
                  <style type="text/css">
                    .eg-the-landscaper-lightbox-container {
                      background: rgba(10, 10, 10, 0.65)
                    }
                  </style>
                  <style type="text/css">
                    .eg-the-landscaper-lightbox-content {
                      background: #ffffff;
                      padding: px px px px;
                      border-width: px px px px;
                      border-radius: 0px 0px 0px 0px;
                      border-color: transparent;
                      border-style: double;
                      text-align: center
                    }
                  </style>
                  <style type="text/css">
                    .esg-grid .mainul li.eg-the-landscaper-lightbox-wrapper {
                      background: #ffffff;
                      padding: 0px 0px 0px 0px;
                      border-width: 0px 0px 0px 0px;
                      border-radius: 2px 2px 2px 2px;
                      border-color: transparent;
                      border-style: solid
                    }
                  </style>
                  <style type="text/css">
                    .esg-grid .mainul li.eg-the-landscaper-lightbox-wrapper .esg-media-poster {
                      background-size: cover;
                      background-position: center center;
                      background-repeat: no-repeat
                    }
                  </style>
                  <!-- THE ESSENTIAL GRID 3.0.18 POST -->
                  <article class="myportfolio-container esg-grid-wrap-container the-landscaper esg-entry-skin-the-landscaper-lightbox source_type_post" id="esg-grid-5-1-wrap" data-alias="gallery_lightbox">
                    <div id="esg-grid-5-1" class="esg-grid" style="background: transparent;padding: 0px 0px 0px 0px ; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;">
                      <article class="esg-filters esg-singlefilters" style="margin-bottom: 30px; text-align: center; ">
                        <!-- THE FILTER BUTTON -->
                        <div class="esg-filter-wrapper  esg-fgc-5" style="margin-left: 2.5px; margin-right: 2.5px;">
                          <div class="esg-mobile-filter-button">
                            <span>Filter Categories</span>
                            <i class="eg-icon-down-open"></i>
                          </div>
                          <div class="esg-filterbutton selected esg-allfilter" data-filter="filterall" data-fid="-1">
                            <span>All Galleries</span>
                          </div>
                          <div class="esg-filterbutton" data-fid="21" data-filter="landscape-irrigation-gallery">
                            <span>Landscape Irrigation Gallery</span>
                            <span class="esg-filter-checked">
                              <i class="eg-icon-ok-1"></i>
                            </span>
                          </div>
                          <div class="esg-filterbutton" data-fid="22" data-filter="drip-irrigation-gallery">
                            <span>Drip Irrigation Gallery</span>
                            <span class="esg-filter-checked">
                              <i class="eg-icon-ok-1"></i>
                            </span>
                          </div>
                          <div class="esg-filterbutton" data-fid="23" data-filter="sprinkler-irrigation-gallery">
                            <span>Sprinkler Irrigation Gallery</span>
                            <span class="esg-filter-checked">
                              <i class="eg-icon-ok-1"></i>
                            </span>
                          </div>
                          <div class="esg-filterbutton-last esg-filterbutton" data-fid="24" data-filter="solar-tube-well-gallery">
                            <span>Solar Tube Well Gallery</span>
                            <span class="esg-filter-checked">
                              <i class="eg-icon-ok-1"></i>
                            </span>
                          </div>
                          <div class="eg-clearfix"></div>
                        </div>
                      </article>
                      <div class="esg-clear-no-height"></div>
                      <ul>
                        <li id="eg-5-post-id-636_4751" data-skin="the-landscaper-lightbox" class="filterall landscape-irrigation-gallery filter-terrace eg-the-landscaper-lightbox-wrapper eg-post-id-636" data-date="1615900205">
                          <div class="esg-media-cover-wrapper">
                            <div class="esg-entry-media">
                              <img src="{{asset('themes/landing-pages/assets/images/garden-4-e.jpg')}}" data-no-lazy="1" alt="Theme Image" width="850" height="450">
                            </div>
                            <div class="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade">
                              <div class="esg-overlay esg-transition eg-the-landscaper-lightbox-container" data-transition="esg-none"></div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-8 esg-none esg-clear esg-line-break"></div>
                              <div class="esg-center eg-post-636 eg-the-landscaper-lightbox-element-31-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-falldown">
                                <a class="eg-the-landscaper-lightbox-element-31 eg-post-636 esgbox" data-thumb="{{asset('themes/landing-pages/assets/images/garden-4-e-200x106.jpg')}}" href="{{asset('themes/landing-pages/assets/images/garden-4-e.jpg')}}" data-width="850" data-height="450">
                                  <i class="eg-icon-search"></i>
                                </a>
                              </div>
                              <div class="esg-center eg-post-636 eg-the-landscaper-lightbox-element-24-a esg-transition" data-delay="0.05" data-duration="default" data-transition="esg-slidedown">
                                <a class="eg-the-landscaper-lightbox-element-24 eg-post-636" href="{{route('landscape-irrigation-gallery')}}" target="_self">Landscape Irrigation Gallery</a>
                              </div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-9 esg-none esg-clear esg-line-break"></div>
                            </div>
                          </div>
                        </li>
                        <li id="eg-5-post-id-638_1687" data-skin="the-landscaper-lightbox" class="filterall landscape-irrigation-gallery eg-the-landscaper-lightbox-wrapper eg-post-id-638" data-date="1615902793">
                          <div class="esg-media-cover-wrapper">
                            <div class="esg-entry-media">
                              <img src="{{asset('themes/landing-pages/assets/images/garden-7-e.jpg')}}" data-no-lazy="1" alt="Theme Image" width="850" height="450">
                            </div>
                            <div class="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade">
                              <div class="esg-overlay esg-transition eg-the-landscaper-lightbox-container" data-transition="esg-none"></div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-8 esg-none esg-clear esg-line-break"></div>
                              <div class="esg-center eg-post-638 eg-the-landscaper-lightbox-element-31-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-falldown">
                                <a class="eg-the-landscaper-lightbox-element-31 eg-post-638 esgbox" data-thumb="{{asset('themes/landing-pages/assets/images/garden-7-e-200x106.jpg')}}" href="{{asset('themes/landing-pages/assets/images/garden-7-e.jpg')}}" data-width="850" data-height="450">
                                  <i class="eg-icon-search"></i>
                                </a>
                              </div>
                              <div class="esg-center eg-post-638 eg-the-landscaper-lightbox-element-24-a esg-transition" data-delay="0.05" data-duration="default" data-transition="esg-slidedown">
                                <a class="eg-the-landscaper-lightbox-element-24 eg-post-638" href="{{route('landscape-irrigation-gallery')}}" target="_self">Landscape Irrigation Gallery</a>
                              </div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-9 esg-none esg-clear esg-line-break"></div>
                            </div>
                          </div>
                        </li>
                        <li id="eg-5-post-id-640_4738" data-skin="the-landscaper-lightbox" class="filterall drip-irrigation-gallery eg-the-landscaper-lightbox-wrapper eg-post-id-640" data-date="1615902964">
                          <div class="esg-media-cover-wrapper">
                            <div class="esg-entry-media">
                              <img src="{{asset('themes/landing-pages/assets/images/terrace-2-e.jpg')}}" data-no-lazy="1" alt="Theme Image" width="850" height="450">
                            </div>
                            <div class="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade">
                              <div class="esg-overlay esg-transition eg-the-landscaper-lightbox-container" data-transition="esg-none"></div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-8 esg-none esg-clear esg-line-break"></div>
                              <div class="esg-center eg-post-640 eg-the-landscaper-lightbox-element-31-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-falldown">
                                <a class="eg-the-landscaper-lightbox-element-31 eg-post-640 esgbox" data-thumb="{{asset('themes/landing-pages/assets/images/terrace-2-e-200x106.jpg')}}" href="{{asset('themes/landing-pages/assets/images/terrace-2-e.jpg')}}" data-width="850" data-height="450">
                                  <i class="eg-icon-search"></i>
                                </a>
                              </div>
                              <div class="esg-center eg-post-640 eg-the-landscaper-lightbox-element-24-a esg-transition" data-delay="0.05" data-duration="default" data-transition="esg-slidedown">
                                <a class="eg-the-landscaper-lightbox-element-24 eg-post-640" href="{{route('drip-irrigation-gallery')}}" target="_self">Drip Irrigation Gallery</a>
                              </div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-9 esg-none esg-clear esg-line-break"></div>
                            </div>
                          </div>
                        </li>
                        <li id="eg-5-post-id-2657_6633" data-skin="the-landscaper-lightbox" class="filterall sprinkler-irrigation-gallery eg-the-landscaper-lightbox-wrapper eg-post-id-2657" data-date="1615915623">
                          <div class="esg-media-cover-wrapper">
                            <div class="esg-entry-media">
                              <img src="{{asset('themes/landing-pages/assets/images/patio-4-e.jpg')}}" data-no-lazy="1" alt="Theme Image" width="850" height="450">
                            </div>
                            <div class="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade">
                              <div class="esg-overlay esg-transition eg-the-landscaper-lightbox-container" data-transition="esg-none"></div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-8 esg-none esg-clear esg-line-break"></div>
                              <div class="esg-center eg-post-2657 eg-the-landscaper-lightbox-element-31-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-falldown">
                                <a class="eg-the-landscaper-lightbox-element-31 eg-post-2657 esgbox" data-thumb="{{asset('themes/landing-pages/assets/images/patio-4-e-200x106.jpg')}}" href="{{asset('themes/landing-pages/assets/images/patio-4-e.jpg')}}" data-width="850" data-height="450">
                                  <i class="eg-icon-search"></i>
                                </a>
                              </div>
                              <div class="esg-center eg-post-2657 eg-the-landscaper-lightbox-element-24-a esg-transition" data-delay="0.05" data-duration="default" data-transition="esg-slidedown">
                                <a class="eg-the-landscaper-lightbox-element-24 eg-post-2657" href="{{route('sprinkler-irrigation-gallery')}}" target="_self">Sprinkler Irrigation Gallery</a>
                              </div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-9 esg-none esg-clear esg-line-break"></div>
                            </div>
                          </div>
                        </li>
                        <li id="eg-5-post-id-642_2602" data-skin="the-landscaper-lightbox" class="filterall sprinkler-irrigation-gallery filter-pond eg-the-landscaper-lightbox-wrapper eg-post-id-642" data-date="1615989505">
                          <div class="esg-media-cover-wrapper">
                            <div class="esg-entry-media">
                              <img src="{{asset('themes/landing-pages/assets/images/garden-pond-m.jpg')}}" data-no-lazy="1" alt="Theme Image" width="850" height="450">
                            </div>
                            <div class="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade">
                              <div class="esg-overlay esg-transition eg-the-landscaper-lightbox-container" data-transition="esg-none"></div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-8 esg-none esg-clear esg-line-break"></div>
                              <div class="esg-center eg-post-642 eg-the-landscaper-lightbox-element-31-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-falldown">
                                <a class="eg-the-landscaper-lightbox-element-31 eg-post-642 esgbox" data-thumb="{{asset('themes/landing-pages/assets/images/garden-pond-m-200x106.jpg')}}" href="{{asset('themes/landing-pages/assets/images/garden-pond-m.jpg')}}" data-width="850" data-height="450">
                                  <i class="eg-icon-search"></i>
                                </a>
                              </div>
                              <div class="esg-center eg-post-642 eg-the-landscaper-lightbox-element-24-a esg-transition" data-delay="0.05" data-duration="default" data-transition="esg-slidedown">
                                <a class="eg-the-landscaper-lightbox-element-24 eg-post-642" href="{{route('sprinkler-irrigation-gallery')}}" target="_self">Sprinkler Irrigation Gallery</a>
                              </div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-9 esg-none esg-clear esg-line-break"></div>
                            </div>
                          </div>
                        </li>
                        <li id="eg-5-post-id-644_4264" data-skin="the-landscaper-lightbox" class="filterall sprinkler-irrigation-gallery eg-the-landscaper-lightbox-wrapper eg-post-id-644" data-date="1615990062">
                          <div class="esg-media-cover-wrapper">
                            <div class="esg-entry-media">
                              <img src="{{asset('themes/landing-pages/assets/images/patio-2-e.jpg')}}" data-no-lazy="1" alt="Theme Image" width="850" height="450">
                            </div>
                            <div class="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade">
                              <div class="esg-overlay esg-transition eg-the-landscaper-lightbox-container" data-transition="esg-none"></div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-8 esg-none esg-clear esg-line-break"></div>
                              <div class="esg-center eg-post-644 eg-the-landscaper-lightbox-element-31-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-falldown">
                                <a class="eg-the-landscaper-lightbox-element-31 eg-post-644 esgbox" data-thumb="{{asset('themes/landing-pages/assets/images/patio-2-e-200x106.jpg')}}" href="{{asset('themes/landing-pages/assets/images/patio-2-e.jpg')}}" data-width="850" data-height="450">
                                  <i class="eg-icon-search"></i>
                                </a>
                              </div>
                              <div class="esg-center eg-post-644 eg-the-landscaper-lightbox-element-24-a esg-transition" data-delay="0.05" data-duration="default" data-transition="esg-slidedown">
                                <a class="eg-the-landscaper-lightbox-element-24 eg-post-644" href="{{route('sprinkler-irrigation-gallery')}}" target="_self">Sprinkler Irrigation Gallery</a>
                              </div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-9 esg-none esg-clear esg-line-break"></div>
                            </div>
                          </div>
                        </li>
                        <li id="eg-5-post-id-648_802" data-skin="the-landscaper-lightbox" class="filterall solar-tube-well-gallery eg-the-landscaper-lightbox-wrapper eg-post-id-648" data-date="1615990997">
                          <div class="esg-media-cover-wrapper">
                            <div class="esg-entry-media">
                              <img src="{{asset('themes/landing-pages/assets/images/garden-pond-3-e.jpg')}}" data-no-lazy="1" alt="Theme Image" width="850" height="450">
                            </div>
                            <div class="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade">
                              <div class="esg-overlay esg-transition eg-the-landscaper-lightbox-container" data-transition="esg-none"></div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-8 esg-none esg-clear esg-line-break"></div>
                              <div class="esg-center eg-post-648 eg-the-landscaper-lightbox-element-31-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-falldown">
                                <a class="eg-the-landscaper-lightbox-element-31 eg-post-648 esgbox" data-thumb="{{asset('themes/landing-pages/assets/images/garden-pond-3-e-200x106.jpg')}}" href="{{asset('themes/landing-pages/assets/images/garden-pond-3-e.jpg')}}" data-width="850" data-height="450">
                                  <i class="eg-icon-search"></i>
                                </a>
                              </div>
                              <div class="esg-center eg-post-648 eg-the-landscaper-lightbox-element-24-a esg-transition" data-delay="0.05" data-duration="default" data-transition="esg-slidedown">
                                <a class="eg-the-landscaper-lightbox-element-24 eg-post-648" href="{{route('solar-tube-well-gallery')}}" target="_self">Solar Tube Well Gallery</a>
                              </div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-9 esg-none esg-clear esg-line-break"></div>
                            </div>
                          </div>
                        </li>
                        <li id="eg-5-post-id-650_207" data-skin="the-landscaper-lightbox" class="filterall solar-tube-well-gallery eg-the-landscaper-lightbox-wrapper eg-post-id-650" data-date="1615991135">
                          <div class="esg-media-cover-wrapper">
                            <div class="esg-entry-media">
                              <img src="{{asset('themes/landing-pages/assets/images/garden-m.jpg')}}" data-no-lazy="1" alt="Theme Image" width="850" height="450">
                            </div>
                            <div class="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade">
                              <div class="esg-overlay esg-transition eg-the-landscaper-lightbox-container" data-transition="esg-none"></div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-8 esg-none esg-clear esg-line-break"></div>
                              <div class="esg-center eg-post-650 eg-the-landscaper-lightbox-element-31-a esg-transition" data-delay="0.1" data-duration="default" data-transition="esg-falldown">
                                <a class="eg-the-landscaper-lightbox-element-31 eg-post-650 esgbox" data-thumb="{{asset('themes/landing-pages/assets/images/garden-m-200x106.jpg')}}" href="{{asset('themes/landing-pages/assets/images/garden-m.jpg')}}" data-width="850" data-height="450">
                                  <i class="eg-icon-search"></i>
                                </a>
                              </div>
                              <div class="esg-center eg-post-650 eg-the-landscaper-lightbox-element-24-a esg-transition" data-delay="0.05" data-duration="default" data-transition="esg-slidedown">
                                <a class="eg-the-landscaper-lightbox-element-24 eg-post-650" href="{{route('solar-tube-well-gallery')}}" target="_self">Solar Tube Well Gallery</a>
                              </div>
                              <div class="esg-center eg-the-landscaper-lightbox-element-9 esg-none esg-clear esg-line-break"></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </article>
                  <div class="clear"></div>
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