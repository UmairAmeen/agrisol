<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LandingPagesController extends Controller
{
    /**
     * Display a Home Page.
     *
     */
    public function home()
    {
        return view('landing_pages.home');
        // return view('roles.index',compact('roles'));
    }

    /**
     * Display a Bussiness Page.
     *
     */
    public function bussiness()
    {
        return view('landing_pages.bussiness');
    }

    public function landscape_irrigation_system()
    {
        return view('landing_pages.landscape-irrigation-system');
    }

    public function drip_irrigation_system()
    {
        return view('landing_pages.drip-irrigation-system');
    }

    public function sprinkler_irrigation_system()
    {
        return view('landing_pages.sprinkler-irrigation-system');
    }

    public function solar_tube_well()
    {
        return view('landing_pages.solar-tube-well');
    }

    public function solar_electric_system()
    {
        return view('landing_pages.solar-electric-system');
    }



    public function products()
    {
        return view('landing_pages.products');
    }

    public function filters()
    {
        return view('landing_pages.filters');
    }

    public function drip_irrigation()
    {
        return view('landing_pages.drip-irrigation');
    }

    public function sprinkler_irrigation()
    {
        return view('landing_pages.sprinkler-irrigation');
    }

    public function automated_irrigation()
    {
        return view('landing_pages.automated-irrigation');
    }



    public function services()
    {
        return view('landing_pages.services');
    }

    public function engineering_designs()
    {
        return view('landing_pages.engineering-designs');
    }

    public function consultancy()
    {
        return view('landing_pages.consultancy');
    }

    public function professional_development_courses_training()
    {
        return view('landing_pages.professional-development-course-training');
    }



    public function galleries()
    {
        return view('landing_pages.galleries');
    }

    public function landscape_irrigation_gallery()
    {
        return view('landing_pages.landscape-irrigation-gallery');
    }

    public function drip_irrigation_gallery()
    {
        return view('landing_pages.drip-irrigation-gallery');
    }

    public function sprinkler_irrigation_gallery()
    {
        return view('landing_pages.sprinkler-irrigation-gallery');
    }

    public function solar_tube_well_gallery()
    {
        return view('landing_pages.solar-tube-well-gallery');
    }

    public function professional_training_gallery()
    {
        return view('landing_pages.professional-training-gallery');
    }



    public function contact_us()
    {
        return view('landing_pages.contact-us');
    }

    public function about_us()
    {
        return view('landing_pages.about-us');
    }

    public function make_an_appointment()
    {
        return view('landing_pages.make-an-appointment');
    }
}
