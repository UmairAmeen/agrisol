<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubProduct extends Model
{
    use HasFactory, SoftDeletes;

    public $table = 'sub_products';

    /**
     * The attributes that are mass assignable.
     *	
     * @var array
     */
    protected $fillable = [
        'title', 'product_id', 'description', 'images', 'model_spec', 'status', 'added_by', 'updated_by', 'deleted_by'
    ];
}