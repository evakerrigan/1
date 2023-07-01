import { AppRouter } from '@/app/providers/router';
import { Header } from '@/features';
import './index.scss';

export const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};
