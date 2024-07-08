import logo from "../assets/netflix-logo.png"

const Header = () => {
  return (
      <div className="absolute z-10">
          <img className="w-40 pl-2 pt-4 bg-gradient-to-b from-black" src={logo} />
    </div>
  )
}
export default Header