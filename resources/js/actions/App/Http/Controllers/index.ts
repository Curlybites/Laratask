import DashboardController from './DashboardController'
import ProjectController from './ProjectController'
import TaskController from './TaskController'
import Settings from './Settings'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
ProjectController: Object.assign(ProjectController, ProjectController),
TaskController: Object.assign(TaskController, TaskController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers