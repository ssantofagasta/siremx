<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    protected $table = 'users_roles';

    protected $fillable = [
        'user_id','role_id'
    ];

    protected $primaryKey = 'user_id';

    public $timestamps = false;
}
