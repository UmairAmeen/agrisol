@extends('layouts.admin_app')

@section('admin-content')
<div class="container-xxl flex-grow-1 container-p-y">
   <h4 class="py-3 mb-4">
    <span class="text-muted fw-light">Products List</span>
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
            <th>Title</th>
            <th>Status</th>
			<th>Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
  <!-- Offcanvas to add new product -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="product_offcanvas" aria-labelledby="product_offcanvas_label">
    <!-- Offcanvas Header -->
    <div class="offcanvas-header py-4">
      <h5 id="product_offcanvas_label" class="offcanvas-title">Add Product</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <!-- Offcanvas Body -->
    <div class="offcanvas-body border-top">
      <form class="pt-0 needs-validation" action="{{ route('products.store') }}" method="POST">
	  @csrf
        <!-- Title -->

        <div class="form-floating form-floating-outline mb-4 validation-field">
          <input type="text" class="form-control" id="title" placeholder="Enter product title" name="title"
		  	data-fv-notempty="true"
            data-fv-notempty-message="Please enter product title"
		  />
          <label for="title">Title</label>
        </div>

        <!-- Status -->
        <div class="d-flex justify-content-between align-items-center border-top py-3">
		<p class="mb-0">Status</p>
		<div class="w-25 d-flex justify-content-end">
			<label class="switch switch-success me-4 pe-2">
			<input type="checkbox" class="switch-input" id="status" name="status" checked>
			<span class="switch-toggle-slider">
				<span class="switch-on">
				<span class="switch-off"></span>
				</span>
			</span>
			</label>
		</div>
		</div>

        <!-- Submit and reset -->
        <div class="border-top py-3">
          <button type="submit" id="product_submit" class="btn btn-success me-sm-3 me-1 data-submit">Add</button>
          <button type="reset" class="btn btn-outline-danger" data-bs-dismiss="offcanvas">Discard</button>
        </div>
      </form>
    </div>
  </div>
  <!-- Show Product Modal -->
<div class="modal fade" id="show-product" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog" role="document">
	<div class="modal-content">
		<div class="modal-header">
		<h4 class="modal-title">Details of Product</h4>
		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
		<table class="table">
			<tbody>
			<tr data-dt-row="8" data-dt-column="2">
				<td>Title:</td>
				<td>
				<div class="d-flex justify-content-start align-items-center product-name">
					<div class="d-flex flex-column">
						<span id="show_title"></span>
					</div>
				</div>
				</td>
			</tr>
			<tr data-dt-row="8" data-dt-column="8">
				<td>Status:</td>
				<td>
				<span id="show_status" class="badge rounded-pill" text-capitalized=""></span>
				</td>
			</tr>
			</tbody>
		</table>
		</div>
	</div>
	</div>
</div>
<!--/ Show Product Modal -->
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
			ajax: "/products_datatable",
			columns: [{
				data: "id"
			},{
				data: "id"
			}, {
				data: "title"
			}, {
				data: "status"
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
				searchPlaceholder: "Search Product",
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
				text: '<i class="mdi mdi-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add Product</span>',
				className: "add-new btn btn-success ms-n1",
				attr: {
					"data-bs-toggle": "offcanvas",
					"data-bs-target": "#product_offcanvas"
				}
			}]
		});
		$(document).on("click", ".delete-record", (function() {
			var e = $(this).data("id"),
				t = $(".dtr-bs-modal.show");
			t.length && t.modal("hide"), Swal.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: !0,
				confirmButtonText: "Yes, delete it!",
				customClass: {
					confirmButton: "btn btn-success me-3",
					cancelButton: "btn btn-label-secondary"
				},
				buttonsStyling: !1
			}).then((function(t) {
				t.value ? (
					$.ajax({
					type: "DELETE",
					url: "{{ url('products') }}/"+e+"",
					data: {'_token':'{{ csrf_token() }}'},
					success: function() {
						o.draw();
						Swal.fire({
						icon: "success",
						title: "Deleted!",
						text: "The Product has been deleted!",
						customClass: {
							confirmButton: "btn btn-success"
						}
					})
					},
					error: function(e) {
						console.log(e)
					}
				})) : t.dismiss === Swal.DismissReason.cancel && Swal.fire({
					title: "Cancelled",
					text: "The Product is not deleted!",
					icon: "error",
					customClass: {
						confirmButton: "btn btn-success"
					}
				})
			}))
		})), $(document).on("click", ".edit-record", (function() {
			var e = $(this).data("id"),
				t = $(".dtr-bs-modal.show"),
				product_offcanvas = $("#product_offcanvas"),
				offcanvas_label = $(product_offcanvas).find("#product_offcanvas_label"),
				form = $(product_offcanvas).find("form");
				t.length && t.modal("hide"), $(offcanvas_label).html("Edit Product"), $.get("{{  url('products') }}/"+e+"/edit", (function(e) {
					$(form).attr("action","{{ url('products') }}/"+e.id+""),$(form).attr("method","PUT"),
					$(form).find("#title").val(e.title), $(form).find("#status").prop("checked", e.status === 1), $(form).find("#product_submit").html("Update")
				}))
		})), $(".add-new").on("click", (function() {
			var product_offcanvas = $("#product_offcanvas"),
			offcanvas_label = $(product_offcanvas).find("#product_offcanvas_label"),
			form = $(product_offcanvas).find("form");
			$(offcanvas_label).html("Add Product"), $(form).attr("action","{{ route('products.store') }}"),$(form).attr("method","POST"),
			$(form).find("#title").val(""), $(form).find("#status").prop("checked", true), $(form).find("#product_submit").html("Add");
		})), $(document).on("click", ".show-record", (function() {
			var e = $(this).data("id"),
				t = $(".dtr-bs-modal.show");
				t.length && t.modal("hide"), $.get("{{  url('products') }}/"+e, (function(e) {
					$("#show_title").html(e.title);
					if(e.status === 1)
					{
						$("#show_status").removeClass("bg-label-danger");
					 	$("#show_status").html("Active").addClass("bg-label-success");
					}
					else{
						$("#show_status").removeClass("bg-label-success");
						$("#show_status").html("In-Active").addClass("bg-label-danger");
					}
				}))
		}));
		$(".dataTables_length").addClass("mt-0 mt-md-3"), $(".dt-action-buttons").addClass("pt-0"), $(".dt-buttons").addClass("d-flex flex-wrap")
	}
	setTimeout((() => {
		$(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
	}), 300)
}));
</script>
@endsection