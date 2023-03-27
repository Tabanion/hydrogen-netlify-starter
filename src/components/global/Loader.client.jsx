import {useState} from 'react';
import Logo from '~/assets/images/logo-belise.png';

export const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [layoutClasses, setLayoutClasses] = useState(
    'fixed h-full w-full z-50 bg-belise flex justify-center items-center',
  );

  setTimeout(() => {
    setLayoutClasses(
      'fixed h-full w-full z-50 bg-belise flex justify-center items-center animate-fade-object',
    );
  }, 200);

  setTimeout(() => {
    setShowLoader(false);
  }, 1200);

  return showLoader ? (
    <div className={layoutClasses}>
      <div className="w-48 h-48 animate-spin-object">
        <img src={Logo} />
      </div>
    </div>
  ) : null;
};
