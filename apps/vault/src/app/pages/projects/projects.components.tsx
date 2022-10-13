import { Link, Outlet } from 'react-router-dom';

const AppProjects = () => {
  return (
    <div className="flex flex-col py-24 px-6 md:px-32 lg:px-64 m-auto  gap-12">
      <div className="flex">
        <Link to="/" className="text-amber-500">
          ← Back to home
        </Link>
      </div>
      <div className="p-12 bg-white flex flex-col grow rounded drop-shadow-md">
        <h3 className="flex text-2xl font-bold mb-10">Tip Calculator</h3>
        <Outlet />
      </div>
    </div>
  );
};

export default AppProjects;
