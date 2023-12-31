@extends('layouts.admin_app')

@section('admin-content')
<div class="container-xxl flex-grow-1 container-p-y">
   <h4 class="py-3 mb-4">
    <span class="text-muted fw-light">Users List</span>
  </h4>

<!-- Product List Widget -->

  <!-- <div class="card mb-4">
    <div class="card-widget-separator-wrapper">
      <div class="card-body card-widget-separator">
        <div class="row gy-4 gy-sm-1">
          <div class="col-sm-6 col-lg-3">
            <div class="d-flex justify-content-between align-items-start card-widget-1 border-end pb-3 pb-sm-0">
              <div>
                <p class="mb-2">In-store Sales</p>
                <h4 class="mb-2">$5,345.43</h4>
                <p class="mb-0"><span class="me-2">5k orders</span><span class="badge rounded-pill bg-label-success">+5.7%</span></p>
              </div>
              <div class="avatar me-sm-4">
                <span class="avatar-initial rounded bg-label-secondary">
                  <i class="mdi mdi-home-outline mdi-24px"></i>
                </span>
              </div>
            </div>
            <hr class="d-none d-sm-block d-lg-none me-4">
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="d-flex justify-content-between align-items-start card-widget-2 border-end pb-3 pb-sm-0">
              <div>
                <p class="mb-2">Website Sales</p>
                <h4 class="mb-2">$674,347.12</h4>
                <p class="mb-0"><span class="me-2">21k orders</span><span class="badge rounded-pill bg-label-success">+12.4%</span></p>
              </div>
              <div class="avatar me-lg-4">
                <span class="avatar-initial rounded bg-label-secondary">
                  <i class="mdi mdi-laptop mdi-24px"></i>
                </span>
              </div>
            </div>
            <hr class="d-none d-sm-block d-lg-none">
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="d-flex justify-content-between align-items-start border-end pb-3 pb-sm-0 card-widget-3">
              <div>
                <p class="mb-2">Discount</p>
                <h4 class="mb-2">$14,235.12</h4>
                <p class="mb-0">6k orders</p>
              </div>
              <div class="avatar me-sm-4">
                <span class="avatar-initial rounded bg-label-secondary">
                  <i class="mdi mdi-wallet-giftcard mdi-24px"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <p class="mb-2">Affiliate</p>
                <h4 class="mb-2">$8,345.23</h4>
                <p class="mb-0"><span class="me-2">150 orders</span><span class="badge rounded-pill bg-label-danger">-3.5%</span></p>
              </div>
              <div class="avatar">
                <span class="avatar-initial rounded bg-label-secondary">
                  <i class="mdi mdi-currency-usd mdi-24px"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- Product List Table -->
  <div class="card">
    <!-- <div class="card-header">
      <h5 class="card-title">Filter</h5>
      <div class="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
        <div class="col-md-4 product_status"></div>
        <div class="col-md-4 product_category"></div>
        <div class="col-md-4 product_stock"></div>
      </div>
    </div> -->
    <div class="card-datatable table-responsive">
      <table class="datatables-products table">
        <thead class="table-light">
          <tr>
			<th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Email Address</th>
			<th>Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>
@endsection

@section('script')

<script>
  "use strict";
