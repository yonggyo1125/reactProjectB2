import { useParams, useLocation } from 'react-router-dom';

const BoardView = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.search); // 쿼리스트링 값
  return (
    <>
      <h1>게시글 보기..</h1>
      <h2>게시글 번호 : {id}</h2>
    </>
  );
};

export default BoardView;
