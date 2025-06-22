import { Suspense } from "react"
import PortfolioPage from "@/features/Portfolio/ui/PortfolioPage"
import PortfolioLoading from "@/features/Portfolio/ui/PortfolioLoading"

export default function Portfolio() {
  return (
    <Suspense fallback={<PortfolioLoading />}>
      <PortfolioPage />
    </Suspense>
  )
}
