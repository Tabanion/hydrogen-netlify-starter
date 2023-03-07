import ChvronIcon from '~/assets/icons/chevron.svg';

const scrollIntoView = (elementId) => {
  var el = document.getElementById(elementId);
  el.scrollIntoView({
    behavior: 'smooth',
  });
};

export const ChevronDown = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="animate-bounce">
        <img
          className="h-6 w-6 rotate-90 fill-white hover:scale-125 hover:cursor-pointer"
          src={ChvronIcon}
          onClick={() => scrollIntoView('offer-section')}
        />
      </div>
    </div>
  );
};
