export const Cast = ({ castMembers = [1, 2, 3, 4, 5, 6] }) => {
  return (
    <section className="body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col w-full mb-5">
          <h1 className="text-4xl font-bold text-gray-900">Cast</h1>
        </div>

        <div className="grid grid-cols-6 gap-1">
          {
            castMembers.map((movie, idx) => {
              return (
                <div className="flex flex-col space-y-2">
                  <div
                    className="rounded-md"
                  >
                    <div className="">
                      <img alt="team" className="flex-shrink-0 rounded-lg" src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2//tM2rsBXd7fnNwjMNgGz4vqctlYF.jpg'} height={250} width={200} />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="text-left flex">

                      <h2 className="title-font font-medium text-lg text-gray-900 ">Troy Aikman</h2>                      
                    </div>
                    <p className="text-left text-gray-400">Self</p>                    
                  </div>                  
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}