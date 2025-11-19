import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import MouseFollower from './components/MouseFollower';

function App() {
  return (
    <div className="app-container">
      <MouseFollower />
      <Header />
      <main>
        <Hero />
        <Products />
        <Differentials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
