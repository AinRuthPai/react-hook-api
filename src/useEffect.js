import "./App.css";
import { useEffect, useState } from "react";
import Timer from "./components/Timer";

// function App() {
//   const [count, setCount] = useState(1);
//   const [name, setName] = useState("");

//   const handleCountUpdate = () => {
//     setCount(count + 1);
//   };

//   const handleInputChange = (e) => {
//     setName(e.target.value);
//   };

//   // 렌더링마다 매번 실행됨 -렌더링 이후
//   useEffect(() => {
//     console.log("렌더링!");
//   });

//   // 마운팅 + [count] 변경될 때만 실행
//   useEffect(() => {
//     console.log("count 변화!");
//   }, [count]);

//   // 마운팅 + [name] 변경될 때만 실행
//   useEffect(() => {
//     console.log("name 변화!");
//   }, [name]);

//   useEffect(() => {
//     console.log("마운팅!");
//   }, []);

//   return (
//     <div>
//       <button onClick={handleCountUpdate}>Update</button>
//       <span>count: {count}</span>
//       <input type='text' value={name} onChange={handleInputChange} />
//       <span>name: {name}</span>
//     </div>
//   );
// }

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
