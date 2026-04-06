import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder/index'
import task from './task'
/**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:23
 * @route '/project/create'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/project/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:23
 * @route '/project/create'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:23
 * @route '/project/create'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:23
* @route '/project/create'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:23
* @route '/project/create'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm
/**
* @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:36
 * @route '/project/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/project/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:36
 * @route '/project/{id}'
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
* @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:36
 * @route '/project/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:36
* @route '/project/{id}'
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
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:36
* @route '/project/{id}'
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
* @see \App\Http\Controllers\ProjectController::deleteMethod
 * @see app/Http/Controllers/ProjectController.php:61
 * @route '/project/{id}'
 */
export const deleteMethod = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/project/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProjectController::deleteMethod
 * @see app/Http/Controllers/ProjectController.php:61
 * @route '/project/{id}'
 */
deleteMethod.url = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions) => {
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

    return deleteMethod.definition.url
        .replace('{id}', parsedArgs.id.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::deleteMethod
 * @see app/Http/Controllers/ProjectController.php:61
 * @route '/project/{id}'
 */
deleteMethod.delete = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ProjectController::deleteMethod
* @see app/Http/Controllers/ProjectController.php:61
* @route '/project/{id}'
*/
const deleteMethodForm = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::deleteMethod
* @see app/Http/Controllers/ProjectController.php:61
* @route '/project/{id}'
*/
deleteMethodForm.delete = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMethod.form = deleteMethodForm
/**
* @see \App\Http\Controllers\TaskController::tasks
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
export const tasks = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tasks.url(args, options),
    method: 'get',
})

tasks.definition = {
    methods: ["get", "head"],
    url: '/project/task/{id}',
} satisfies RouteDefinition<["get", "head"]>

/**
* @see \App\Http\Controllers\TaskController::tasks
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
tasks.url = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions) => {
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

    return tasks.definition.url
        .replace('{id}', parsedArgs.id.toString())
        .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::tasks
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
tasks.get = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tasks.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskController::tasks
 * @see app/Http/Controllers/TaskController.php:20
 * @route '/project/task/{id}'
 */
tasks.head = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tasks.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TaskController::tasks
* @see app/Http/Controllers/TaskController.php:20
* @route '/project/task/{id}'
*/
const tasksForm = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tasks.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TaskController::tasks
* @see app/Http/Controllers/TaskController.php:20
* @route '/project/task/{id}'
*/
tasksForm.get = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tasks.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskController::tasks
* @see app/Http/Controllers/TaskController.php:20
* @route '/project/task/{id}'
*/
tasksForm.head = (args: { id: string | number } | [id: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tasks.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tasks.form = tasksForm
const project = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    delete: Object.assign(deleteMethod, deleteMethod),
    tasks: Object.assign(tasks, tasks),
    task: Object.assign(task, task),
}

export default project