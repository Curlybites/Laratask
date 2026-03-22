<script setup lang="ts" generic="TData, TValue">
import { Head } from '@inertiajs/vue3';
import PlaceholderPattern from '@/components/PlaceholderPattern.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard, project } from '@/routes';
import { Button } from '@/components/ui/button';
import { task } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import Heading from '@/components/Heading.vue';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { reactive } from 'vue';
import {
    Plus,
    Pencil,
    Trash2,
    ExternalLink,
    Loader2,
    ArrowLeft,
    PackageOpen,
} from 'lucide-vue-next';
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { Checkbox } from '@/components/ui/checkbox';
// table part

import { computed } from 'vue';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter,
} from '@/components/ui/table';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { watch } from 'vue';
import { toast } from 'vue-sonner';
import { usePage } from '@inertiajs/vue3';
import Badge from '@/components/ui/badge/Badge.vue';

const props = defineProps<{
    project: {
        id: number;
        name: string;
        [key: string]: any;
    };
    task: {
        data: any[];
        links: any[];
        [key: string]: any;
    };
    taskCount: number;
}>();

const paginationLinks = computed(() => {
    const links = props.task.links;

    const prev = links[0];
    const next = links[links.length - 1];

    const pages = links.slice(1, -1);

    const currentIndex = pages.findIndex((link) => link.active);

    const start = Math.max(currentIndex - 1, 0);
    const end = start + 3;

    const visiblePages = pages.slice(start, end);

    return [prev, ...visiblePages, next];
});

const page = usePage<any>();

watch(
    () => page.props.flash.success,
    (message) => {
        if (message) toast.success(message);
    },
    { immediate: true },
);

const createTaskDialogOpen = ref(false);
const editTaskDialogOpen = ref(false);
const currentTaskId = ref<number | null>(null);

const createTaskForm = useForm({
    title: '',
    project_id: props.project.id,
    priority: 'Normal',
    completed: false,
});

const editTaskForm = useForm({
    title: '',
    project_id: props.project.id,
    priority: 'Normal',
    completed: false,
});

const completeTaskForm = useForm({
    title: '',
    project_id: props.project.id,
    priority: 'Normal',
    completed: true,
});

const OpenEditTaskDialog = (task: {
    id: number;
    title: string;
    project_id: number;
    priority: string;
    completed: boolean;
}) => {
    currentTaskId.value = task.id;
    editTaskForm.title = task.title;
    editTaskForm.project_id = props.project.id;
    editTaskForm.priority = task.priority;
    editTaskForm.completed = task.completed;
    editTaskDialogOpen.value = true;
};

const createTask = () => {
    createTaskForm.post('/project/task', {
        preserveScroll: true,
        onSuccess: () => {
            createTaskForm.reset();
            createTaskDialogOpen.value = false;
            if (page.props.flash?.success) {
                toast.success(page.props.flash.success);
            }
        },
        onError: (errors) => {
            for (const key in errors) {
                toast.error(errors[key]);
            }
        },
    });
};

const editTask = () => {
    editTaskForm.put(`/project/task/update/${currentTaskId.value}`, {
        preserveScroll: true,
        onSuccess: () => {
            editTaskDialogOpen.value = false;
            editTaskForm.reset();
            // Toast from backend flash
            if (page.props.flash?.success) {
                toast.success(page.props.flash.success);
            }

            // router.reload({ only: ['projects'] });
        },
        onError: (errors) => {
            for (const key in errors) {
                toast.error(errors[key]);
            }
        },
    });
};

const completeTask = (taskId: number) => {
    completeTaskForm.put(`/project/task/complete_task/${taskId}`, {
        preserveScroll: true,
        onSuccess: () => {
            // editTaskDialogOpen.value = false;
            // completeTaskForm.reset();
            if (page.props.flash?.success) {
                toast.success(page.props.flash.success);
            }

            // router.reload({ only: ['projects'] });
        },
    });
};

const deleteTask = (taskId: number, projectId: number) => {
    router.delete(`/project/task/${projectId}/${taskId}`, {
        preserveScroll: true,
        onSuccess: () => {
            router.reload({ only: ['projects', 'projectTaskCount'] });
        },
    });
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Project',
        href: project().url,
    },
    {
        title: props.project.name,
        href: task().url,
    },
];
</script>

