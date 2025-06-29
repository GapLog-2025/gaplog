import { LoaderCircle } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <LoaderCircle className="animate-spin w-28 h-28 text-primary" />
      <p className="mt-4 text-lg text-title">로딩 중입니다.</p>
    </div>
  );
}
