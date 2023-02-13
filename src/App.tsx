import { About } from './components/About';
import { Announcement } from './components/Announcement';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

function App() {
  return (
    <>
      <Announcement message='We’re sorry but due to COVID restrictions we are not providing services at this moment.' />
      <Header />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default App;
