<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{

    protected $fillable = [
        'room_name',
        'room_description',
        'room_price',
        'room_image',
        'room_available',
    ];
 
    use HasFactory;
}