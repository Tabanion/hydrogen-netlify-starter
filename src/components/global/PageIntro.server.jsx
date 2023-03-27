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
    </header>
  );
}

function replaceWithBr(text) {
  return text.replace(/\n/g, '<br />');
}
