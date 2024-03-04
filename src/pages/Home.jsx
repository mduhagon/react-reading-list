import { Link, Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div>
        <Link to='love' className='btn'>
            Love
        </Link>
        <Link to='horror' className='btn'>
            Horror
        </Link>
      </div>  
      <Outlet />
    </>
  );
};
export default Home;