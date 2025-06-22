import type React from "react"
import { 
  Box, 
  Container, 
  Card, 
  CardContent, 
  Skeleton
} from "@mui/material"

export default function ServiceLoading() {
  return (
    <Container maxWidth="lg" className="py-12">
      {/* 서비스 소개 헤더 */}
      <div className="text-center mb-16">
        <Skeleton className="h-6 w-32 mx-auto mb-4" />
        <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
        <Skeleton className="h-6 w-full max-w-3xl mx-auto mt-2" />
      </div>

      {/* 주요 기능 소개 */}
      <div className="mb-20">
        <Skeleton className="h-10 w-64 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-8">
                <Skeleton className="h-16 w-16 rounded-full mb-6" />
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-3/4 mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 서비스 가치 */}
      <div className="mb-20">
        <Skeleton className="h-10 w-64 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-start gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 서비스 이용 방법 */}
      <div className="mb-20">
        <Skeleton className="h-10 w-64 mx-auto mb-12" />
        <div className="space-y-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="md:flex items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <Skeleton className="h-6 w-24 mb-2" />
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
              </div>
              <div className="md:w-1/2">
                <Skeleton className="h-48 w-full rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Skeleton className="h-10 w-64 mx-auto mb-6" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-8" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-40" />
        </div>
      </div>
    </Container>
  )
}