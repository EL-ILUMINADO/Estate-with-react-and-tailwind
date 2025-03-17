import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <nav className="flex flex-col items-center justify-center py-4 fixed top-0 right-0 w-full z-10 py-4">
        <Navbar />
        {/* <Navbar />
        <Navbar /> */}
      </nav>
      <header
        className="flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-slate-500"
        id="header"
      >
        <Header />
      </header>
      <main>
        <section className="section-about flex items-center justify-center py-[6.25rem]">
          <About />
        </section>
        <section
          className="section-projects flex items-center justify-center py-[6.25rem]"
          id="projects"
        >
          <Projects />
        </section>
        <section
          className="section-testimonials flex items-center justify-center py-[6.25rem]"
          id="testimonials"
        >
          <Testimonials />
        </section>
        <section
          className="section-contact flex items-center justify-center py-[6.25rem] mb-[12.50rem]"
          id="contact"
        >
          <Contact />
        </section>
      </main>
      <footer
        className="flex items-center justify-center pt-[6.25rem] pb-[6.25rem] bg-gray-900 text-gray-400"
        id="footer"
      >
        <Footer />
      </footer>
    </>
  );
}

export default App;
