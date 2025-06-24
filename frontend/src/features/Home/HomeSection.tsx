import SectionBlock from '@/features/Home/ui/SectionBlock';
import MessageCard from '@/features/Home/ui/card/MessageCard';
import { messageList } from '@/features/Home/data/messageList';
import { selectTwoRandom } from '@/features/Home/utils/selectTwoRandom';
export default function HomeSection() {
  // 메시지 2개 랜덤 가져오기
  const [msg1, msg2] = selectTwoRandom(messageList);
  return (
    <div className="w-full flex flex-col gap-8 ">
      {/* 응원 메시지 row */}
      <SectionBlock title="오늘의 응원 메시지">
        <MessageCard text={msg1} color="purple" />
        <MessageCard text={msg2} color="blue" />
      </SectionBlock>
    </div>
  );
}
