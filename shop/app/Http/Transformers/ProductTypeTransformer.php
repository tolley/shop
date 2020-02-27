<?php

namespace App\Http\Transformers;

use App\Model\ProductType;
use League\Fractal;

class ProductTypeTransformer extends Fractal\TransformerAbstract
{
    public function transform(ProductType $productType)
    {
        return [
            'id'          => $productType->id,
            'name'        => $productType->prettyName,
            'description' => $productType->description,
            'image'       => $productType->default_thumbnail
        ];
    }
}
