<?php

namespace App\Http\Controllers;

use App\Model\Product;
use App\Http\Filters\ProductFilter;
use App\Http\Transformers\ProductTransformer;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class ProductController extends Controller
{
    private $fractal = null;

    // The constructor for the new Product controller
    public function __construct()
    {
        $this->fractal = new Manager();
    }

    /**
     * Display a listing of Products.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $id=0)
    {
        // Build our query based on the url and query string, then execute it
        if($id > 0)
        {
            $products = Product::where('id', $id)->get();
        }
        else
        {
            $products = Product::query()
                ->filter(new ProductFilter($request))
                ->get();
        }

        // Transform our results and return it
        $transformedData = $this->fractal
            ->createData(new Collection($products, new ProductTransformer))
            ->toArray();

        return $transformedData;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
