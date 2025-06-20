// OpenAI API 호출 함수
export const callOpenAI = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.content || "AI 응답을 받을 수 없습니다."
  } catch (error) {
    console.error("OpenAI API 호출 오류:", error)
    throw error
  }
}
