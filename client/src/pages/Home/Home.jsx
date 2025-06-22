import { Helmet } from 'react-helmet-async'
import Table from '../../components/Home/Table'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Employee | Home emlpoyee</title>
      </Helmet>
    <Table/>
    </div>
  )
}

export default Home
