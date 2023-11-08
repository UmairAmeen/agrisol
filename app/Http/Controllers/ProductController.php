<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\View\View;
use DB;
use Auth;
use DataTables;
use Illuminate\Http\RedirectResponse;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct()
    {
        //  $this->middleware('permission:product-list|product-create|product-edit|product-delete', ['only' => ['index','show']]);
        //  $this->middleware('permission:product-create', ['only' => ['create','store']]);
        //  $this->middleware('permission:product-edit', ['only' => ['edit','update']]);
        //  $this->middleware('permission:product-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return view('pages.products.index');
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // return view('products.create');
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $input['status'] = (isset($input['status']) && $input['status'] == 'on') ? 1 : 0;
        $input['added_by'] = Auth::id();

        try {
            DB::beginTransaction();

            Product::create($input);

            DB::commit();
            return response()->json(['message' => 'Product is successfully added','action'=>'redirect','do'=>url('/products')], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['message' => $e->getMessage(),'action'=>'redirect','do'=>url('/products')], 500);
        }
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json($product);
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return response()->json($product);
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $input = $request->all();
        $input['status'] = (isset($input['status']) && $input['status'] == 'on') ? 1 : 0;
        $input['updated_by'] = Auth::id();

        try {
            DB::beginTransaction();

            $product->update($input);

            DB::commit();
            return response()->json(['message' => 'Product is successfully updated','action'=>'redirect','do'=>url('/products')], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['message' => $e->getMessage(),'action'=>'redirect','do'=>url('/products')], 500);
        }
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        try {
            DB::beginTransaction();

            $product->update(['deleted_by' => Auth::id()]);
            $product->delete();

            DB::commit();
            return response()->json(['message' => 'Product is successfully deleted','action'=>'redirect','do'=>url('/products')], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['message' => $e->getMessage(),'action'=>'redirect','do'=>url('/products')], 500);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function datatable(Request $request)
    {
        $data = Product::all();
        return Datatables::of($data)
        ->editColumn('status', function ($row) {
            $status = $row->status ? '<span class="badge bg-label-success rounded-pill">Active</span>' : '<span class="badge bg-label-danger rounded-pill">In-Active</span>';
            return $status;
        })
        ->addColumn('actions', function ($row) {
            return '<div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon show-record" data-id="'.$row->id.'" data-bs-toggle="modal" data-bs-target="#show-product"><i class="mdi mdi-eye-outline"></i></button><button class="btn btn-sm btn-icon edit-record" data-id="'.$row->id.'" data-bs-toggle="offcanvas" data-bs-target="#product_offcanvas"><i class="mdi mdi-pencil-outline"></i></button><button class="btn btn-sm btn-icon delete-record" data-id="'.$row->id.'"><i class="mdi mdi-delete-outline"></i></button></div>';
        })
        ->rawColumns(['status', 'actions'])
        ->make(true);
    }
}
