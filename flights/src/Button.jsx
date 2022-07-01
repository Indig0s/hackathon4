function Button({title, onClick}) {
  return (
    <div className="wrap">
      <button className="button" onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button;