const Button = (props) => {
  return (
    <div className="bg-linear-to-r from-pink-200 to-orange-100 rounded-sm h-9 w-auto px-3 py-1 cursor-pointer">{props.name}</div>
  )
}

export default Button