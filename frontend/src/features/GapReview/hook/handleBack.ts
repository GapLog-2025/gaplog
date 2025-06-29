import { useNavigate } from 'react-router-dom';

export default function useHandleBack() {
  const navigate = useNavigate();

  return () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/gap-review'); // 대체 경로
    }
  };
}
