import AppRouter from '@/router/AppRouter';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </>
  );
}

export default App;
