/* <div id="parent">
     <div id="child">
     <h1>Im h1 tag</h1>
*    </div>
    </div>


    Example2
    <div id="parent">
     <div id="child">
     <h1>Im h1 tag</h1>
     <h2>Im h1 tag</h2>
*    </div>
    </div>
*/

// The Above code in React js Example1
// const parent=React.createElement("div",{id:"parent"},
//       React.createElement("div",{id:"child"},
//       React.createElement("h1",{},"Im h1 tag")));

//       console.log(parent);
//       const root=ReactDOM.createRoot(document.getElementById("root"));
//       root.render(parent);



    //   code for example2
    const parent=React.createElement("div",{id:"parent"},
      React.createElement("div",{id:"child"},
     [ React.createElement("h1",{},"Im h1 tag"),React.createElement("h1",{},"Im h1 tag")]));

      console.log(parent);
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(parent);