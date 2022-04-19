import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logoM.png'
import './index.scss'

const Home = () => {
  return <div className="container home-page">
      <div className="text-zone">
          <h1>Hi, <br/> I'm
        <img src={LogoTitle} alt="developer" />
        ushfiq
        <br/>
        web developer
        </h1>
        <h2>Frontend Developer / React / Redux</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>

  </div>
}

export default Home
