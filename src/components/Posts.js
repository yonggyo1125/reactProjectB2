import axios from 'axios';
import { useState, useEffect } from 'react';

const Posts = () => {
  const [number, setNumber] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
          console.log(data);
          setRefresh(false);
        })
        .catch((err) => console.error(err));
    }
  }, [refresh]);

  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={() => setNumber(number + 1)}>
        +1
      </button>
    </>
  );
};

export default Posts;
