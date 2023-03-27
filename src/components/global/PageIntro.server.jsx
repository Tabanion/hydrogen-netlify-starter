import {Link} from '@shopify/hydrogen';

export function PageIntro({title, description}) {
  return (
    <header className="relative flex flex-col w-full text-center p-8 sm:p-24">
      <h2 className="text-xl sm:text-5xl whitespace-pre-wrap max-w-prose font-bold text-belise">
        {title}
      </h2>
      <br />
      <p
        className="text-lg text-black align-left font-serif opacity-75 px-0 lg:px-48"
        dangerouslySetInnerHTML={{__html: replaceWithBr(description)}}
      />

      <div className="md:block mt-10">
        <Link to="https://n767677.alteg.io/">
          <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-black ">
            <span className="w-0 h-0 bg-black absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black font-semibold transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              PROGRAMEAZĂ-TE
            </span>
          </button>
        </Link>
      </div>
    </header>
  );
}

function replaceWithBr(text) {
  return text.replace(/\n/g, '<br />');
}
