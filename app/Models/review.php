<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class review extends Model
{
    use HasFactory, SoftDeletes;

    public $table = 'reviews';
    
    /**
     * The attributes that are mass assignable.
     *	
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'review', 'rating', 'is_approved', 'added_by', 'updated_by', 'deleted_by'
    ];
}