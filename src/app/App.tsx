import { AppRouter } from '@/app/providers/router';
import { Header } from '@/features';

export const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};
