@extends('layouts.admin_app')

@section('admin-content')
  <!-- Content -->
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row gy-4 mb-4">
      <div class="col-md-12 col-lg-8">
        <div class="card h-100">
          <div class="d-flex align-items-end row">
            <div class="col-md-6 order-2 order-md-1">
              <div class="card-body">
                <h4 class="card-title pb-xl-2">Hi {{auth()->user()->name}}🎉</h4>
                <p class="mb-0">Dasboard does not complete yet.</p>
                <p>Check your Site landing Pages</p>
                <a href="#" class="btn btn-success">View Your Site</a>
              </div>
            </div>
            <div class="col-md-6 text-center text-md-end order-1 order-md-2">
              <div class="card-body pb-0 px-0 px-md-4 ps-0">
                <img src="{{asset('themes/admin-panel/assets/images/illustrations/illustration-john-light.png')}}" height="180" alt="View Profile" data-app-light-img="illustrations/illustration-john-light.png" data-app-dark-img="illustrations/illustration-john-dark.html">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / Content -->
@endsection