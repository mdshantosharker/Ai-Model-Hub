import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Models from "./components/Models";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

function App() {
  const modelPromise = getModels();

  const [activeTab, setActiveTab] = useState("models");
  const [carts, setCarts] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Banner />

      <div className="flex justify-center mt-8 px-4 sm:px-6">
        <div className="tabs tabs-box justify-center bg-transparent gap-4 sm:gap-6">
          <input
            onClick={() => setActiveTab("models")}
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-32 sm:w-40 text-sm sm:text-base ${
              activeTab === "models" ? "bg-red-500 text-white" : ""
            }`}
            aria-label="Model"
            defaultChecked
          />
          <input
            onClick={() => setActiveTab("cart")}
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-32 sm:w-40 text-sm sm:text-base ${
              activeTab === "cart" ? "bg-red-500 text-white" : ""
            }`}
            aria-label={`Cart (${carts.length})`}
          />
        </div>
      </div>

      <main className="flex-1 px-4 sm:px-6 mt-6 mb-10">
        {activeTab === "models" && (
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-20">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            }
          >
            <Models
              carts={carts}
              setCarts={setCarts}
              modelPromise={modelPromise}
            />
          </Suspense>
        )}

        {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
