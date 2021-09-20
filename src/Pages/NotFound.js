import { useEffect } from 'react';
import Header from '../components/header';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | lgcy';
  }, []);

  return (
      <div>
          <Header />
          <div className="mx-auto max-w-screen-lg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }} >
        <p className="text-center text-2xl">Error!</p>
      </div>
    </div>
  );
}
