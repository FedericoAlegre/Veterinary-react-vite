import { useState, useEffect } from "react"
import Error from "./Error"


function Form({setPacients, pacients, pacient, setPacient}) {

  const [name, setName] = useState("")
  const [owner, setOwner] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [symptoms, setSymptoms] = useState("")
  const [error, setError] = useState(false)

  useEffect(()=>{
    if(Object.keys(pacient).length > 0){
      setName(pacient.name)
      setOwner(pacient.owner)
      setDate(pacient.date)
      setEmail(pacient.email)
      setSymptoms(pacient.symptoms)
    }
  }, [pacient])

  const generateId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)
    return random + date
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if([name, owner, email, date, symptoms].includes("")) setError(true);
    else  {
      setError(false);
      const objectPacient = {
        name, owner, email, date, symptoms
      }
      
      if(pacient.id){
        objectPacient.id = pacient.id
        const updatedPacients = pacients.map( pacientState => pacientState.id === pacient.id
          ? objectPacient : pacientState)
          setPacients(updatedPacients)
          setPacient({})
      }else{
        objectPacient.id = generateId()
        setPacients([...pacients, objectPacient])
      }

      

      setName("")
      setOwner("")
      setEmail("")
      setDate("")
      setSymptoms("")
    }  
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
        <p className="text-lg mt-5 text-center mb-6">
          <span className="text-cyan-400 font-bold">Manage</span> and Add Pacients          
        </p>
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-cyan-700 shadow-lg py-8 px-5 mb-5">
          <div className="mb-5">
            <label htmlFor="petName" className="text-black block font-bold">Pet name</label>
            <input id="petName" className="border-2 w-full p-2 mt-2 rounded-3xl text-black" type="text" placeholder="Pet name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="ownerName" className="text-black block font-bold">Owner name</label>
            <input id="ownerName" className="border-2 w-full p-2 mt-2 rounded-3xl text-black" type="text" placeholder="Owner name" value={owner} onChange={(e)=>setOwner(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="text-black block font-bold">Email</label>
            <input id="email" className="border-2 w-full p-2 mt-2 rounded-3xl text-black" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="date" className="text-black block font-bold">Date</label>
            <input id="date" className="border-2 w-full p-2 mt-2 rounded-3xl text-black" type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
          </div>
          <div className="mb-5">
            <label htmlFor="symptoms" className="text-black block font-bold">Symptoms</label>
            <textarea id="symptoms" className="border-2 w-full p-2 mt-2 rounded-3xl text-black" placeholder="Describe symptoms" value={symptoms} onChange={(e)=>setSymptoms(e.target.value)}/>
          </div>

          {error && 
            <Error msg = "Todos los campos son obligatorios"/>
          }
          <input type="submit" 
          className="bg-cyan-400 w-full p-3 uppercase font-bold rounded-3xl hover:bg-cyan-200 hover:text-gray-500 cursor-pointer transition-all"
           value={pacient.id ? "Edit Pacient" : "add pacient"}/>
          
        </form>
    </div>
  )
}

export default Form
