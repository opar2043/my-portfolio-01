const Title = ({ head, head2, para }) => {
  return (
    <div className="flex flex-col items-center my-5 mt-0 md:mt-10">
      <div className="flex items-center mb-3 w-full justify-center gap-3">
        {/* Left Border */}
        <div className="hidden sm:block border-t-2 border-yellow-400 w-12 sm:w-16 mt-3"></div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 text-center">
          {head} <span className="text-yellow-400">{head2}</span>
        </h2>

        {/* Right Border */}
        <div className="hidden sm:block border-t-2 border-yellow-400 w-12 sm:w-16 mt-3"></div>
      </div>

      {/* Paragraph */}
      <p className="text-yellow-400 text-center">{para}</p>
    </div>
  );
};

export default Title;

