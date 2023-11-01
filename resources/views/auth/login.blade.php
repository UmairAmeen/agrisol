@extends('layouts.admin_app')

@section('admin-content')
    <!-- Login -->
    <div class="card p-2">
        <!-- Logo -->
        <div class="app-brand justify-content-center mt-5">
          <a href="{{ url('/') }}" class="app-brand-link gap-2">
            <span class="app-brand-logo demo"><span>
            <img src="{{asset('images/logo/logo.png')}}" width="150">
          </a>
        </div>
        <!-- /Logo -->

        <div class="card-body mt-2">
          <h4 class="mb-2">Welcome to Smart Agrisol! 👋</h4>
          <p class="mb-4">Please sign-in to your account and start the adventure</p>

          <form class="mb-3 needs-validation" action="{{ route('notify_user') }}" method="POST">
            @csrf
            <div class="form-floating form-floating-outline mb-3">
            <input type="text" class="form-control" id="email" name="email" placeholder="Enter your email" autofocus
              data-fv-notempty="true"
              data-fv-notempty-message="Please enter your email"
              data-fv-emailaddress="true"
              data-fv-emailaddress-message="Please enter a valid email address"
            />
              <label for="email">Email</label>
            </div>
            <div class="mb-3">
              <div class="form-password-toggle">
                <div class="input-group input-group-merge">
                  <div class="form-floating form-floating-outline">
                    <input type="password" id="password" class="form-control" name="password" placeholder="..........." aria-describedby="password"
                      data-fv-notempty="true"
                      data-fv-notempty-message="Please enter your password"
                      data-fv-stringlength="true"
                      data-fv-stringlength-min="6"
                      data-fv-stringlength-message="Password must be more than 6 characters"
                    />
                    <label for="password">Password</label>
                  </div>
                  <span class="input-group-text cursor-pointer"><i class="mdi mdi-eye-off-outline"></i></span>
                </div>
              </div>
            </div>
            <div class="mb-3 d-flex justify-content-between">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="remember-me" name="remember" {{ old('remember') ? 'checked' : '' }}>
                <label class="form-check-label" for="remember-me">
                  Remember Me
                </label>
              </div>
              @if (Route::has('password.request'))
              <a href="{{ route('password.request') }}" class="float-end mb-1">
                <span>Forgot Password?</span>
              </a>
              @endif
            </div>
            <div class="mb-3">
              <button class="btn btn-success d-grid w-100" type="submit">Sign in</button>
            </div>
          </form>
          @if (Route::has('register'))
          <p class="text-center">
            <span>New on our platform?</span>
            <a href="{{ route('register') }}">
              <span>Create an account</span>
            </a>
          </p>

          <div class="divider my-4">
            <div class="divider-text">or</div>
          </div>

          <div class="d-flex justify-content-center gap-2">
            <a href="javascript:;" class="btn btn-icon btn-lg rounded-pill btn-text-facebook">
              <i class="tf-icons mdi mdi-24px mdi-facebook"></i>
            </a>

            <a href="javascript:;" class="btn btn-icon btn-lg rounded-pill btn-text-twitter">
              <i class="tf-icons mdi mdi-24px mdi-twitter"></i>
            </a>

            <a href="javascript:;" class="btn btn-icon btn-lg rounded-pill btn-text-github">
              <i class="tf-icons mdi mdi-24px mdi-github"></i>
            </a>

            <a href="javascript:;" class="btn btn-icon btn-lg rounded-pill btn-text-google-plus">
              <i class="tf-icons mdi mdi-24px mdi-google"></i>
            </a>
            @endif
          </div>
        </div>
      </div>
      <!-- /Login -->
      <img alt="mask" src="{{asset('themes/admin-panel/assets/images/illustrations/auth-basic-login-mask-light.png')}}" class="authentication-image d-none d-lg-block" data-app-light-img="illustrations/auth-basic-login-mask-light.png" data-app-dark-img="illustrations/auth-basic-login-mask-dark.html" />
@endsection