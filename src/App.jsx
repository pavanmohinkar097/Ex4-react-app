// Conditional Rendering

//  Example =1 const App = () => {
//   const condition = false;

//   if (condition) {
//     return <h1>I am lucky</h1>;
//   }
//    return <h1> I am not lucky</h1>;
// };

//  Example=3const App = () => {
//   const condition = true;
//   return condition ? <h1>hello world</h1> : <h1>hello newton</h1>;
// };

const App = () => {
  const value = [<li>One</li>, <li>Two</li>, <li>Three</li>];
  return <ul>{value}</ul>
};

export default App;
