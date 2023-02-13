import { Announcement } from './components/Announcement';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
  return (
    <>
      <Announcement message='We’re sorry but due to COVID restrictions we are not providing services at this moment.' />
      <Header />
      <Hero />
    </>
  );
}

export default App;
