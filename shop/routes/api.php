<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// The ProductType API end points
Route::get('/producttype/{id?}', '\App\Http\Controllers\ProductTypeController@index')
    ->where('id', '[0-9]+');


// The Product API end points
Route::get('product/{id?}', '\App\Http\Controllers\ProductController@index')
    ->where('id', '[0-9+]');