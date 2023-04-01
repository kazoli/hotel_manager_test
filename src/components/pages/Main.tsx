import { useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

function Main() {
  useEffect(() => {
    document.title = 'Hotel Occupancy - Home';
  }, []);

  return (
    <DefaultLayout>
      <div className="min-h-screen">Home</div>
    </DefaultLayout>
  );
}

export default Main;
