<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
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
            <div
                class="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 "
            >
                <div
                    class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
                >
                    <div class="flex h-full flex-col justify-between p-5">
                        <div class="flex items-center justify-between">
                            <Heading title="Total Projects" class="" />
                            <Folder class="h-10 w-7 text-muted-foreground" />
                        </div>

                        <div class="text-3xl font-bold">
                            {{ totalProjectCreated }}
                        </div>

                        <p class="text-sm text-muted-foreground">
                            All created projects
                        </p>
                    </div>
                </div>

                <div
                    class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
                >
                    <div class="flex h-full flex-col justify-between p-5">
                        <div class="flex items-center justify-between">
                            <Heading title="Total Task" />
                            <List class="h-10 w-7 text-muted-foreground" />
                        </div>

                        <div class="text-3xl font-bold">
                            {{ totalTaskCreated }}
                        </div>

                        <p class="text-sm text-muted-foreground">
                            All created Tasks
                        </p>
                    </div>
                </div>

                <div
                    class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
                >
                    <div class="flex h-full flex-col justify-between p-5">
                        <div class="flex items-center justify-between">
                            <Heading title="Pending Task" />
                            <Clock class="h-10 w-7 text-muted-foreground" />
                        </div>

                        <div class="text-3xl font-bold">
                            {{ totalPendingTask }}
                        </div>

                        <p class="text-sm text-muted-foreground">
                            All pending tasks
                        </p>
                    </div>
                </div>

                <div
                    class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
                >
                    <div class="flex h-full flex-col justify-between p-5">
                        <div class="flex items-center justify-between">
                            <Heading title="Completed Task" />
                            <ListCheck class="h-10 w-7 text-muted-foreground" />
                        </div>

                        <div class="text-3xl font-bold">
                            {{ totalCompletedTask }}
                        </div>

                        <p class="text-sm text-muted-foreground">
                            All completed task
                        </p>
                    </div>
                </div>
                <div
                    class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
                >
                    <div class="flex h-full flex-col justify-between p-5">
                        <div class="flex items-center justify-between">
                            <Heading title="Normal priority task" />
                            <Layers class="h-10 w-7 text-muted-foreground" />
                        </div>

                        <div class="text-3xl font-bold">
                            {{ totalNormalPriorityTask }}
                        </div>

                        <p class="text-sm text-muted-foreground">
                            All normal priority task
                        </p>
                    </div>
                </div>
                <div
                    class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
                >
                    <div class="flex h-full flex-col justify-between p-5">
                        <div class="flex items-center justify-between">
                            <Heading title="High priority Task" />
                            <TriangleAlert
                                class="h-10 w-7 text-muted-foreground"
                            />
                        </div>

                        <div class="text-3xl font-bold">
                            {{ totalHighPriorityTask }}
                        </div>

                        <p class="text-sm text-muted-foreground">
                            All high priority task
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border"
            >
                <PlaceholderPattern />
            </div>
        </div>
    </AppLayout>
</template>
