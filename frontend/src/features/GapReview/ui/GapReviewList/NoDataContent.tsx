import { ActionButton } from '@/components/Button';
import { SearchSlash } from 'lucide-react';

interface NoDataContentProps {
  onClick: () => void;
}

export default function NoDataContent({ onClick }: NoDataContentProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 pt-20">
      <div className="w-[80px] h-[80px] flex justify-center items-center bg-gray-200 rounded-full ">
        <SearchSlash size={48} className="text-main" />
      </div>
      <p className="typo-subheading text-">
        일치하는 공백기 후기 게시글이 없습니다.
      </p>
      <ActionButton onClick={onClick}>새로고침</ActionButton>
    </div>
  );
}
