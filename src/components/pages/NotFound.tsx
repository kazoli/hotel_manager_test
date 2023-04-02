import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';

function NotFound() {
  useEffect(() => {
    document.title = '404 - Not Found';
  }, []);

  return (
    <DefaultLayout>
      <div className="flex flex-wrap">
        <h1 className="w-full text-[2rem]">Requested content is not found!</h1>
        <Link to="/" className="text-[#0000ff] text-[1.25rem] hover:underline">
          Go back to home page
        </Link>
      </div>
    </DefaultLayout>
  );
}

export default NotFound;
