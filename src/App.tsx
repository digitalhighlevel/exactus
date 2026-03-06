import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Expertise from './sections/Expertise';
import Metodo from './sections/Metodo';
import Servicos from './sections/Servicos';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import CursorFollower from './components/CursorFollower';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="noise-texture" />
      <CursorFollower />
      <Navigation />
      <main>
        <Hero />
        <Expertise />
        <Metodo />
        <Servicos />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

