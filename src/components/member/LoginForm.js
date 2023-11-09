import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

const TitleStyle = styled.h1`
  border-bottom: 2px solid #000;
  font-size: 1.75rem;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: ${(props) => props.color || 'black'};

  ${(props) =>
    props.theme === 'dark' &&
    css`
      background: #000;
      color: #fff;
    `}
`;

const LoginForm = ({ onSubmit, onChange, form, error }) => {
  const { t } = useTranslation();

  return (
    <>
      <TitleStyle color="orange" theme="dark">
        {t('로그인')}
      </TitleStyle>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder={t('이메일')}
          onChange={onChange}
          value={form.email}
        />
        {error.email && <div>{error.email}</div>}

        <input
          type="password"
          name="password"
          placeholder={t('비밀번호')}
          onChange={onChange}
          value={form.password}
        />
        {error.password && <div>{error.password}</div>}

        <button type="submit">{t('로그인')}</button>
      </form>
    </>
  );
};

export default LoginForm;
