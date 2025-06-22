// 예시: 공백기 후기 리스트 조회 API

export const fetchGapStories = async (): Promise<string[]> => {
  const response = await fetch("/api/gap-stories");
  if (!response.ok) throw new Error("Failed to fetch gap stories");
  return response.json();
};
