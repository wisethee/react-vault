import { Link, Outlet } from 'react-router-dom';

const AppProjects = () => {
  return (
    <div className="flex flex-col py-24 px-6 md:px-32 lg:px-64 m-auto  gap-12">
      <div className="flex">
        <Link to="/" className="text-amber-500">
          ← Back to home
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AppProjects;
