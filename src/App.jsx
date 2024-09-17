import Modal from "react-responsive-modal";
import "./App.css";
import Background from "./components/Background";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import "react-responsive-modal/styles.css";
import { useState, useEffect, useCallback } from "react";
import EndContainer from "./components/EndContainer";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [score, setscore] = useState(0);
  const [totalscore, settotalscore] = useState(10);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [loading, setLoading] = useState(true);
  const [totalAnswered, setTotalAnswered] = useState(0);
  function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  const handleInfinteScroll = useCallback(() => {
    const container = document.querySelector(".question-container");

    if (
      document.querySelectorAll(".question-card").length >= totalscore ||
      loading
    )
      return;

    if (
      Math.round(container.scrollTop + container.clientHeight) ===
      container.scrollHeight
    ) {
      console.log(
        container.scrollTop + container.clientHeight === container.scrollHeight
      );

      if (data && data.length > 0) {
        setLoading(true);
        setTimeout(() => {
          fetch(
            "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
          )
            .then((res) => {
              if (res.status === 429) {
                throw new Error("Rate limit exceeded. Please try again later.");
              }
              return res.json();
            })
            .then((responseData) => {
              let questionsData = responseData?.results?.map((e) => {
                let options = [...e.incorrect_answers, e.correct_answer];
                shuffleArray(options);
                return { ...e, selected_answer: "", options };
              });

              if (Array.isArray(questionsData)) {
                let newdata = [...data, ...questionsData];
                setData(newdata);
              } else {
                console.error("questionsData is not iterable.");
              }

              setLoading(false);
            })
            .catch((error) => {
              console.error("API request error:", error.message);
              setLoading(false);
            });
        }, 2000);
      }
    }
  }, [data, loading, totalscore]);

  useEffect(() => {
    const container = document.querySelector(".question-container");
    const debouncedScroll = debounce(handleInfinteScroll, 200);

    container.addEventListener("scroll", debouncedScroll);

    return () => {
      container.removeEventListener("scroll", debouncedScroll);
    };
  }, [handleInfinteScroll]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const handleBegin = () => {
    onCloseModal();
    setLoading(true);
    fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        let questionsData = data.results.map((e) => {
          let options = [...e.incorrect_answers, e.correct_answer];
          shuffleArray(options);
          return { ...e, selected_answer: "", options };
        });

        setData(questionsData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  console.log(data);
  useEffect(() => {
    onOpenModal();
  }, []);

  console.log(name);
  useEffect(() => {
    if (totalAnswered === Number(totalscore)) {
      console.log("work");
      document.querySelector(".question-container").style.display = "none";
    }
  }, [data, totalAnswered]);
  return (
    <div>
      <Background />
      <Header totalscore={totalscore} score={score} />
      <CardContainer
        data={data}
        setData={setData}
        score={score}
        setscore={setscore}
        setTotalAnswered={setTotalAnswered}
        totalAnswered={totalAnswered}
      />
      {loading && (
        <div className="loading">
          <img src="./search.gif" height={"200px"} />{" "}
        </div>
      )}
      {
        <Modal open={open} center closeOnOverlayClick={false}>
          <div className="start-modal">
            <h2>
              Welcome to Quizophile <sup>Mini</sup> 🙏
            </h2>
            <p>A simple GK quiz application to check your prowness 💪.</p>
            <p>Enter Your Name</p>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setName(e.target.value)}
            />
            <p>Choose number of Questions</p>
            <select
              name=""
              id=""
              onChange={(e) => settotalscore(e.target.value)}
            >
              {[10, 15, 20, 25, 30].map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
            <button onClick={handleBegin}>Let's Begin</button>
          </div>
        </Modal>
      }
      {totalscore == totalAnswered && (
        <EndContainer
          totalscore={totalscore}
          score={score}
          setOpen={setOpen}
          setscore={setscore}
          setTotalAnswered={setTotalAnswered}
          setData={setData}
          name={name}
        />
      )}
    </div>
  );
}

export default App;
