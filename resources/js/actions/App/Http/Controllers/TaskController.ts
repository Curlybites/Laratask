import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:14
 * @route '/task'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/task',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:14
 * @route '/task'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:14
 * @route '/task'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:14
 * @route '/task'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:14
 * @route '/task'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:14
 * @route '/task'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:14
 * @route '/task'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\TaskController::projectTaskIndex
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
export const projectTaskIndex = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectTaskIndex.url(args, options),
    method: 'get',
})

projectTaskIndex.definition = {
    methods: ["get","head"],
    url: '/project/task/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TaskController::projectTaskIndex
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
projectTaskIndex.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return projectTaskIndex.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::projectTaskIndex
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
projectTaskIndex.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectTaskIndex.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskController::projectTaskIndex
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
projectTaskIndex.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projectTaskIndex.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TaskController::projectTaskIndex
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
    const projectTaskIndexForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: projectTaskIndex.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TaskController::projectTaskIndex
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
        projectTaskIndexForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projectTaskIndex.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TaskController::projectTaskIndex
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
        projectTaskIndexForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projectTaskIndex.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    projectTaskIndex.form = projectTaskIndexForm
/**
* @see \App\Http\Controllers\TaskController::store
 * @see app/Http/Controllers/TaskController.php:31
 * @route '/project/task'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/project/task',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TaskController::store
 * @see app/Http/Controllers/TaskController.php:31
 * @route '/project/task'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::store
 * @see app/Http/Controllers/TaskController.php:31
 * @route '/project/task'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TaskController::store
 * @see app/Http/Controllers/TaskController.php:31
 * @route '/project/task'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TaskController::store
 * @see app/Http/Controllers/TaskController.php:31
 * @route '/project/task'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TaskController::update
 * @see app/Http/Controllers/TaskController.php:55
 * @route '/project/task/update/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/project/task/update/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\TaskController::update
 * @see app/Http/Controllers/TaskController.php:55
 * @route '/project/task/update/{id}'
 */
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::update
 * @see app/Http/Controllers/TaskController.php:55
 * @route '/project/task/update/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\TaskController::update
 * @see app/Http/Controllers/TaskController.php:55
 * @route '/project/task/update/{id}'
 */
    const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TaskController::update
 * @see app/Http/Controllers/TaskController.php:55
 * @route '/project/task/update/{id}'
 */
        updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\TaskController::taskComplete
 * @see app/Http/Controllers/TaskController.php:82
 * @route '/project/task/complete_task/{id}'
 */
export const taskComplete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: taskComplete.url(args, options),
    method: 'put',
})

taskComplete.definition = {
    methods: ["put"],
    url: '/project/task/complete_task/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\TaskController::taskComplete
 * @see app/Http/Controllers/TaskController.php:82
 * @route '/project/task/complete_task/{id}'
 */
taskComplete.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return taskComplete.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::taskComplete
 * @see app/Http/Controllers/TaskController.php:82
 * @route '/project/task/complete_task/{id}'
 */
taskComplete.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: taskComplete.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\TaskController::taskComplete
 * @see app/Http/Controllers/TaskController.php:82
 * @route '/project/task/complete_task/{id}'
 */
    const taskCompleteForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: taskComplete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TaskController::taskComplete
 * @see app/Http/Controllers/TaskController.php:82
 * @route '/project/task/complete_task/{id}'
 */
        taskCompleteForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: taskComplete.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    taskComplete.form = taskCompleteForm
/**
* @see \App\Http\Controllers\TaskController::deleteTask
 * @see app/Http/Controllers/TaskController.php:95
 * @route '/project/task/{projectId}/{taskId}'
 */
export const deleteTask = (args: { projectId: string | number, taskId: string | number } | [projectId: string | number, taskId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteTask.url(args, options),
    method: 'delete',
})

deleteTask.definition = {
    methods: ["delete"],
    url: '/project/task/{projectId}/{taskId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TaskController::deleteTask
 * @see app/Http/Controllers/TaskController.php:95
 * @route '/project/task/{projectId}/{taskId}'
 */
deleteTask.url = (args: { projectId: string | number, taskId: string | number } | [projectId: string | number, taskId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    projectId: args[0],
                    taskId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        projectId: args.projectId,
                                taskId: args.taskId,
                }

    return deleteTask.definition.url
            .replace('{projectId}', parsedArgs.projectId.toString())
            .replace('{taskId}', parsedArgs.taskId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::deleteTask
 * @see app/Http/Controllers/TaskController.php:95
 * @route '/project/task/{projectId}/{taskId}'
 */
deleteTask.delete = (args: { projectId: string | number, taskId: string | number } | [projectId: string | number, taskId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteTask.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\TaskController::deleteTask
 * @see app/Http/Controllers/TaskController.php:95
 * @route '/project/task/{projectId}/{taskId}'
 */
    const deleteTaskForm = (args: { projectId: string | number, taskId: string | number } | [projectId: string | number, taskId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteTask.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TaskController::deleteTask
 * @see app/Http/Controllers/TaskController.php:95
 * @route '/project/task/{projectId}/{taskId}'
 */
        deleteTaskForm.delete = (args: { projectId: string | number, taskId: string | number } | [projectId: string | number, taskId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteTask.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteTask.form = deleteTaskForm
const TaskController = { index, projectTaskIndex, store, update, taskComplete, deleteTask }

export default TaskController