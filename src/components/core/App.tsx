import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './Router';

function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose={5000} />
    </>
  );
}

export default App;
