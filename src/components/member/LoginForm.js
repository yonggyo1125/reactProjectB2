import { useTranslation } from 'react-i18next';

const LoginForm = ({ onSubmit, onChange, form, error }) => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('로그인')}</h1>
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
