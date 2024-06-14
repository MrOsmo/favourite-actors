import Main from "./main/Main"
import scss from "./Layout.module.scss"

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Main />
    </div>
  )
}

export default Layout