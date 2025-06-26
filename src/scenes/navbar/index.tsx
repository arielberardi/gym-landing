import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

import Logo from '@/assets/images/Logo.png';
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/components/actionbutton';
import type { SelectedPage } from '@/types/selectedPage';

type Props = {
  selectedPage: SelectedPage;
  setSelectedpage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

function Navbar({ selectedPage, setSelectedpage, isTopOfPage }: Props) {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  return (
    <nav>
      <div
        className={clsx(
          flexBetween,
          'fixed top-0 z-30 w-full py-6',
          isTopOfPage ? '' : 'bg-primary-100 drop-shadow'
        )}
      >
        <div className={clsx(flexBetween, 'mx-auto w-5/6')}>
          <div className={clsx(flexBetween, 'w-full gap-16')}>
            {/* Left Side */}
            <img alt="logo" src={Logo} />

            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className={clsx(flexBetween, 'w-full gap-16')}>
                <div className={clsx(flexBetween, 'gap-8 text-sm')}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedpage} />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedpage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedpage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedpage}
                  />
                </div>
                <div className={clsx(flexBetween, 'gap-8')}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedpage}>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggle(!isMenuToggle)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMediumScreens && isMenuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-4/5 bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggle(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedpage} />
            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedpage} />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedpage}
            />
            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedpage} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
