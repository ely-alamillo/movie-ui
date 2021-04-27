
export const MoviePoster = ({ link, children, classNames, onClick, alt }) => {
  return (
    <div
      className={`p-4 lg:w-1/5 md:w-1/2 border-solid border border-transparent hover:shadow-2xl hover:border-gray-100 rounded-md transition-all cursor-pointer ${classNames ? classNames : ''}`}
      onClick={onClick}
    >
      <div className="h-full flex flex-col items-center text-center">
        <img loading="lazy" alt={alt} className="flex-shrink-0 rounded-lg" src={link} height={450} width={300} />
        {children && children}
      </div>
    </div>
  )
}