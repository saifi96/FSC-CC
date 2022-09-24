import type { NextPage } from 'next'
import TableCardComponent from '../../components/cards/table-card.component'
import CarouselComponent from '../../components/carousel/carousel.component'
import SideNavBarComponent from '../../components/navbars/side-nav-bar.component'
import TopNavBarComponent from '../../components/navbars/top-nav-bar.component'
import AppLayout from '../../layout/app.layout'

const DashboardPage: NextPage = () => {
  return (
    <AppLayout>
      <div className='flex flex-row h-full w-full'>
        <div className='w-2/12'>
          <SideNavBarComponent />
        </div>
        <div className='w-10/12'>
          <TopNavBarComponent />
          <div className='px-16 py-10'>
            <div className='mb-10'>
              <CarouselComponent />
            </div>
            <div>
              <div className='w-6/12'>
                <TableCardComponent />
              </div>
              <div className='w-6/12'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default DashboardPage
