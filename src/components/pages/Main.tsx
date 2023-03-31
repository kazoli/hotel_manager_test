import { useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

function Main() {
  useEffect(() => {
    document.title = 'Hotel Occupancy - Home';
  }, []);

  return (
    <DefaultLayout>
      <>Home</>
    </DefaultLayout>
  );
}

export default Main;
