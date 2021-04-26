export const Cast = ({ castMembers  }) => {
  return (
    <section className="body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col w-full mb-5">
          <h1 className="text-4xl font-bold text-gray-900">Cast</h1>
        </div>

        <div className="grid grid-cols-6 gap-1">
          {
            castMembers.map((member, idx) => {
              return (
                <div className="flex flex-col space-y-2" key={idx}>
                  <div
                    className="rounded-md"
                  >
                    <div>
                      <img 
                        alt="cast member" 
                        className="flex-shrink-0 rounded-lg" 
                        src={member.profilePath}
                        height={250}
                        width={200} 
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="text-left flex">

                      <h2 className="title-font font-medium text-lg text-gray-900 ">{member.name}</h2>                      
                    </div>
                    <p className="text-left text-gray-400">{member.character}</p>                    
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