import ChvronWhiteIcon from '~/assets/icons/chevron.svg';
import ChvronBlackIcon from '~/assets/icons/chevron-black.svg';

const scrollIntoView = (elementId) => {
  var el = document.getElementById(elementId);
  el.scrollIntoView({
    behavior: 'smooth',
  });
};

export const ChevronDown = ({black, withMargin}) => {
  const icon = black ? ChvronBlackIcon : ChvronWhiteIcon;
  const classes = `flex items-center justify-center ${withMargin && 'mt-20'}`;

  return (
    <div className={classes}>
      <div className="animate-bounce">
        <img
          className="h-6 w-6 rotate-90 fill-white hover:scale-125 hover:cursor-pointer"
          src={icon}
          onClick={() => scrollIntoView('offer-section')}
        />
      </div>
    </div>
  );
};
