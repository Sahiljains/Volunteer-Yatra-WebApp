const PageConnect = ({ content, color }) => {
  return (
    <div
      className={`page-connect ${
        color === 'gray' ? 'gray-info' : color === 'yellow' ? 'yellow-bg' : ''
      } d-flex flex-column align-items-center`}>
      {content}
    </div>
  )
}

export default PageConnect
