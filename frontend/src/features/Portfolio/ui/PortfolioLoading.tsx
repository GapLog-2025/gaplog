import type React from "react"

import { Card, CardContent, CardHeader } from "@/components/Card"

// 스켈레톤 컴포넌트
const Skeleton: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
)

export default function PortfolioLoading() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 메인 콘텐츠 */}
        <div className="flex-1">
          {/* 헤더 */}
          <div className="mb-8">
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-4 w-96" />
          </div>

          {/* 진행 상황 */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <Skeleton className="h-5 w-48 mb-4" />
              <Skeleton className="h-2 w-full mb-4" />

              <div className="flex items-center justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <Skeleton className="w-10 h-10 rounded-full mb-2" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 입력 폼 */}
          <Card className="mb-8">
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-20 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>

              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-24 w-full" />
              </div>
            </CardContent>
          </Card>

          {/* 네비게이션 */}
          <div className="flex justify-between">
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-20" />
          </div>
        </div>

        {/* 사이드바 */}
        <div className="w-full lg:w-80 space-y-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-5 w-32" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[...Array(3)].map((_, j) => (
                    <div key={j}>
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-3 w-3/4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
