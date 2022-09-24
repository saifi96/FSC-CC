import type { NextPage } from 'next'
import TopNavBarComponent from '../../components/navbars/top-nav-bar.component'
import SidebarComponent from '../../components/sidebars/sidebar.component'
import AppLayout from '../../layout/app.layout'

const DashboardPage: NextPage = () => {
  return (
    <AppLayout>
      <div className='flex flex-row h-full w-full'>
        <div className='w-2/12'>
          <SidebarComponent />
        </div>
        <div className='w-10/12'>
          <TopNavBarComponent />
        </div>
      </div>
    </AppLayout>
  )
}

export default DashboardPage
