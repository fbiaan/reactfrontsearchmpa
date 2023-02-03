import React, {useState, useEffect} from 'react'

const SearchSensitive = () => {
  //setear los hooks useState
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  
  // funcion traer api
  //const URL = 'https://jsonplaceholder.typicode.com/users'
  //const URL = 'http://localhost:9090/mpasearch/searchdemo'
  const URL = 'http://168.181.186.118:9093/mpasearch/searchdemo'
  const showData = async ()=> {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data.return)
    setUsers(data.return)
  }
  

//  const showLocal  =  
//    fetch("datos/datos1.json")
//    .then(response => response.json())
//    .then(datos => {
//    setUsers(datos)
//  })

  //console.log("fin de json")
  

  // funcio nde busqeuda
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  // metodod de filtrado
/*  let results = []
  if(!search)
  {
    results = users
  }else{
    results = users.filter ( (dato) =>
    dato.name.toLowerCase().includes(search.toLocaleLowerCase()) 
    )
  } */

  const results = !search ? users : users.filter ( (dato) => dato.relatos_hecho.toLowerCase().includes(search.toLocaleLowerCase()))

  // renderizamos la vista 
  useEffect ( () => {
    showData()
    //showLocal()
    //fetch("datos/datos1.json")
    //.then(response => response.json())
    //.then(datos => {
    //setUsers(datos)
  //})
  }, [])


  return (
    <div>
        
        
        <input value={search} onChange={searcher} type="text" placeholder='Ingrese datos...' className='form-control'></input>

        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                        <th>NOMBRE</th>
                        <th>USUARIO</th>
                </tr>
            </thead>
            <tbody>
                {results.map( (user) => (
                    <tr key={user.nro_prev}>
                        <td>{user.nro_prev}</td>
                        <td>{user.relatos_hecho}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default SearchSensitive