<?php

namespace App\Http\Controllers;

use App\Models\ProjectModel;
use App\Models\TaskModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {

        $totalProjectCreated = ProjectModel::count();
        $totalTaskCreated = TaskModel::count();
        $totalPendingTask = TaskModel::where('completed', 0)->count();
        $totalCompletedTask = TaskModel::where('completed', 1)->count();
        $totalNormalPriorityTask = TaskModel::where('priority', 'Normal')->count();
        $totalHighPriorityTask = TaskModel::where('priority', 'High')->count();

        // Get projects with task counts
        $projects = ProjectModel::withCount([
            'tasks',
            'tasks as completed_tasks_count' => function ($query) {
                $query->where('completed', 1);
            }
        ])->get();

        // Get recent tasks
        $recentTasks = TaskModel::with('project')
            ->orderBy('created_at', 'desc')
            ->take(10)
            ->get();
       
        return Inertia::render('Dashboard', compact('totalProjectCreated', 'totalTaskCreated', 'totalPendingTask', 'totalCompletedTask', 'totalNormalPriorityTask', 'totalHighPriorityTask', 'projects', 'recentTasks'));
    }
    
}
