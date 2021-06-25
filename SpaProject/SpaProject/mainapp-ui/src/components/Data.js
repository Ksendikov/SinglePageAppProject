function Data(props) {

    const { fields } = props
    // console.log(props)
    console.log(fields)
    if (!fields || fields.length === 0) return <p>Нет данных.</p>
    

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>name</th>
                        <th>quantity</th>
                        <th>distance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fields.results.map((field) =>
                            <tr key={field.id}>
                                <td>{field.date}</td>
                                <td>{field.name}</td>
                                <td>{field.quantity}</td>
                                <td>{field.distance}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
      <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
      </div>
      </div>
      
    )
}

export default Data