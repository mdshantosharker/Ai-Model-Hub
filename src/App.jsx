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

  console.log(carts);
  return (
    <>
      <Navbar />
      <Banner />

      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          onClick={() => setActiveTab("models")}
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Model"
          defaultChecked
        />
        <input
          onClick={() => setActiveTab("cart")}
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Cart"
        />
      </div>

      {activeTab === "models" && (
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <Models carts={carts} setCarts={setCarts} modelPromise={modelPromise} />
        </Suspense>
      )}

      {activeTab === "cart" && <Cart carts={carts} ></Cart>}

      <Footer />
    </>
  );
}

export default App;
