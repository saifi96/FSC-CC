import type { NextPage } from 'next'
import TableCardComponent from '../../components/cards/table-card.component'
import CarouselComponent from '../../components/carousel/carousel.component'
import SideNavBarComponent from '../../components/navbars/side-nav-bar.component'
import TopNavBarComponent from '../../components/navbars/top-nav-bar.component'
import TopStories from '../../components/stories/top-stories.component'
import AppLayout from '../../layout/app.layout'

const DashboardPage: NextPage = () => {
  return (
    <AppLayout>
      <div className='flex flex-row h-full w-full'>
        <div className='max-w-xs'>
          <SideNavBarComponent layoutView={'title-icon'} isUser={false} />
        </div>
        <div className='w-full'>
          <TopNavBarComponent />
          <div className='px-10 py-10'>
            <div className='mb-10 bg-app-gray2 rounded-2xl h-64'>
              <CarouselComponent />
            </div>
            <div className='mb-5'>
              <TopStories />
            </div>
            <div className='flex flex-row flex-wrap'>
              <div className='mr-10 flex-1'>
                <TableCardComponent />
              </div>
              <div className='flex-1'>
                <TableCardComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default DashboardPage
