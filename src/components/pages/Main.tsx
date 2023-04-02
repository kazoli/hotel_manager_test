import { useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

function Main() {
  useEffect(() => {
    document.title = 'Occupancy Calculation';
  }, []);

  return (
    <DefaultLayout>
      <div className="min-h-screen">Main</div>
    </DefaultLayout>
  );
}

export default Main;
