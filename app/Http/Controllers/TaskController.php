<?php

namespace App\Http\Controllers;

use App\Models\ProjectModel;
use App\Models\TaskModel;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class TaskController extends Controller
{
    public function index()
    {
        // return view('task.index');
        return Inertia::render('Task');
    }

    public function projectTaskIndex($id)
    {
        $project = ProjectModel::findOrFail($id);

        $task = TaskModel::where('project_id', $id)->paginate(5);

        $taskCount = TaskModel::where('project_id', $id)->where('completed', false)->count();

        return Inertia::render('Project/Task', compact('project', 'task', 'taskCount'));
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $validatedData = $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('task', 'title')->where(function ($query) use ($request) {
                    return $query->where('project_id', $request->project_id);
                })
            ],
            'project_id' => 'required|exists:project,id',
            'priority' => 'required|string|in:High,Normal,Low',
            'completed' => 'required|boolean',
        ], [
            'title.unique' => 'The task already has this task'
        ]);

        TaskModel::create($validatedData);

        return redirect()->route('project.tasks', ['id' => $validatedData['project_id']])->with('success', 'Task created successfully.');
    }

    public function update($id, Request $request)
    {

        // dd($id, $request);
        $task = TaskModel::findOrFail($id);

        $validatedData = $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('task', 'title')->where(function ($query) use ($request) {
                    return $query->where('project_id', $request->project_id);
                })->ignore($id)
            ],
            'project_id' => 'required|exists:project,id',
            'priority' => 'required|string|in:High,Normal,Low',
            'completed' => 'required|boolean',
        ], [
            'title.unique' => 'already has task'
        ]);

        $task->update($validatedData);

        return back()->with('success', 'Task updated successfully.');
    }

    public function taskComplete($id, Request $request)
    {

        $task = TaskModel::findOrFail($id);

        // Toggle the completed field
        $task->completed = !$task->completed;

        $task->save();

        return back()->with('success', 'Task updated successfully.');
    }

    public function deleteTask($projectId, $taskId)
    {
        try {
            $task = TaskModel::findOrFail($taskId);
            $task->delete();

            return back()->with('success', 'Task deleted successfully.');
        } catch (Exception $e) {
            return back()->with('error', 'Error: Could not delete the record.');
        }
    }
}
