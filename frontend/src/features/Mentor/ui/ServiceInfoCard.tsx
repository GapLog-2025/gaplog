import { Card, CardContent, CardHeader } from '@/components/Card';

export default function ServiceInfoCard() {
  return (
    <Card>
      <CardHeader className="w-full flex justify-between items-center">
        <div>
          <p className="typo-subheading text-secondary  leading-none">
            서비스 안내
          </p>
          <p className="typo-small text-main leading-none">
            해당 게시판을 이렇게 활용해보세요!
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex flex-col gap-5 typo-text text-secondary pr-6">
          <div className="flex flex-col items-start">
            {/* title */}
            <div className="flex items-center gap-4 ">
              <div className="w-2 h-2 bg-gd-point-main rounded-full " />
              <p className="typo-strong text-black">
                고민이 생기면 언제든지 질문을 남겨보세요.
              </p>
            </div>
            {/* content */}
            <p className="pl-6">공백기 중 생긴 진로, 스펙, 이력서, 면접 고민</p>
          </div>

          <div className="flex flex-col items-start">
            {/* title */}
            <div className="flex items-center gap-4 ">
              <div className="w-2 h-2 bg-gd-point-main rounded-full " />
              <p className="typo-strong text-black">
                나와 비슷한 고민이 있는 글을 찾아 읽어보세요
              </p>
            </div>
            {/* content */}
            <p className="pl-6">
              태그, 검색어 등을 활용하면 내가 원하는 질문을 쉽게 찾을 수 있어요.
            </p>
          </div>

          <div className="flex flex-col items-start">
            {/* title */}
            <div className="flex items-center gap-4 ">
              <div className="w-2 h-2 bg-gd-point-main rounded-full " />
              <p className="typo-strong text-black">
                태그를 활용해 궁금한 내용을 분류해보세요.
              </p>
            </div>
            {/* content */}
            <p className="pl-6">
              직업 분류, 공백기간, 전공 여부, 학력 등 궁금한 내용을 태그를
              활용해 검색하고 글을 작성할 수 있어요.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
