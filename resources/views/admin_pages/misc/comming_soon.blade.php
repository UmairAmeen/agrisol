@extends('layouts.admin_app')

@section('admin-content')
  <div class="misc-wrapper">
    <h3 class="mb-2 mx-2">We are launching soon 🚀</h3>
    <p class="mb-4 mx-2">We're creating something awesome. Please subscribe to get notified when it's ready!</p>
    <form class="mb-3 needs-validation" action="{{ route('notify_user') }}" method="POST">
      @csrf
      <div class="mb-0 d-flex gap-3">
        <input type="text" class="form-control" id="email" name="email" placeholder="Enter your email" autofocus
          data-fv-notempty="true"
          data-fv-notempty-message="Please enter your email"
          data-fv-emailaddress="true"
          data-fv-emailaddress-message="Please enter a valid email address"
        />
        <button type="submit" class="btn btn-success">Notify</button>
      </div>
    </form>
    <div class="d-flex justify-content-center mt-5">
      <img src="{{asset('themes/admin-panel/assets/images/illustrations/misc-coming-soon-object.png')}}" alt="misc-coming-soon" class="img-fluid misc-object d-none d-lg-inline-block" width="170">
      <img src="{{asset('themes/admin-panel/assets/images/illustrations/misc-bg-light.png')}}" alt="misc-coming-soon" class="misc-bg d-none d-lg-inline-block" data-app-light-img="illustrations/misc-bg-light.png" data-app-dark-img="illustrations/misc-bg-dark.html">
      <img src="{{asset('themes/admin-panel/assets/images/illustrations/misc-coming-soon-illustration.png')}}" alt="misc-coming-soon" class="img-fluid zindex-1" width="190">
    </div>
  </div>
@endsection