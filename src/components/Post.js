function Post({ date, image, title }) {
    let { url, alt } = image
  
    return (
      <div className="post">
        <img alt={alt} src={`${url}`} />
        <div className="description">{alt}</div>
        <div className="text">
          <h2>{title}</h2>
          <h3>{date.substring(0, 10)}</h3>
        </div>
      </div>
    )
  }
  export default Post