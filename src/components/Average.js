import { useState } from 'react';

const getAverage = (numbers) => {
  const total = numbers.reduce((a, b) => a + b);
  const avg = Math.round((total / numbers.length) * 10) / 10;

  return avg;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);

  const handleChange = (e) => setNumber(e.currentTarget.value);
  const handleClick = () => setList(list.concat(number));

  return (
    <>
      <input type="number" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        평균 구하기
      </button>
      <ul>
        {list.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <div>평균 : {getAverage(list)}</div>
    </>
  );
};

export default Average;
