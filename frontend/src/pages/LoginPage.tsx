// Login Page (로그인)
import { Stack, Avatar, Divider } from "@mui/material"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate()
  const goToSignup = ():void => {
    navigate('/signup')
  }
  const signin = ():void => {}

  return (
    <Stack 
      direction={"row"}
      gap={3} alignItems="center" 
      justifyContent="center"
      height="100vh"
      >
      <Stack 
        id="comment"
        flex={1}
        alignItems="flex-end"
      >
        <Stack alignItems="flex-start">
          <Stack id="logo" direction={"row"} gap={1} >
            <Avatar alt="gaplog 로고" src="./public/gaplog_icon.png" className="w-90" />
            <p className="self-center text-black font-bold text-lg" >갭로그</p>
          </Stack>
          <div className="text-4xl leading-tight font-bold">
            <div>다시 시작하는
              {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#DF4AAB]">
                당신
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#DF4AAB]">
                을 위한
              </span>
              {' '}
              <span>공간</span>
            </div>
          </div>
        </Stack>
      </Stack>
      <Stack
        id="login"
        flex={1}
      >
        <Stack className="border p-3 rounded-md w-1/3" gap={2}>
        <p className="text-2xl font-bold text-title">로그인</p>
        <p className="text-main font-medium">갭로그 서비스를 이용하려면 로그인해주세요.</p>
        <Stack>
          <label htmlFor="email" >이메일</label>
          <input placeholder="name@example.com" className="p-1 border border-border" />
        </Stack>
        <Stack>
          <label htmlFor="password">비밀번호</label>
          <input type="password" className="p-1 border border-border"/>
        </Stack>
        <button onClick={signin} className="bg-primary text-white hover:bg-primary-active py-1 rounded-md">로그인</button>
        <Divider />
        <div className="font-medium">
          <span className="text-main">
          아직 계정이 없으신가요?
          </span>
          {' '}
          <span onClick={goToSignup} className="text-primary">
            회원가입하기
          </span>
        </div>
        </Stack>
        </Stack>
    </Stack>
  );
}
