import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { LogOut, Settings } from 'lucide-react';
import Divider from './Divider';

interface Props {
  username: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onLogout: () => void;
}

export default function UserDropdown({
  username,
  isOpen,
  setIsOpen,
  onLogout,
}: Props) {
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-4 typo-strong text-main"
      >
        <Avatar alt="유저 이미지" sx={{ width: 32, height: 32 }} />
        {username} 님
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[300px] p-5 bg-white border border-border rounded-md shadow-lg z-50">
          <div className="w-full flex flex-col items-center p-4 gap-3">
            <div className="w-full flex flex-col gap-2 items-center">
              <Avatar
                alt="유저 이미지(드랍다운)"
                sx={{ width: 64, height: 64 }}
              />
              <p className="typo-subheading text-secondary">{username}</p>
            </div>
            <Divider />
            <div className="w-full flex items-center justify-between gap-2 text-main typo-small leading-none px-2 py-1">
              <button
                onClick={() => {
                  navigate('/mypage');
                  setIsOpen(false);
                }}
                className="flex flex-1 items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-md"
              >
                마이페이지
                <Settings size={18} />
              </button>
              <div className="w-px h-5 bg-border" />
              <button
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
                className="flex flex-1 items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-md"
              >
                로그아웃
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
