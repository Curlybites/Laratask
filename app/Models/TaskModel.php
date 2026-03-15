<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaskModel extends Model
{
    protected $table = 'task';

    protected $fillable = [
        'title',
        'priority',
        'project_id',
        'completed',
    ];

    public function project()
    {
        return $this->belongsTo(ProjectModel::class, 'project_id');
    }
}
