<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import PlaceholderPattern from '@/components/PlaceholderPattern.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard, project } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Pencil, Trash2, ExternalLink, Loader2, PackageOpen } from 'lucide-vue-next';
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
} from '@/components/ui/alert-dialog'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { ref, reactive } from 'vue';
import { Textarea } from '@/components/ui/textarea';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { router } from '@inertiajs/vue3';
import { toast } from 'vue-sonner'
import { usePage } from '@inertiajs/vue3'
import { watch } from 'vue'
import { Badge } from '@/components/ui/badge'


const page = usePage()

// Watch for backend flash messages
watch(
  () => page.props.flash.success,
  (message) => {
    if (message) toast.success(message)
  },
  { immediate: true } // para lumabas agad pag may flash
)

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Project',
        href: project().url,
    },
];

const props = defineProps<{
    projects: Array<{
        id: number;
        name: string;
        description: string;
        color?: string;
    }>;
    projectTaskCount: Array<{
        id: number;
        tasks_count: number;
    }>;
}>();

const isCreateProjectDialogOpen = ref(false);
const isEditProjectDialogOpen = ref(false);
const expandedCards = ref<number[]>([]);
const currentProjectId = ref<number | null>(null);

const localProjects = reactive(
    props.projects.map((project) => ({
        ...project,
        expanded: false,
    })),
);

// Function to toggle expanded state
function toggleCard(project: any) {
    project.expanded = !project.expanded;
}

const createForm = useForm({
    name: '',
    description: '',
    color: '#6366f1',
});

const editForm = useForm({
    name: '',
    description: '',
    color: '#6366f1',
});

const openEditProjectDialog = (project: {
    id: number;
    name: string;
    description: string;
    color?: string;
}) => {
    currentProjectId.value = project.id;
    editForm.name = project.name;
    editForm.description = project.description;
    editForm.color = project.color || '#6366f1';
    isEditProjectDialogOpen.value = true;
};

const createProject = () => {
    createForm.post('/project/create', {
        onSuccess: () => {
            createForm.reset();
            isCreateProjectDialogOpen.value = false;
            router.reload({ only: ['projects'] });
        },
    });
};

const editProject = (projectId: number) => {
    editForm.put(`/project/${currentProjectId.value}`, {
        onSuccess: () => {
            isEditProjectDialogOpen.value = false;
            editForm.reset();
            // Toast from backend flash
            if (page.props.flash?.success) {
                toast.success(page.props.flash.success)
            }

            router.reload({ only: ['projects'] });
        },
    });
};

const deleteProject = (id: number) => {
    router.delete(`/project/${id}`,{
        onSuccess : () => {
             router.reload({ only: ['projects', 'projectTaskCount'] });
        },
        onError: (errors) => {
            // Optional: Pag may database error (hal. may foreign key constraint)
            console.error(errors);
        }
    })
}


</script>

