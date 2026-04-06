import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder/index'
/**
* @see \App\Http\Controllers\TaskController::update
 * @see app/Http/Controllers/TaskController.php:55
 * @route '/project/task/update/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions) => {
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
update.put = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\TaskController::update
* @see app/Http/Controllers/TaskController.php:55
* @route '/project/task/update/{id}'
*/
const updateForm = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
updateForm.put = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TaskController::complete
 * @see app/Http/Controllers/TaskController.php:82
 * @route '/project/task/complete_task/{id}'
 */
export const complete = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: complete.url(args, options),
    method: 'put',
})

complete.definition = {
    methods: ["put"],
    url: '/project/task/complete_task/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\TaskController::complete
 * @see app/Http/Controllers/TaskController.php:82
 * @route '/project/task/complete_task/{id}'
 */
complete.url = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions) => {
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

    return complete.definition.url
        .replace('{id}', parsedArgs.id.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::complete
 * @see app/Http/Controllers/TaskController.php:82
 * @route '/project/task/complete_task/{id}'
 */
complete.put = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: complete.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\TaskController::complete
* @see app/Http/Controllers/TaskController.php:82
* @route '/project/task/complete_task/{id}'
*/
const completeForm = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TaskController::complete
* @see app/Http/Controllers/TaskController.php:82
* @route '/project/task/complete_task/{id}'
*/
completeForm.put = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

complete.form = completeForm
/**
* @see \App\Http\Controllers\TaskController::deleteMethod
 * @see app/Http/Controllers/TaskController.php:95
 * @route '/project/task/{projectId}/{taskId}'
 */
export const deleteMethod = (args: { projectId: string | number, taskId: string | number } | [projectId: string | number, taskId: string | number], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/project/task/{projectId}/{taskId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TaskController::deleteMethod
 * @see app/Http/Controllers/TaskController.php:95
 * @route '/project/task/{projectId}/{taskId}'
 */
deleteMethod.url = (args: { projectId: string | number, taskId: string | number } | [projectId: string | number, taskId: string | number], options?: RouteQueryOptions) => {
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

    return deleteMethod.definition.url
        .replace('{projectId}', parsedArgs.projectId.toString())
        .replace('{taskId}', parsedArgs.taskId.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::deleteMethod
 * @see app/Http/Controllers/TaskController.php:95
 * @route '/project/task/{projectId}/{taskId}'
 */
deleteMethod.delete = (args: { projectId: string | number, taskId: string | number } | [projectId: string | number, taskId: string | number], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\TaskController::deleteMethod
* @see app/Http/Controllers/TaskController.php:95
* @route '/project/task/{projectId}/{taskId}'
*/
const deleteMethodForm = (args: { projectId: string | number, taskId: string | number } | [projectId: string | number, taskId: string | number], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TaskController::deleteMethod
* @see app/Http/Controllers/TaskController.php:95
* @route '/project/task/{projectId}/{taskId}'
*/
deleteMethodForm.delete = (args: { projectId: string | number, taskId: string | number } | [projectId: string | number, taskId: string | number], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMethod.form = deleteMethodForm
const task = {
    update: Object.assign(update, update),
    complete: Object.assign(complete, complete),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default task