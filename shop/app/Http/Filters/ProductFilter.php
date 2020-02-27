<?php

namespace App\Http\Filters;

use App\Http\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class ProductFilter extends Filter 
{
    /**
     * Filter the products by name
     * 
     * @param   string|null $value
     * @return  \Illuminate\Database\Eloquent\Builder
     */
    public function name(string $value = null)
    {
        return $this->builder->where('name', 'like', "%$value%");
    }

    /**
     * Filter the products by id
     * 
     * @param   int|null $id
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function id(int $id)
    {
        return $this->builder->where('id', '=', $id);
    }

    /**
     * Filter the products by description
     * 
     * @param   string|null $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function description(string $value = null)
    {
        return $this->builder->where('description', 'like', "%$value%");
    }

    /**
     * Filter the products by active status
     * 
     * @param   bool|null $active
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function active(int $active = null)
    {
        return $this->builder->where('active', '=', $active);
    }
}
