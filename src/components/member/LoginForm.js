import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef } from 'react';
import MainTitle from '../commons/MainTitle';

const LoginForm = () => {
  const { t } = useTranslation();
  // let num = 10; // 렌더링 시에 초기화(다시 10)
  // let refUserId = React.createRef(); // 클래스형 컴포넌트 + 함수형 컴포넌트 둘다 사용 가능
  let refUserId = useRef(); // 함수형 컴포넌트 에서만 사용 가능
  let refTitle = useRef();

  let refCount = useRef(10); // 렌더링 상관없이 사용 가능한 지역변수

  useEffect(() => {
    /**
     * current 속성을 통해서 DOM에 접근
     */
    //console.log(refUserId.current);
    refUserId.current.focus();

    refTitle.current.printInfo('메세지');
  }, []);

  const handleClick = () => {
    console.log('현재 값 : ', refCount.current);
    refCount.current++;
    console.log('변경 값 : ', refCount.current);
  };

  /*
  let refUserId;

  useEffect(() => {
    // 렌더링 직후, 갱신 직후 -> 렌더링 이후에 할 공통 작업
    refUserId.focus();
  }, [refUserId]);
  */
  return (
    <>
      <MainTitle ref={refTitle}>{t('로그인')}</MainTitle>

      <form>
        {/*
        <input
          type="text"
          ref={(ref) => (refUserId = ref)}
          name="userId"
          placeholder={t('아이디')}
  />*/}
        <input
          type="text"
          name="userId"
          placeholder={t('아이디')}
          ref={refUserId}
        />
        <input type="password" name="userPw" placeholder={t('비밀번호')} />
        <button type="submit">{t('로그인')}</button>
      </form>
      <button type="button" onClick={handleClick}>
        +1
      </button>
    </>
  );
};

export default LoginForm;
