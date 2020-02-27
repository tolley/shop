<?php

namespace App\Http\Transformers;

use App\Model\Product;
use League\Fractal;

class ProductTransformer extends Fractal\TransformerAbstract
{
    public function transform(Product $product)
    {
        return [
            'id'          => $product->id,
            'name'        => $product->name,
            'description' => $product->description,
            'type'        => $product->type,
            'thumbnail'   => $product->thumbnail,
            'active'      => $product->active
        ];
    }
}
