function Button({title, onClick}) {
  return (
    <div className="wrap">
      <button class="button" onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button;