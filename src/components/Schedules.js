import { useState } from 'react';

const Schedules = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      date: '2023/11/04',
      content: '스케줄1',
    },
    {
      id: 2,
      date: '2023/11/05',
      content: '스케줄2',
    },
    {
      id: 3,
      date: '2023/11/06',
      content: '스케줄3',
    },
  ]);
  return (
    <>
      <h1>스케줄 등록</h1>
      <form>
        <input type="text" name="date" placeholder="날짜" />
        <input type="text" name="content" placeholder="내용" />
        <button type="submit">등록하기</button>
      </form>
      <hr />
      <ul>
        {schedules.map((s) => (
          <li>
            {s.date}/{s.content}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Schedules;
