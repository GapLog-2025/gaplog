import { BookDashed } from 'lucide-react';
import { MoveButton } from '@/components/Button';
import useHandleBack from '../../hook/handleBack';

export default function NoDataContent() {
  const handleback = useHandleBack();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 mt-20">
      <div className="w-[80px] h-[80px] flex justify-center items-center bg-gray-200 rounded-full ">
        <BookDashed size={40} className="text-main" />
      </div>
      <h3 className="typo-subheading text-black">존재하지 않는 후기입니다.</h3>
      <MoveButton onClick={handleback}>뒤로 가기</MoveButton>
    </div>
  );
}
