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
}
