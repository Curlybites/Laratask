<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectModel extends Model
{
    protected $table = 'project';

    protected $fillable = [
        'name',
        'description',
        'color',
    ];

    public function tasks()
    {
        return $this->hasMany(TaskModel::class, 'project_id');
    }
}