$((function() {
	let t, e, n;
	isDarkStyle ? (t = config.colors_dark.borderColor, e = config.colors_dark.bodyBg, n = config.colors_dark.headingColor) : (t = config.colors.borderColor, e = config.colors.bodyBg, n = config.colors.headingColor);
    
	var a = $(".datatables-products"),
		s = "{{route('products.create')}}";
	if (a.length) {
		a.DataTable({
			ajax: "/users_datatable",
			columns: [{
				data: "id"
			},{
				data: "id"
			}, {
				data: "name"
			}, {
				data: "email"
			},{
				data: "actions", "orderable": false, "searchable": false 
			}],
			columnDefs: [
			{
				targets: 0,
				orderable: !1,
				checkboxes: {
					selectAllRender: '<input type="checkbox" class="form-check-input">'
				},
				render: function() {
					return '<input type="checkbox" class="dt-checkboxes form-check-input" >'
				},
				searchable: !1
			}],
			order: [1, "asc"],
			dom: '<"card-header d-flex border-top rounded-0 flex-wrap py-md-0"<"me-5 ms-n2"f><"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-3 mb-sm-0 gap-3"lB>>>t<"row mx-1"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
			lengthMenu: [7, 10, 20, 50, 70, 100],
			language: {
				sLengthMenu: "_MENU_",
				search: "",
				searchPlaceholder: "Search User",
				info: "Displaying _START_ to _END_ of _TOTAL_ entries"
			},
			buttons: [{
				extend: "collection",
				className: "btn btn-label-secondary dropdown-toggle me-3",
				text: '<i class="mdi mdi-export-variant me-1"></i><span class="d-none d-sm-inline-block">Export </span>',
				buttons: [{
					extend: "print",
					text: '<i class="mdi mdi-printer-outline me-1" ></i>Print',
					className: "dropdown-item",
					exportOptions: {
						columns: [1, 2, 3, 4, 5],
						format: {
							body: function(t, e, n) {
								if (t.length <= 0) return t;
								var a = $.parseHTML(t),
									s = "";
								return $.each(a, (function(t, e) {
									void 0 !== e.classList && e.classList.contains("product-name") ? s += e.lastChild.firstChild.textContent : void 0 === e.innerText ? s += e.textContent : s += e.innerText
								})), s
							}
						}
					},
					customize: function(a) {
						$(a.document.body).css("color", n).css("border-color", t).css("background-color", e), $(a.document.body).find("table").addClass("compact").css("color", "inherit").css("border-color", "inherit").css("background-color", "inherit")
					}
				}, {
					extend: "csv",
					text: '<i class="mdi mdi-file-document-outline me-1" ></i>Csv',
					className: "dropdown-item",
					exportOptions: {
						columns: [1, 2, 3, 4, 5],
						format: {
							body: function(t, e, n) {
								if (t.length <= 0) return t;
								var a = $.parseHTML(t),
									s = "";
								return $.each(a, (function(t, e) {
									void 0 !== e.classList && e.classList.contains("product-name") ? s += e.lastChild.firstChild.textContent : void 0 === e.innerText ? s += e.textContent : s += e.innerText
								})), s
							}
						}
					}
				}, {
					extend: "excel",
					text: '<i class="mdi mdi-file-excel-outline me-1"></i>Excel',
					className: "dropdown-item",
					exportOptions: {
						columns: [1, 2, 3, 4, 5],
						format: {
							body: function(t, e, n) {
								if (t.length <= 0) return t;
								var a = $.parseHTML(t),
									s = "";
								return $.each(a, (function(t, e) {
									void 0 !== e.classList && e.classList.contains("product-name") ? s += e.lastChild.firstChild.textContent : void 0 === e.innerText ? s += e.textContent : s += e.innerText
								})), s
							}
						}
					}
				}, {
					extend: "pdf",
					text: '<i class="mdi mdi-file-pdf-box me-1"></i>Pdf',
					className: "dropdown-item",
					exportOptions: {
						columns: [1, 2, 3, 4, 5],
						format: {
							body: function(t, e, n) {
								if (t.length <= 0) return t;
								var a = $.parseHTML(t),
									s = "";
								return $.each(a, (function(t, e) {
									void 0 !== e.classList && e.classList.contains("product-name") ? s += e.lastChild.firstChild.textContent : void 0 === e.innerText ? s += e.textContent : s += e.innerText
								})), s
							}
						}
					}
				}, {
					extend: "copy",
					text: '<i class="mdi mdi-content-copy me-1"></i>Copy',
					className: "dropdown-item",
					exportOptions: {
						columns: [1, 2, 3, 4, 5],
						format: {
							body: function(t, e, n) {
								if (t.length <= 0) return t;
								var a = $.parseHTML(t),
									s = "";
								return $.each(a, (function(t, e) {
									void 0 !== e.classList && e.classList.contains("product-name") ? s += e.lastChild.firstChild.textContent : void 0 === e.innerText ? s += e.textContent : s += e.innerText
								})), s
							}
						}
					}
				}]
			}, {
				text: '<i class="mdi mdi-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add User</span>',
				className: "add-new btn btn-success ms-n1",
				action: function() {
					window.location.href = s
				}
			}]
		});
		$(".dataTables_length").addClass("mt-0 mt-md-3"), $(".dt-action-buttons").addClass("pt-0"), $(".dt-buttons").addClass("d-flex flex-wrap")
	}
	setTimeout((() => {
		$(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
	}), 300)
}));
</script>
@endsection