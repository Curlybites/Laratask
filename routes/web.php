<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// Route::inertia('/', 'Welcome', [
//     'canRegister' => Features::enabled(Features::registration()),
// ])->name('home');

Route::redirect('/', '/login')->name('home');


// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::inertia('dashboard', 'Dashboard')->name('dashboard');
// });

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::inertia('task', 'Task')->name('task');
// });
Route::controller(DashboardController::class)->middleware(['auth','verified'])->group(function () {
    Route::get('/dashboard', 'index')->name('dashboard');
});

Route::controller(ProjectController::class)->middleware('auth')->group(function () {
    Route::get('/project', 'index')->name('project');
    Route::post('/project/create', 'store')->name('project.store');
    Route::put('/project/{id}', 'update')->name('project.update');
    Route::delete('project/{id}', 'delete')->name('project.delete');
});

Route::controller(TaskController::class)->middleware('auth')->group(function () {
    Route::get('/task', 'index')->name('task');
    Route::get('/project/task/{id}', 'projectTaskIndex')->name('project.tasks');
    Route::post('/project/task', 'store')->name('project.task.store');
    Route::put('/project/task/update/{id}', 'update')->name('task.update');
    Route::put('/project/task/complete_task/{id}', 'taskComplete')->name('task.complete');
    Route::delete('/project/task/{projectId}/{taskId}', 'deleteTask')->name('task.delete');
});

require __DIR__ . '/settings.php';
