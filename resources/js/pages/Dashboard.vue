<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import PlaceholderPattern from '@/components/PlaceholderPattern.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import Heading from '@/components/Heading.vue';
import {
    Plus,
    Pencil,
    Trash2,
    ExternalLink,
    Loader2,
    PackageOpen,
    List,
    Folder,
    Clock,
    ListCheck,
    TriangleAlert,
    Layers,
} from 'lucide-vue-next';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

const props = defineProps({
    totalProjectCreated: Number,
    totalTaskCreated: Number,
    totalPendingTask: Number,
    totalCompletedTask: Number,
    totalNormalPriorityTask: Number,
    totalHighPriorityTask: Number,
    projects: {
        type: Array as () => any[],
        default: () => [],
    },
    recentTasks: {
        type: Array as () => any[],
        default: () => [],
    },
});
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div
            class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
        >
            <div class="flex items-center justify-between">
                <Heading
                    title="Dashboard"
                    description="Monitor your projects and task"
                />
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-2">
                <!-- Total Projects -->
                <div class="relative overflow-hidden rounded-xl border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-900/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/10">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-sm text-blue-900 dark:text-blue-200">Total Projects</h3>
                        <div class="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                            <Folder class="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                    <div class="text-3xl font-bold text-blue-950 dark:text-blue-100">{{ totalProjectCreated }}</div>
                    <p class="text-xs text-blue-600/80 dark:text-blue-400/80 mt-1 font-medium">All created projects</p>
                </div>

                <!-- Total Task -->
                <div class="relative overflow-hidden rounded-xl border border-violet-200/60 dark:border-violet-900/40 bg-violet-50/50 dark:bg-violet-900/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-violet-500/10">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-sm text-violet-900 dark:text-violet-200">Total Task</h3>
                        <div class="p-2 bg-violet-100 dark:bg-violet-900/50 rounded-lg">
                            <List class="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        </div>
                    </div>
                    <div class="text-3xl font-bold text-violet-950 dark:text-violet-100">{{ totalTaskCreated }}</div>
                    <p class="text-xs text-violet-600/80 dark:text-violet-400/80 mt-1 font-medium">All created tasks</p>
                </div>

                <!-- Pending Task -->
                <div class="relative overflow-hidden rounded-xl border border-amber-200/60 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-900/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-amber-500/10">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-sm text-amber-900 dark:text-amber-200">Pending Task</h3>
                        <div class="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg">
                            <Clock class="h-5 w-5 text-amber-600 dark:text-amber-400" />
                        </div>
                    </div>
                    <div class="text-3xl font-bold text-amber-950 dark:text-amber-100">{{ totalPendingTask }}</div>
                    <p class="text-xs text-amber-600/80 dark:text-amber-400/80 mt-1 font-medium">All pending tasks</p>
                </div>

                <!-- Completed Task -->
                <div class="relative overflow-hidden rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 bg-emerald-50/50 dark:bg-emerald-900/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-emerald-500/10">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-sm text-emerald-900 dark:text-emerald-200">Completed Task</h3>
                        <div class="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
                            <ListCheck class="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                    </div>
                    <div class="text-3xl font-bold text-emerald-950 dark:text-emerald-100">{{ totalCompletedTask }}</div>
                    <p class="text-xs text-emerald-600/80 dark:text-emerald-400/80 mt-1 font-medium">All completed tasks</p>
                </div>

                <!-- Normal Priority -->
                <div class="relative overflow-hidden rounded-xl border border-cyan-200/60 dark:border-cyan-900/40 bg-cyan-50/50 dark:bg-cyan-900/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/10">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-sm text-cyan-900 dark:text-cyan-200">Normal Priority</h3>
                        <div class="p-2 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg">
                            <Layers class="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                    </div>
                    <div class="text-3xl font-bold text-cyan-950 dark:text-cyan-100">{{ totalNormalPriorityTask }}</div>
                    <p class="text-xs text-cyan-600/80 dark:text-cyan-400/80 mt-1 font-medium">Normal priority tasks</p>
                </div>

                <!-- High Priority -->
                <div class="relative overflow-hidden rounded-xl border border-rose-200/60 dark:border-rose-900/40 bg-rose-50/50 dark:bg-rose-900/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-rose-500/10">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-sm text-rose-900 dark:text-rose-200">High Priority</h3>
                        <div class="p-2 bg-rose-100 dark:bg-rose-900/50 rounded-lg">
                            <TriangleAlert class="h-5 w-5 text-rose-600 dark:text-rose-400" />
                        </div>
                    </div>
                    <div class="text-3xl font-bold text-rose-950 dark:text-rose-100">{{ totalHighPriorityTask }}</div>
                    <p class="text-xs text-rose-600/80 dark:text-rose-400/80 mt-1 font-medium">Urgent tasks</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Left side: Projects -->
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <Heading
                            title="Projects Overview"
                            description="Project progress based on completed tasks"
                        />
                    </div>
                    <div class="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-4 bg-background">
                        <div class="grid grid-cols-1 gap-4 overflow-y-auto max-h-[450px] pr-2">
                            <Link
                                v-for="project in projects"
                                :key="project.id"
                                :href="`/project/task/${project.id}`"
                                class="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-5 flex flex-col justify-between hover:bg-sidebar-accent/50 transition-colors"
                            >
                                <div>
                                    <div class="flex items-center justify-between mb-2">
                                        <h3 class="font-semibold truncate text-lg">{{ project.name }}</h3>
                                    </div>
                                    <p class="text-sm text-muted-foreground line-clamp-2 min-h-[40px] mb-4">
                                        {{ project.description || 'No description provided' }}
                                    </p>
                                </div>
                                
                                <div>
                                    <div class="flex items-center justify-between mb-1">
                                        <span class="text-xs font-medium">{{ project.tasks_count > 0 ? Math.round((project.completed_tasks_count / project.tasks_count) * 100) : 0 }}% completed</span>
                                        <span class="text-xs text-muted-foreground">{{ project.completed_tasks_count }}/{{ project.tasks_count }} Tasks</span>
                                    </div>
                                    <div class="w-full bg-sidebar-border/50 dark:bg-sidebar-border rounded-full h-2">
                                        <div class="h-2 rounded-full transition-all duration-500" :class="{'bg-primary': !project.color}" :style="`background-color: ${project.color || ''}; width: ${project.tasks_count > 0 ? (project.completed_tasks_count / project.tasks_count * 100) : 0}%`"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <!-- Right side: Recent Tasks -->
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <Heading
                            title="Recent Tasks"
                            description="Latest added tasks across all projects"
                        />
                    </div>
                    <div class="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-4 bg-background">
                        <div class="space-y-1 overflow-y-auto max-h-[450px] pr-2">
                            <Link v-for="task in recentTasks" :key="task.id" :href="`/project/task/${task.project_id}`" class="flex items-start gap-3 p-2 rounded-md hover:bg-sidebar-accent/30 transition-colors">
                                <div class="mt-1.5 shrink-0">
                                    <div class="h-2 w-2 rounded-full" :class="!task.project?.color ? 'bg-primary' : ''" :style="task.project?.color ? `background-color: ${task.project.color}` : ''" :title="`Project: ${task.project?.name || 'None'}`"></div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium leading-tight truncate">{{ task.title }}</p>
                                    <p class="text-xs text-muted-foreground mt-1 truncate flex items-center gap-1">
                                        <Folder class="h-3 w-3" />
                                        {{ task.project?.name || 'No Project' }}
                                    </p>
                                </div>
                                <div class="text-xs shrink-0 text-muted-foreground">
                                    {{ new Date(task.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) }}
                                </div>
                            </Link>
                            <div v-if="!recentTasks || recentTasks.length === 0" class="text-sm text-muted-foreground text-center py-6">
                                No recent tasks found
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
