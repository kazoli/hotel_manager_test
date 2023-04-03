import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';

function NotFound() {
  useEffect(() => {
    document.title = '404 - Not Found';
  }, []);

  return (
    <DefaultLayout>
      <div className="flex flex-wrap md:py-[5px] py-[0]">
        <h1 className="text-[2rem] text-[#4d7fb3] font-[400] w-full">
          Requested content is not found!
        </h1>
        <Link to="/" className="text-[#606060] text-[1.25rem] hover:underline pb-[10px]">
          Go back to start page
        </Link>
      </div>
    </DefaultLayout>
  );
}

export default NotFound;
