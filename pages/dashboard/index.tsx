import type { NextPage } from 'next'
import TableCardComponent from '../../components/cards/table-card.component'
import CarouselComponent from '../../components/carousel/carousel.component'
import TopStories from '../../components/stories/top-stories.component'
import GuestLayout from '../../layout/guest.layout'

const DashboardPage: NextPage = () => {
  return (
    <GuestLayout>
      <div className='w-full h-full'>
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
    </GuestLayout>
  )
}

export default DashboardPage
