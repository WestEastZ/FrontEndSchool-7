import React from "react";

let guest = 0;

function Cup() {
  guest = guest + 1;
  return <h2>{guest}번 컵</h2>;
}

export default function App3() {
  return (
    <div>
      <Cup />
      <Cup />
      <Cup />
      <Cup />
      <Cup />
      <Cup />
      <Cup />
      {/* <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
      <Cup guest={5} />
      <Cup guest={6} /> */}
    </div>
  );
}
