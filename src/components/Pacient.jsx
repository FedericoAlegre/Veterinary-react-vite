function Pacient({pacient, setPacient, deletePacient}) {

  const handleDelete = () => {
    const response = confirm("Are you sure you want to delete Pacient " + pacient.name)
    
    if(response){
      deletePacient(pacient.id)
    }
  }

  return (
    <div className="bg-white my-5 text-black px-5 py-8 rounded-3xl md:mx-3">
        <p className="font-bold mb-5">Name: {""}
          <span className="font-normal">{pacient.name}</span>
        </p>
        <p className="font-bold mb-5">Owner: {""}
          <span className="font-normal">{pacient.owner}</span>
        </p>
        <p className="font-bold mb-5">Email: {""}
          <span className="font-normal">{pacient.email}</span>
        </p>
        <p className="font-bold mb-5">Date: {""}
          <span className="font-normal">{pacient.date}</span>
        </p>
        <p className="font-bold mb-5">Symptoms: {""}
          <span className="font-normal">{pacient.symptoms}</span>
        </p>
        <div className=" flex justify-between mt-10"> 
          <button className="py-2 px-10 text-white bg-cyan-400 rounded-full hover:text-black hover:bg-cyan-500 font-bold uppercase"
           type="button"
           onClick={()=> setPacient(pacient)}>Edit</button>
          <button className="py-2 px-10 bg-red-600 text-white rounded-full hover:text-black hover:bg-red-500 font-bold uppercase" 
          type="button"
          onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Pacient
