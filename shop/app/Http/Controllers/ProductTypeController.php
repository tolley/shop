<?php

namespace App\Http\Controllers;

use App\Model\ProductType;
use App\Http\Filters\ProductTypeFilter;
use App\Http\Transformers\ProductTypeTransformer;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;


use Illuminate\Support\Facades\DB;

class ProductTypeController extends Controller
{

    private $fractal;
    
    /**
     * The constructor for the ProductTypeController
     */
    public function __construct() 
    {
        $this->fractal = new Manager();
    }

    /**
     * Display a listing of ProductTypes.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $id=0)
    {
        // Build our query based on the url and query string, then execute it
        if($id > 0)
        {
            $productTypes = ProductType::where('id', $id)->get();
        }
        else
        {
            $productTypes = ProductType::query()
                ->filter(new ProductTypeFilter($request))
                ->get();
        }

        // Transform our results and return it
        $transformedData = $this->fractal
            ->createData(new Collection($productTypes, new ProductTypeTransformer))
            ->toArray();
        
        // Send a header for testing
        header('Access-Control-Allow-Origin: *');
        
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
     * Show the form for editing the specified resource.
     *
     * @param  \App\ProductType  $productType
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductType $productType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProductType  $productType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductType $productType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProductType  $productType
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductType $productType)
    {
        //
    }
}
