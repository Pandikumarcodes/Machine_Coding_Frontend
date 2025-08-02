// import Progress from "./Progress";
// import { useState } from "react";

// const ProgressBar = () => {
//   const status = {
//     red: "red",
//     green: "green",
//     orange: "orange",
//   };

//   const [progress, setProgress] = useState(0);

//   const getColor = (value) => {
//     if (value < 40) return status.red;
//     if (value <= 70) return status.orange;
//     return status.green;
//   };

//   const increase = () => {
//     setProgress((prev) => {
//       console.log(prev);
//       const newProgress = Math.min(prev + 10, 100);
//       return newProgress;
//     });
//   };

//   const decrease = () => {
//     setProgress((prev) => Math.max(prev - 10, 0));
//   };

//   const color = getColor(progress);

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
//       <h2>Progress Bar</h2>
//       <Progress progress={progress} color={color} />
//       <div style={{ marginTop: "20px" }}>
//         <button onClick={increase} style={{ marginRight: "10px" }}>
//           +10
//         </button>
//         <button onClick={decrease}>-10</button>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;
