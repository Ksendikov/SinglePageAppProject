import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Data from './components/Data';
import OnLoadingData from './components/LoadingData'


function RetrievingTableData() {
  const DataLoading = OnLoadingData(Data)

  const [tableData, setTableData] = useState([{
    loading: false,
    fields: null,
  }])

  useEffect(() => {
    setTableData({loading:true})

    const apiUrl = 'http://127.0.0.1:8000/api/table/'

    axios.get(apiUrl).then((resp) => {
      const allData = resp.data
      setTableData({
        loading: false,
        fields: allData
      })
    })
  }, [setTableData])
  
  return (
    <div className="App">
      <DataLoading isLoading={tableData.loading} fields={tableData.fields}/>
    </div>
  );
}

export default RetrievingTableData;