export const Error = ({ errorMessage = 'We encountered an error.' }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-24 pt-10 mx-auto">
        <div className="flex flex-col w-full mb-5 border-2 border-red-600 p-10 bg-red-200">
          <h1 className="text-4xl font-bold text-red-600">{errorMessage}</h1>
        </div>
      </div>
    </section>
  )
}