import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import FeatureSection from './featuresection.jsx';
import Workflow from './WhyChoose.jsx';
import Head from './head.jsx';
import Footer from './footer.jsx';
import About from './about.jsx';
import Enquire from './enquire.jsx';
import ServicesPage from './services.jsx';
import Quote from './quickquote.jsx';
import ContactUs from './Contactus.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';

function App() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={
          <div>
            <Head />
            <Workflow />
            {/* <FeatureSection /> */}
            <Footer />
          </div>
        } />
        
        <Route path="/about" element={
          <div>
            <About />
            <Footer />
          </div>
        } />
        
      
        <Route path = "/home-relocation-dubai" element={
          <div>
            <Enquire/>
            <Footer />
          </div>
        }/>
        <Route path = "/services" element= {
          <div>
            <FeatureSection/>
            <Footer />
          </div>
        }/>
        <Route path = "/international-relocation-dubai" element={
          <div>
            <Quote/>
            <Footer />
          </div>
        }/>
        <Route path = "/office-relocation-dubai" element={
          <div>
            <ContactUs/>
            <Footer />
          </div>
        }/>
      </Routes>
    </>
  );
}

export default App;
