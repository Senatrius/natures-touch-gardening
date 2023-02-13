import { Announcement } from './components/Announcement';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Announcement message='We’re sorry but due to COVID restrictions we are not providing services at this moment.' />
      <Header />
    </>
  );
}

export default App;
