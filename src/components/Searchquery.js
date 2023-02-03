import React, {useState} from 'react'



const Searchquery = () => {

   const [message, setMessage] = useState('');
   const [users, setUsers] = useState([])

 //const URL = 'https://jsonplaceholder.typicode.com/users'
 //const URL = 'http://localhost:8080/mpasearch/searchdemo'
 //const URL = 'http://localhost:9090/mpasearch/searchConcat/CUYAYA'
   
   const showData = async ()=> {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data.return)
    setUsers(data.return)
   }

  function searcher(nombre) {
   // alert(`hello, ${nombre}`);
    let mensaje = nombre;
    let arr = mensaje.split(' ');
    console.log(arr.length); 
    let URL = '';
    {(() => {
    switch (arr.length) {
        case 1 :
            URL = `http://168.181.186.118:9093/mpasearch/searchConcat/${arr[0]}`;
            return URL
        case 2 :
            URL = `http://168.181.186.118:9093/mpasearch/searchConcat2/${arr[0]}/${arr[1]}`;
            return URL
        case 3 :
            URL = `http://168.181.186.118:9093/mpasearch/searchConcat3/${arr[0]}/${arr[1]}/${arr[2]}`;
            return URL
        case 4 :
            URL = `http://168.181.186.118:9093/mpasearch/searchConcat4/${arr[0]}/${arr[1]}/${arr[2]}/${arr[3]}`;
            return URL
    }
    })()}
    console.log(arr[0]); 
    console.log(arr[1]);
    //const URL = `http://localhost:9090/mpasearch/searchConcat/'${arr[0]}/${arr[1]}`;
    console.log(URL);
    
    const showData1 = async ()=> {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data.return)
        setUsers(data.return)
        }
    showData1();
  }

 const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //const searcher = (nombre, e)=> {
  //  alert(`hello, ${nombre}`)
  //  showData()
  //}


  return (
    <div>
       <input onChange={handleChange} className='form-control' placeholder='Ingrese busqueda'></input> 
       <button onClick={()  => searcher(message)} className='btn btn-warning'>Buscar</button>
       <h2>Message: {message}</h2>
       <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                        <th>EXPED.</th>
                        <th>FECHA</th>
                        <th>LOCALIDAD</th>
                        <th>OFICIO</th>
                        <th>RELATO DEL HECHO</th>
                </tr>
            </thead>
            <tbody>
                {users.map( (user) => (
                    <tr key={user.nro_prev}>
                        <td>{user.nro_prev}</td>
                        <td>{user.prev_fecha}</td>
                        <td>{user.localidad_hecho}</td>
                        <td>{user.prev_funcionariospol}</td>
                        <td BGCOLOR="YELLOW">{user.relatos_hecho}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Searchquery