<?php

namespace App\Http\Controllers;

use App\Models\ProjectModel;
use App\Models\TaskModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

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



        return Inertia::render('Dashboard', compact('totalProjectCreated',  'totalTaskCreated','totalPendingTask','totalCompletedTask','totalNormalPriorityTask', 'totalHighPriorityTask'));
    }
}
