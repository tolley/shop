<?php

namespace App\Http\Filters;

use App\Http\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class ProductTypeFilter extends Filter 
{
    /**
     * Filter the product types by name
     * 
     * @param   string|null $value
     * @return  \Illuminate\Database\Eloquent\Builder
     */
    public function name(string $value = null)
    {
        return $this->builder->where('name', 'like', "%$value%");
    }

    /**
     * Filter the product types by id
     * 
     * @param   int|null $id
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function id(int $id)
    {
        return $this->builder->where('id', '=', $id);
    }

    /**
     * Filter the product types by description
     * 
     * @param   string|null $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function description(string $value = null)
    {
        return $this->builder->where('description', 'like', "%$value%");
    }
}