<template>
    <!-- <Head title="Testing" /> -->

    <AppLayout :breadcrumbs="breadcrumbs">
        <div
            class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
        >
            <div class="flex items-center justify-between">
                <Heading
                    :title="props.project.name + ' Tasks'"
                    :description="`Overview of all tasks (${props.taskCount} total)`"
                />

                <Dialog>
                    <DialogTrigger as-child>
                        <Button class="cursor-pointer">
                            <Plus class="h-4 w-4" />
                            Add Task
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add Task</DialogTitle>
                            <DialogDescription>
                                Add a new task to the project.
                            </DialogDescription>
                        </DialogHeader>

                        <form class="space-y-4" @submit.prevent="createTask">
                            <div class="space-y-2">
                                <Label>Task</Label>
                                <Input
                                    v-model="createTaskForm.title"
                                    required
                                    placeholder="e.g Adding Task"
                                />
                            </div>

                            <div class="flex w-full flex-1 flex-col">
                                <div class="space-y-2">
                                    <Label>Priority</Label>
                                    <select
                                        v-model="createTaskForm.priority"
                                        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    >
                                        <!-- <option disabled selected>All Priorities</option> -->
                                        <option>High</option>
                                        <option>Normal</option>
                                    </select>
                                </div>
                            </div>

                            <div class="mt-4 flex justify-end">
                                <Button type="submit" :disabled="createTaskForm.processing">
                                    <Loader2 v-if="createTaskForm.processing" class="mr-2 h-4 w-4 animate-spin" />
                                    <Plus v-else class="mr-2 h-4 w-4" />
                                    Add
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

                <Dialog
                    :open="editTaskDialogOpen"
                    @update:open="editTaskDialogOpen = $event"
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Task</DialogTitle>
                            <DialogDescription>
                                Add a new task to the project.
                            </DialogDescription>
                        </DialogHeader>

                        <form
                            class="space-y-4"
                            @submit.prevent="editTask()"
                        >
                            <div class="space-y-2">
                                <Label>Task</Label>
                                <Input
                                    v-model="editTaskForm.title"
                                    required
                                    placeholder="e.g Adding Task"
                                />
                            </div>

                            <div class="flex w-full flex-1 flex-col">
                                <div class="space-y-2">
                                    <Label>Priority</Label>
                                    <select
                                        v-model="editTaskForm.priority"
                                        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    >
                                        <!-- <option disabled selected>All Priorities</option> -->
                                        <option>High</option>
                                        <option>Normal</option>
                                    </select>
                                </div>
                            </div>

                            <div class="mt-4 flex justify-end">
                                <Button type="submit" :disabled="editTaskForm.processing">
                                    <Loader2 v-if="editTaskForm.processing" class="mr-2 h-4 w-4 animate-spin" />
                                    <Plus v-else class="mr-2 h-4 w-4" />
                                    Save
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div class="flex w-full justify-center">
                <div
                    class="relative h-40 w-full max-w-full overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
                >
                    <Heading title="Filters" class="pt-4 pl-4"></Heading>

                    <!-- Inputs row -->
                    <div class="mt-4 flex flex-col gap-4 px-4 md:flex-row">
                        <!-- Search input -->
                        <div class="flex w-full flex-1 flex-col">
                            <div class="space-y-2">
                                <Label>Search</Label>
                                <Input placeholder="Search..." class="w-full" />
                            </div>
                        </div>

                        <!-- Dropdown 1 -->
                        <div class="flex w-full flex-1 flex-col">
                            <div class="space-y-2">
                                <Label>Priority</Label>
                                <select
                                    class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                >
                                    <option>All Priorities</option>
                                    <option>High</option>
                                    <option>Normal</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex w-full justify-center">
                <div
                    class="relative h-130 w-full max-w-full overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
                >
                    <Heading title="Tasks" class="pt-4 pl-4"></Heading>
                    <div class="px-4">
                        <div
                            class="overflow-hidden rounded-lg border border-solid"
                        >
                            <div class="overflow-hidden border border-solid">
                                <!-- EMPTY STATE -->
                                <div
                                    v-if="props.task.data.length === 0"
                                    class="flex flex-col items-center justify-center py-20 text-muted-foreground"
                                >
                                    <PackageOpen
                                        class="mb-4 h-12 w-12 opacity-70"
                                    />
                                    <p class="text-sm">No tasks yet</p>
                                    <p class="text-xs opacity-70">
                                        Create your first task to get started
                                    </p>
                                </div>

                                <!-- TABLE -->
                                <Table v-else>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead class="text-center"
                                                >Completed</TableHead
                                            >
                                            <!-- <TableHead class="text-center">Id</TableHead> -->
                                            <TableHead class="text-center"
                                                >Task</TableHead
                                            >
                                            <TableHead class="text-center"
                                                >Priority</TableHead
                                            >
                                            <TableHead class="text-center"
                                                >Action</TableHead
                                            >
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody class="text-center">
                                        <TableRow
                                            v-for="t in props.task.data"
                                            :key="t.id"
                                        >
                                            <TableCell>
                                                <Checkbox
                                                    :default-value="
                                                        t.completed == true
                                                    "
                                                    @click="completeTask(t.id)"
                                                />
                                            </TableCell>

                                            <!-- <TableCell  :class="{'line-through text-gray-400': t.completed}">{{ t.id }}</TableCell> -->

                                            <TableCell
                                                :class="{
                                                    'text-gray-400 line-through':
                                                        t.completed,
                                                }"
                                                >{{ t.title }}</TableCell
                                            >

                                            <TableCell>
                                                <Badge
                                                    :class="{
                                                        'text-gray-400 line-through':
                                                            t.completed,
                                                    }"
                                                    :variant="
                                                        t.completed
                                                            ? 'secondary'
                                                            : t.priority ===
                                                                'High'
                                                              ? 'destructive'
                                                              : 'secondary'
                                                    "
                                                >
                                                    {{ t.priority }}
                                                </Badge>
                                            </TableCell>

                                            <TableCell
                                                class="flex items-center justify-center gap-2"
                                            >
                                                <Button
                                                    variant="outline"
                                                    @click="
                                                        OpenEditTaskDialog(t)
                                                    "
                                                >
                                                    <Pencil class="h-4 w-4" />
                                                </Button>

                                                <!-- <Button variant="destructive">
                          <Trash2 class="h-4 w-4" />
                        </Button> -->

                                                <AlertDialog>
                                                    <AlertDialogTrigger>
                                                        <Button
                                                            variant="destructive"
                                                            size="icon"
                                                        >
                                                            <Trash2
                                                                class="h-4 w-4"
                                                            />
                                                        </Button>
                                                    </AlertDialogTrigger>

                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle
                                                                >Are you
                                                                sure?</AlertDialogTitle
                                                            >
                                                            <AlertDialogDescription>
                                                                This action
                                                                cannot be
                                                                undone. This
                                                                will
                                                                <span
                                                                    class="font-bold text-red-500"
                                                                    >permanently
                                                                    delete</span
                                                                >
                                                                the task.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>

                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel
                                                                >Cancel</AlertDialogCancel
                                                            >

                                                            <AlertDialogAction
                                                                @click="
                                                                    deleteTask(
                                                                        t.id,
                                                                        props
                                                                            .project
                                                                            .id,
                                                                    )
                                                                "
                                                                class="bg-red-500"
                                                            >
                                                                Delete
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>

                                    <TableFooter class="text-center">
                                        <TableRow>
                                            <TableCell colspan="2"
                                                >Total Tasks</TableCell
                                            >
                                            <TableCell colspan="3">{{
                                                props.task.data.length
                                            }}</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </div>
                            <div class="flex justify-end gap-2 px-4 py-5">
                                <Button
                                    v-for="link in paginationLinks"
                                    :key="link.label"
                                    :disabled="!link.url"
                                    :variant="
                                        link.active ? 'secondary' : 'outline'
                                    "
                                    @click="router.visit(link.url)"
                                    v-html="link.label"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
