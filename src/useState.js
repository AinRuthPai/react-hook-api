import "./App.css";
import { useState } from "react";

// function App() {
//   const [time, setTime] = useState(1);

//   const handleClick = () => {
//     let newTime;
//     if (time >= 12) {
//       newTime = 1;
//     } else {
//       newTime = time + 1;
//     }
//     setTime(newTime);
//   };

//   console.log("Update!!");
//   return (
//     <div className='App'>
//       <span>현재 시각 : {time}시</span>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }

const heavyWork = () => {
  console.log("과부하 작업!!!");
  return ["홍길동", "김민수"];
};

function App() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      return [input, ...prevState];
    });
  };
  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange}></input>
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
