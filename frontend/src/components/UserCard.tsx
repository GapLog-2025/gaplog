import { Card, CardContent } from '@/components/Card';
import { useAuthStore } from '@/stores/useAuthStore';
import { ActionButton } from '@/components/Button';
import Avatar from '@mui/material/Avatar';
import Tag from '@/components/Tag';
import Divider from '@/components/Divider';
import { useNavigate } from 'react-router-dom';

import { LogOut, Settings } from 'lucide-react';
export default function UserCard() {
  const { user, isLoggedIn, logout } = useAuthStore();
  const navigate = useNavigate();
  const tags = [<Tag key="info" type="info" label="갭로거" />];

  if (user?.isMentor) {
    tags.push(<Tag key="mentor" type="purple" label="멘토" />);
  }
  return (
    <>
      {isLoggedIn && user ? (
        <Card className="py-5">
          <CardContent className="flex flex-col justify-center items-center w-full gap-4">
            <div className="w-full flex gap-6 mb-2">
              <Avatar alt="유저 이미지" sx={{ width: 80, height: 80 }} />
              {/* user info */}
              <div className="flex flex-col gap-3">
                <div className="w-full flex gap-2">{tags}</div>
                <div className="pl-1">
                  <p className="typo-strong text-secondary">{user.name}</p>
                  <p className="typo-small text-disabled">{user.email}</p>
                </div>
              </div>
            </div>
            <Divider />
            <div className="w-full flex gap-2 items-center justify-end typo-small font-bold text-main">
              <button
                className="flex gap-2 items-center hover:bg-gray-100 px-2 py-2 rounded-md leading-none"
                onClick={() => navigate('/mypage')}
              >
                마이페이지
                <Settings size={14} className="text-disabled" />
              </button>
              <div className="w-px h-5 bg-border" />

              <button
                className="flex gap-2 items-center hover:bg-gray-100 px-2 py-2 rounded-md leading-none"
                onClick={() => {
                  logout();
                }}
              >
                로그아웃
                <LogOut size={14} className="text-disabled" />
              </button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="py-5">
          <CardContent className="flex flex-col justify-center w-full items-center gap-4">
            <h3 className="typo-subheading text-secondary">
              로그인하고 기록을 시작하세요!
            </h3>
            <ActionButton
              size="large"
              onClick={() => navigate('/login')}
              className="px-20"
            >
              로그인 / 회원가입
            </ActionButton>
          </CardContent>
        </Card>
      )}
    </>
  );
}
