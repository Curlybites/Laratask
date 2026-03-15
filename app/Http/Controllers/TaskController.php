<?php

namespace App\Http\Controllers;

use App\Models\ProjectModel;
use App\Models\TaskModel;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
            'title' => 'required|string|max:255',
            'project_id' => 'required|exists:project,id',
            'priority' => 'required|string|in:High,Normal,Low',
            'completed' => 'required|boolean',
        ]);

        TaskModel::create($validatedData);

        return redirect()->route('project.tasks', ['id' => $validatedData['project_id']])->with('success', 'Task created successfully.');
    }

    public function update($id, Request $request)
    {

        // dd($id, $request);
        $task = TaskModel::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'project_id' => 'required|exists:project,id',
            'priority' => 'required|string|in:High,Normal,Low',
            'completed' => 'required|boolean',
        ]);

        $task->update($validatedData);

        return redirect()->route('project.tasks', ['id' => $validatedData['project_id']])->with('success', 'Task created successfully.');
    }

    public function taskComplete($id, Request $request)
    {

        $task = TaskModel::findOrFail($id);

        // Toggle the completed field
        $task->completed = !$task->completed;

        $task->save();

        return redirect()
            ->route('project.tasks', ['id' => $task->project_id])
            ->with('success', 'Task updated successfully.');
    }

    public function deleteTask($projectId, $taskId)
    {
        try {
            $task = TaskModel::findOrFail($taskId);
            $task->delete();

            return redirect()->route('project.tasks', ['id' => $projectId])->with('success', 'Task deleted successfully.');
        } catch (Exception $e) {
            return redirect()->route('project')->with('error', 'Error: Could not delete the record.');
        }
    }
}
