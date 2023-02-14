import { About } from './components/About';
import { Announcement } from './components/Announcement';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <>
      <Announcement message='We’re sorry but due to COVID restrictions we are not providing services at this moment.' />
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
    </>
  );
}

export default App;
