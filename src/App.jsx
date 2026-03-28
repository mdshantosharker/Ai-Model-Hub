import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Models from "./components/Models";
import Navbar from "./components/Navbar";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
function App() {
  const modelPromise = getModels();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Models modelPromise={modelPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
