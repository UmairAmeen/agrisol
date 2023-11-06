<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class gallery_files extends Model
{
    use HasFactory, SoftDeletes;

    public $table = 'gallery_files';

    /**
     * The attributes that are mass assignable.
     *	
     * @var array
     */
    protected $fillable = [
        'gallery_id', 'file'
    ];
}
