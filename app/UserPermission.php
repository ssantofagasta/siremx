<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserPermission extends Model
{
    protected $table = 'users_permissions';

    protected $fillable = [
        'user_id','permission_id'
    ];

    public $timestamps = false;
}
