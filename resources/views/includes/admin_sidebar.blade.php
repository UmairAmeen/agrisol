<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">

  <!-- ! Hide app brand if navbar-full -->
    <div class="app-brand demo">
    <a href="{{ url('dashboard') }}" class="app-brand-link">
      <span class="app-brand-logo demo"><span>
      <img src="{{asset('images/logo/logo.png')}}" width="60">
    </a>

    <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.4854 4.88844C11.0081 4.41121 10.2344 4.41121 9.75715 4.88844L4.51028 10.1353C4.03297 10.6126 4.03297 11.3865 4.51028 11.8638L9.75715 17.1107C10.2344 17.5879 11.0081 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96672 11.8638C7.48942 11.3865 7.48942 10.6126 7.96672 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z" fill="currentColor" fill-opacity="0.6" />
        <path d="M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1192 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0778 11.8638C13.6005 11.3865 13.6005 10.6126 14.0778 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1192 4.41121 16.3455 4.41121 15.8683 4.88844Z" fill="currentColor" fill-opacity="0.38" />
      </svg>
    </a>
  </div>
  
  <div class="menu-inner-shadow"></div>

<ul class="menu-inner py-1">
  <li class="menu-item ">
    <a href="app/ecommerce/dashboard.html" class="menu-link" >
      <div>Dashboard</div>
    </a>
  </li>
  <li class="menu-item ">
    <a href="javascript:void(0)" class="menu-link menu-toggle" >
      <div>Products</div>
    </a>
    <ul class="menu-sub">
      <li class="menu-item ">
        <a href="app/ecommerce/product/list.html" class="menu-link" >
          <div>Product List</div>
        </a>
      </li>
      <li class="menu-item ">
        <a href="app/ecommerce/product/add.html" class="menu-link" >
          <div>Add Product</div>
        </a>
      </li>
      <li class="menu-item ">
        <a href="app/ecommerce/product/category.html" class="menu-link" >
          <div>Category List</div>
        </a>
        </li>
      </ul>
    </li>
    <li class="menu-item ">
    <a href="javascript:void(0)" class="menu-link menu-toggle" >
      <div>Order</div>
    </a>
    <ul class="menu-sub">
      <li class="menu-item ">
        <a href="app/ecommerce/order/list.html" class="menu-link" >
          <div>Order List</div>
        </a>
      </li>
      <li class="menu-item ">
        <a href="app/ecommerce/order/details.html" class="menu-link" >
          <div> Order Details</div>
        </a>
      </li>
    </ul>
  </li>
  <li class="menu-item ">
    <a href="javascript:void(0)" class="menu-link menu-toggle" >
      <div>Customer</div>
    </a>
    <ul class="menu-sub">
      <li class="menu-item ">
        <a href="app/ecommerce/customer/all.html" class="menu-link" >
          <div>All Customers</div>
        </a>
      </li>
      <li class="menu-item ">
        <a href="javascript:void(0)" class="menu-link menu-toggle" >
          <div>Customer Details</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item ">
            <a href="app/ecommerce/customer/details/overview.html" class="menu-link" >
              <div>Overview</div>
            </a>
          </li>
          <li class="menu-item ">
            <a href="app/ecommerce/customer/details/security.html" class="menu-link" >
              <div>Security</div>
            </a>
          </li>
          <li class="menu-item ">
            <a href="app/ecommerce/customer/details/billing.html" class="menu-link" >
              <div>Address &amp; Billing</div>
            </a>
          </li>
          <li class="menu-item ">
            <a href="app/ecommerce/customer/details/notifications.html" class="menu-link" >
              <div>Notifications</div>
            </a>
          </li>
        </ul>
          </li>
        </ul>
      </li>
      <li class="menu-item ">
        <a href="app/ecommerce/manage/reviews.html" class="menu-link" >
          <div>Manage Reviews</div>
        </a>
      </li>
      <li class="menu-item ">
        <a href="app/ecommerce/referrals.html" class="menu-link" >
          <div>Referrals</div>
        </a>
      </li>
      <li class="menu-item ">
        <a href="javascript:void(0)" class="menu-link menu-toggle" >
            <div>Settings</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item ">
            <a href="app/ecommerce/settings/details.html" class="menu-link" >
              <div>Store details</div>
            </a>
          </li>
          <li class="menu-item ">
            <a href="app/ecommerce/settings/payments.html" class="menu-link" >
              <div>Payments</div>
            </a>
          </li>
          <li class="menu-item ">
            <a href="app/ecommerce/settings/checkout.html" class="menu-link" >
              <div>Checkout</div>
            </a>
          </li>
          <li class="menu-item ">
            <a href="app/ecommerce/settings/shipping.html" class="menu-link" >
              <div>Shipping &amp; Delivery</div>
            </a>
            </li>
            <li class="menu-item ">
              <a href="app/ecommerce/settings/locations.html" class="menu-link" >
                <div>Locations</div>
              </a>
            </li>
            <li class="menu-item ">
              <a href="app/ecommerce/settings/notifications.html" class="menu-link" >
                <div>Notifications</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
</aside>