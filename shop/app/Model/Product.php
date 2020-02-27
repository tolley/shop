<?php

namespace App\Model;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // Implement the filterable trait
    use Filterable;

    // The table that this model represents
    protected $table = 'product';

    // The relation to the ProductType table
    public function productType()
    {
        return $this->hasOne('App\ProductType');
    }
}
