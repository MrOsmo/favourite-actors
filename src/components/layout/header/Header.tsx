import scss from "./Header.module.scss"
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <div className={scss.content}>
          <nav>
            <Link to="/">
              <img src={logo} alt="LogoIcon" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header