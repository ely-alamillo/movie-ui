export const Loader = ({ loaderMessage = 'Loading...' }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-24 pt-10 mx-auto">
        <div className="flex flex-col w-full border-2 p-10">
          <h1 className="text-4xl font-bold">{loaderMessage}</h1>
        </div>
      </div>
    </section>
  )
}