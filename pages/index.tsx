import type { NextPage } from 'next'
import ROUTES from '../routes'

const IndexPage: NextPage = () => {
  return (
    <div>
    </div>
  )
}


export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: ROUTES.DASHBOARD
    }
  }
}

export default IndexPage
