import {useState} from 'react';
import PromoImg from '~/assets/images/Promo1.png';
import {IconClose, ChevronDown} from '~/components';

export const PromoModal = () => {
  const [showModal, setShowModal] = useState(true);
  return showModal ? (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      id="modal-bg"
    >
      <div className="fixed inset-0 transition-opacity bg-opacity-75 bg-primary/40"></div>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div
            className="relative cursor-default flex-1 px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded shadow-xl sm:my-12 sm:flex-none sm:max-w-2xl sm:p-6 bg-modal"
            role="button"
            onClick={(e) => e.stopPropagation()}
            onKeyPress={(e) => e.stopPropagation()}
            tabIndex={0}
          >
            <div className="absolute top-0 right-0 md:pt-4 md:pr-4 sm:block">
              <button
                type="button"
                className="p-4 -m-4 transition text-primary hover:text-primary/50"
                onClick={() => setShowModal(false)}
              >
                <IconClose aria-label="Close panel" />
              </button>
            </div>
            <a href="https://www.instagram.com/sparks.md/">
              <img
                className="block object-cover w-full h-full"
                src={PromoImg}
              />
              <div className="flex flex-col items-center justify-center gap-x-6">
                <ChevronDown black={true} />
                <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-black shadow-xl">
                  <span className="w-0 h-0 bg-black absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-full text-black font-semibold transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    PROGRAMEAZĂ-TE
                  </span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
