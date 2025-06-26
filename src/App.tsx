import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/types/selectedPage';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedpage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={selectedPage} />
    </div>
  );
}

export default App;
