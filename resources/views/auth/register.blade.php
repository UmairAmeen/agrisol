@extends('layouts.admin_app')

@section('auth-content')
    <!-- Register Card -->
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
          <h4 class="mb-2">Adventure starts here 🚀</h4>
          <p class="mb-4">Make your app management easy and fun!</p>

          <form class="mb-3 needs-validation" action="{{ route('register') }}" method="POST">
            @csrf
            <div class="form-floating form-floating-outline mb-3">
              <input type="text" class="form-control" id="username" name="username" placeholder="Enter your username" autofocus
                data-fv-notempty="true"
                data-fv-notempty-message="Please enter username"
                data-fv-stringlength="true"
                data-fv-stringlength-min="6"
                data-fv-stringlength-message="Username must be more than 6 characters"
              />
              <label for="username">Username</label>
            </div>
            <div class="form-floating form-floating-outline mb-3">
              <input type="text" class="form-control" id="email" name="email" placeholder="Enter your email"
                data-fv-notempty="true"
                data-fv-notempty-message="Please enter your email"
                data-fv-emailaddress="true"
                data-fv-emailaddress-message="Please enter a valid email address"
              />
              <label for="email">Email</label>
            </div>
            <div class="mb-3 form-password-toggle">
              <div class="input-group input-group-merge">
                <div class="form-floating form-floating-outline">
                  <input type="password" id="password" class="form-control" name="password" placeholder="..........."
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
            <div class="mb-3 form-password-toggle">
            <div class="input-group input-group-merge">
                <div class="form-floating form-floating-outline">
                <input type="password" id="confirm_password" name="confirm_password" class="form-control" placeholder="..........."
                  data-fv-notempty="true"
                  data-fv-notempty-message="Please confirm password"
                  data-fv-stringlength="true"
                  data-fv-stringlength-min="6"
                  data-fv-stringlength-message="Password must be more than 6 characters"
                  data-fv-identical="true"
                  data-fv-comparefield-name="password"
                  data-fv-identical-message="The password and its confirm are not the same"
                />
                <label for="confirm_password">Confirm Password</label>
                </div>
                <span class="input-group-text cursor-pointer"><i class="mdi mdi-eye-off-outline"></i></span>
            </div>
            </div>

            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="terms-conditions" name="terms"
                  data-fv-notempty="true"
                  data-fv-notempty-message="Please agree terms & conditions"
                
                />
                <label class="form-check-label" for="terms-conditions">
                  I agree to
                  <a href="javascript:void(0);">privacy policy & terms</a>
                </label>
              </div>
            </div>
            <button class="btn btn-success d-grid w-100" type="submit">
              Sign up
            </button>
          </form>

          <p class="text-center">
            <span>Already have an account?</span>
            <a href="login-basic.html">
              <span>Sign in instead</span>
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
          </div>
        </div>
      </div>
      <!-- Register Card -->
      <img alt="mask" src="{{asset('themes/admin-panel/assets/images/illustrations/auth-basic-register-mask-light.png')}}" class="authentication-image d-none d-lg-block" data-app-light-img="illustrations/auth-basic-register-mask-light.png" data-app-dark-img="illustrations/auth-basic-register-mask-dark.html" />
<!--/ Content -->
@endsection