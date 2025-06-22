import { Suspense } from "react"
import ServicePage from "@/features/Service/ui/ServicePage"
import ServiceLoading from "@/features/Service/ui/ServiceLoading"

export default function Service() {
  return (
    <Suspense fallback={<ServiceLoading />}>
      <ServicePage />
    </Suspense>
  )
}