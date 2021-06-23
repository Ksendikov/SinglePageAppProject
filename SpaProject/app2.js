import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, {Component} from 'react';

function Table() {

  const [namefields, setNamefields] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: 'http://127.0.0.1:8000/api/table/'
    }).then(response => {
      setNamefields(response.data)
    })
  }, [])

  console.log(Object.keys(namefields["results"][0]))
  
  return (
    <div className="App">

    
      <h1> ddfgdgdg  </h1>
    

    

       {/* {<table className="table table-bordered border-primary">
            <caption>Таблица</caption>
            <tr>
              {Object.keys(namefields["results"][0]).map(attr => <th key={attr}>
                   {attr.toUpperCase()}
                   </th>)}  
            </tr>
        </table> } */}

      

    </div>
  );
}

export default Table;
















// class Table extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       users: [],
//       isLoading: false,
//       isError: false
//     }
//   }
// async componentDidMount() {
//   this.setState({ isLoading: true })
//   const response = await fetch('http://127.0.0.1:8000/api/table/')
//   if (response.ok) {
//     const tabledate = await response.json()
//     // console.log(this.state.tabledate["result"])
//     this.setState({ tabledate, isLoading: false })
//   } else {
//     this.setState({ isError: true, isLoading: false })
//   }
//   console.log(Object.keys(this.state.tabledate["results"][0]))
//   console.log(this.state.tabledate["results"].length)
// }
// renderTableHeader = () => {
//   return Object.keys(this.state.tabledate["results"][0]).map(attr => <th key={attr}>
//     {attr.toUpperCase()}
//   </th>)
// }
// renderTableRows = () => {
//   return this.state.tabledate["results"][0].map( field => {
//     return (
//       <tr key={field.id}>
//         <td>{field.id}</td>
//         <td>{field.date}</td>
//       </tr>
//     )
//   }
//   )
// }
// render(){
//   const {tabledate, isLoading, isError} = this.state
//   if(isLoading){
//     return <div>Loading . . .</div>
//   }
//   if(isError){
//     return <div>Error . . .</div>
//   }
//   return this.state.tabledate["results"].length > 0
//   ? (
//     <table>
//       <thead>
//         <tr>
//           {this.renderTableHeader()}
//         </tr>
//       </thead>
//       <tbody>
//         {this.renderTableRows()}
//       </tbody>
//     </table>
//   ):(
//     <div>No components </div>
//   )
//   }
// }
// export default Table