<?php

namespace App\Model;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Model;

class ProductType extends Model
{
    // Implement the filterable trait
    use Filterable;

    // The table that this model represents
    protected $table = 'product_type';

    // The relation to the Product table
    public function product()
    {
        $this->hasMany('App/Product');
    }
}
