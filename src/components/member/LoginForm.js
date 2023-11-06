import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';

const LoginForm = () => {
  const { t } = useTranslation();
  let refUserId = React.createRef();

  useEffect(() => {
    /**
     * current 속성을 통해서 DOM에 접근
     */
    //console.log(refUserId.current);
    refUserId.current.focus();
  }, [refUserId]);

  /*
  let refUserId;

  useEffect(() => {
    // 렌더링 직후, 갱신 직후 -> 렌더링 이후에 할 공통 작업
    refUserId.focus();
  }, [refUserId]);
  */
  return (
    <>
      <h1>{t('로그인')}</h1>

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
    </>
  );
};

export default LoginForm;
