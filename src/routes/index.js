import CoreLayout from '../layouts/CoreLayout'
import ReportsDashboard from './ReportsDashboard'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  childRoutes: [ReportsDashboard(store)]
})

export default createRoutes
