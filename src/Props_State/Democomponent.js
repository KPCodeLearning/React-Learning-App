import React from 'react';

// functional component to illustrate props
function DemoComponent({ user }) {
  var a= 7;
  var b = 6;
  var c = 5;
  console.log("KP");
  return (
    <h1>{"(a+b)-c"}</h1>
    // <div>
    //   {/*accessing information from props */}
    //   <center>
    //     <h1>Props</h1>
    //   </center>
    //   <h2>Hello {user}</h2>
    //   <h3>Welcome to React props</h3>
    // </div>
  );
}

export default DemoComponent;