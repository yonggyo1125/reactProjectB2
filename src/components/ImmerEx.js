import { useState } from 'react';

const ImmerEx = () => {
  const [data, setData] = useState({
    data1: { a: 1, b: 2 },
    data2: { c: 3, d: 4 },
  });

  return (
    <>
      a: {data.data1.a}
      <br />
      b: {data.data1.b}
      <br />
      c: {data.data2.c}
      <br />
      d: {data.data2.d}
      <br />
      <button type="button" onClick={handleClick}>
        bX10
      </button>
    </>
  );
};

export default ImmerEx;
