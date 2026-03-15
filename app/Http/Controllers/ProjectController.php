<?php

namespace App\Http\Controllers;

use App\Models\ProjectModel;
use App\Models\TaskModel;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = ProjectModel::all();
        $projectTaskCount = ProjectModel::withCount(['tasks' => function ($query) {
            $query->where('completed', false);
        }])->get();

        return Inertia::render('Project/Index', compact('projects', 'projectTaskCount'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:project',
            'description' => 'required|string',
            'color' => 'required|string|max:7',
        ]);

        $project = ProjectModel::create($validatedData);

        return redirect()->route('project')->with('success', 'Project created successfully.');
    }

    public function update($id, Request $request)
    {
        $project = ProjectModel::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:project,name,' . $project->id,
            'description' => 'required|string',
            'color' => 'required|string|max:7',
        ]);

        $project->update($validatedData);

        return redirect()->route('project')->with('success', 'Project updated successfully.');
    }


    public function taskIndex($id)
    {
        $project = ProjectModel::findOrFail($id);

        return Inertia::render('Project/Task', compact('project'));
    }



    public function delete($id)
    {
        try {
            TaskModel::where('project_id', $id)->delete();
            $project = ProjectModel::findOrFail($id);
            $project->delete();

            return redirect()->route('project')->with('success', 'Project deleted successfully.');
        } catch (Exception $e) {

            return back()->with('error', 'Error: Could not delete the record.');
        }
    }
}
