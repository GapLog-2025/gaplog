// Login Page (로그인)
import { Stack, Avatar, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IntroCard from '@/features/Auth/IntroCard';

export default function LoginPage() {
  const navigate = useNavigate();
  const goToSignup = (): void => {
    navigate('/signup');
  };
  const signin = (): void => {};

  return (
    <Stack
      direction={'row'}
      gap={3}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <IntroCard
        sx={{
          flex: 1,
        }}
      >
        <IntroCard.Title>
          <div>
            다시 시작하는{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#DF4AAB]">
              당신
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#DF4AAB]">
              을 위한
            </span>{' '}
            <span>공간</span>
          </div>
        </IntroCard.Title>
        <IntroCard.Description>
          갭로그에 로그인하고 공백기를 의미있는 시간으로 만들어보세요.
        </IntroCard.Description>
      </IntroCard>
      <Stack id="login" flex={1}>
        <Stack className="border p-3 rounded-md w-1/3" gap={2}>
          <p className="text-2xl font-bold text-title">로그인</p>
          <p className="text-main font-medium">
            갭로그 서비스를 이용하려면 로그인해주세요.
          </p>
          <Stack>
            <label htmlFor="email">이메일</label>
            <input
              placeholder="name@example.com"
              className="p-1 border border-border"
            />
          </Stack>
          <Stack>
            <label htmlFor="password">비밀번호</label>
            <input type="password" className="p-1 border border-border" />
          </Stack>
          <button
            onClick={signin}
            className="bg-primary text-white hover:bg-primary-active py-1 rounded-md"
          >
            로그인
          </button>
          <Divider />
          <div className="font-medium">
            <span className="text-main">아직 계정이 없으신가요?</span>{' '}
            <span onClick={goToSignup} className="text-primary">
              회원가입하기
            </span>
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
}
