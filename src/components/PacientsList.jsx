import Pacient from "./Pacient"

function PacientsList({pacients , setPacient, deletePacient}) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen ">

      {pacients && pacients.length ? (
        <>
          <h2 className="font-black mt-10 text-3xl text-center">Pacients List</h2>
          <p className="text-lg my-5 text-center">
            Manage your {""}<span className="text-cyan-400 font-bold">Patients and Appointments</span>          
          </p>
          <div className="md:h-full md:overflow-y-scroll rounded-3xl md:mx-5">
        
          {
            pacients.map( p => (
              <Pacient
                key={p.id}
                pacient ={p}
                setPacient={setPacient}
                deletePacient={deletePacient}/> 
            ))
          }      

          </div>
        </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">There are no Pacients</h2>
          <p className="text-lg mt-5 text-center mb-6">
            Start by Adding your {""}<span className="text-cyan-400 font-bold">Patients</span>          
          </p>
        </>
        
        ) }
      
           
    </div>
  )

}

export default PacientsList
