import Header from '../components/layout/Header';
import Hero from '../sections/Hero';
import Now from '../sections/Now';
import QuickContact from '../sections/QuickContact';
import FeaturedProject from '../sections/FeaturedProject';
import TopSkills from '../sections/TopSkills';
import '../styles/globals.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="dashboard-grid">
        <Hero className="div1" />
        <Now className="div2" />
        <FeaturedProject className="div3" />
        <TopSkills className="div4" />
        <QuickContact className="div5" />
      </div>
    </div>
  );
}

export default App;
