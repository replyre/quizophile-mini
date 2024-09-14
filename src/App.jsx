import Modal from "react-responsive-modal";
import "./App.css";
import Background from "./components/Background";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import "react-responsive-modal/styles.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleBegin = () => {
    onCloseModal();
    fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  };
  console.log(data);
  useEffect(() => {
    onOpenModal();
  }, []);
  return (
    <div>
      <Background />
      <Header />
      <CardContainer data={data} />
      <Modal open={open} center closeOnOverlayClick={false}>
        <div className="start-modal">
          <h2>Welcome to Quizophile Mini 🙏</h2>
          <p>A simple GK quiz application to check your prowness 💪.</p>
          <p>Enter Your Name</p>
          <input type="text" name="" id="" />
          <p>Choose number of Questions</p>
          <select name="" id="">
            <option value="10">10</option>
            <option value="10">20</option>
            <option value="10">30</option>
            <option value="10">40</option>
            <option value="10">50</option>
          </select>
          <button onClick={handleBegin}>Let's Begin</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
