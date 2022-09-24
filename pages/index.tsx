import type { NextPage } from 'next'
import routes from '../routes'

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
      destination: routes.dashboard
    }
  }
}

export default IndexPage
