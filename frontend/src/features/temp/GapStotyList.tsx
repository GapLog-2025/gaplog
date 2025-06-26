// 예시 코드 파일입니다.
import { useQuery } from "@tanstack/react-query";
import { fetchGapStories } from "@/api/exampleAPI";
const GapStoryList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["gapStories"],
    queryFn: fetchGapStories,
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생!</p>;

  return <ul>{data?.map((story, idx) => <li key={idx}>{story}</li>)}</ul>;
};

export default GapStoryList;