<template>
    <Head title="Project" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div
            class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
        >
            <div class="flex items-center justify-between">
                <Heading
                    title="Project"
                    description="Manage your projects list and details"
                />

                <Dialog v-model="isCreateProjectDialogOpen">
                    <DialogTrigger as-child>
                        <Button class="cursor-pointer">
                            <Plus class="h-4 w-4" />
                            Add Project
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create Project</DialogTitle>
                            <DialogDescription>
                                Fill in the details for the new project.
                            </DialogDescription>
                        </DialogHeader>

                        <!-- Dialog content goes here -->
                        <form
                            action=""
                            class="space-y-4"
                            @submit.prevent="createProject"
                        >
                            <div class="space-y-2">
                                <Label for="project-name">Project Name</Label>
                                <Input
                                    type="text"
                                    id="project-name"
                                    v-model="createForm.name"
                                    required
                                    placeholder="e.g Web System Project"
                                />
                                <InputError
                                    :message="createForm.errors?.name"
                                />
                            </div>
                            <div class="space-y-2">
                                <Label for="project-description"
                                    >Project Description</Label
                                >
                                <Textarea
                                    id="project-description"
                                    v-model="createForm.description"
                                    placeholder="e.g A web-based system for managing tasks and projects."
                                />
                            </div>

                            <div class="space-y-2">
                                <Label for="project-color">Pick Color</Label>
                                <Input
                                    type="color"
                                    id="project-color"
                                    v-model="createForm.color"
                                />
                            </div>

                            <div
                                class="flex items-center justify-end gap-2 space-y-2"
                            >
                                <Button
                                    type="submit"
                                    class="cursor-pointer"
                                    :disabled="createForm.processing"
                                    >Create</Button
                                >
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

                <Dialog
                    :open="isEditProjectDialogOpen"
                    @update:open="isEditProjectDialogOpen = $event"
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Project</DialogTitle>
                            <DialogDescription>
                                Update the details of the project.
                            </DialogDescription>
                        </DialogHeader>

                        <form
                            class="space-y-4"
                            @submit.prevent="editProject(currentProjectId!)"
                        >
                            <div class="space-y-2">
                                <Label>Project Name</Label>
                                <Input v-model="editForm.name" />
                            </div>

                            <div class="space-y-2">
                                <Label>Description</Label>
                                <Textarea v-model="editForm.description" />
                            </div>

                            <div class="space-y-2">
                                <Label>Color</Label>
                                <Input type="color" v-model="editForm.color" />
                            </div>

                            <div class="flex justify-end">
                                <Button type="submit">Update</Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div v-if="projects.length > 0" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card v-for="project in projects" :key="project.id">
                    <CardHeader>
                        <div class="flex items-start justify-between">
                            <div class="flex items-center gap-2">
                                <div
                                    class="h-3 w-3 rounded-full"
                                    :style="{
                                        backgroundColor:
                                            project.color || '#6366f1',
                                    }"
                                ></div>
                                <CardTitle>{{ project.name }}</CardTitle>
                            </div>

                            <div class="flex items-center gap-2">
                                <Badge variant="outline " class="h-8 min-w-8 rounded-full px-1 font-semibold text-1xl font-mono tabular-nums">
                                    {{ projectTaskCount.find(p => p.id === project.id)?.tasks_count || 0 }}
                                </Badge>
                            </div>
                        </div>
                        <CardDescription class="relative flex-1">
                            <p
                                :class="
                                    project.expanded
                                        ? 'max-h-full'
                                        : 'line-clamp-2 overflow-hidden'
                                "
                                class="transition-all duration-300"
                            >
                                {{ project.description }}
                            </p>

                            <button
                                v-if="project.description.length > 100"
                                class="absolute right-0 bottom-0 bg-white px-1 text-sm text-blue-500 dark:bg-transparent dark:text-blue-400 "
                                q
                                @click="toggleCard(project)"
                            >
                                {{ project.expanded ? 'Less' : 'More' }}
                            </button>
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="mt-auto">
                        <div class="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                class="flex-1"
                                @click="
                                    router.visit(`/project/task/${project.id}`)
                                "
                            >
                                <ExternalLink class="mr-2 h-4 w-4" />
                                View Details
                            </Button>

                            <Button
                                variant="outline"
                                size="icon"
                                @click="openEditProjectDialog(project)"
                            >
                                <Pencil class="h-4 w-4" />
                            </Button>

                            <!-- <Button variant="destructive" size="icon" @click="toast.error('Delete functionality is not implemented yet')">
                                <Trash2 class="h-4 w-4" />
                            </Button> -->


                             <AlertDialog>
                                <AlertDialogTrigger > 
                                    <Button variant="destructive" size="icon" >
                                        <Trash2 class="h-4 w-4" />
                                    </Button>
                                </AlertDialogTrigger>

                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will <span class="font-bold text-red-500">permanently delete</span> the task.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>

                                    <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                    <AlertDialogAction
                                        @click="deleteProject(project.id)"
                                        class="bg-red-500"
                                    >
                                        Delete
                                    </AlertDialogAction>

                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>


                        </div>
                    </CardContent>
                </Card>
            </div>


              <div  v-if="projects.length === 0" class="border border-slate-300 rounded-lg flex flex-col items-center justify-center py-20 text-muted-foreground">
                <PackageOpen class="h-12 w-12 mb-4 opacity-70" />
                  <p class="text-sm">No tasks yet</p>
                  <p class="text-xs opacity-70">Create your first task to get started</p>
                </div>
       

         
        </div>
    </AppLayout>
</template>
