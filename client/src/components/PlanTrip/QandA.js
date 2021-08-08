const QandA = ({ qA }) => {
  return (
    <div className='q-a vertical-margin'>
      <div className='container-fluid'>
        <h1 className='text-semi-bold'>Q & A</h1>
      </div>
      {qA.map((query, index) => (
        <div key={index}>
          <div className={`row no-gutters ${index % 2 === 1 ? 'gray-info' : ''}`}>
            {index % 2 === 0 && (
              <div className='col-sm-6 text-column'>
                <h1 className='number odd d-flex align-items-center'>
                  <span className='text-medium'>{index + 1}</span>
                  <div className='line'></div>
                </h1>
                <h1 className='text-medium pt-4 info'>{query.title}</h1>
              </div>
            )}
            <div className='col-sm-6'>
              <div className='card d-flex flex-column justify-content-center'>{query.content}</div>
            </div>
            {index % 2 === 1 && (
              <div className='col-sm-6 text-column'>
                <h1 className='number even lead d-flex align-items-center'>
                  <div className='line'></div>
                  <span className='text-medium'>{index + 1}</span>
                </h1>
                <h1 className='text-medium pt-4 text-right info-even float-right'>{query.title}</h1>
              </div>
            )}
          </div>
          <div className='row-buffer'></div>
        </div>
      ))}
    </div>
  )
}

QandA.defaultProps = {
  qA: [],
}

export default QandA
