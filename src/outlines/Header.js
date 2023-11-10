import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/login">로그인</Link>
      <Link to="/join">회원가입</Link>
    </header>
  );
};

export default Header;
