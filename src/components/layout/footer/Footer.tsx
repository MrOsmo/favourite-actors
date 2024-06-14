import scss from "./Footer.module.scss"
import github from "../../../assets/github.svg"
import instagram from "../../../assets/instagram.svg"
import tiktok from "../../../assets/tiktok.svg"

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.img_div}>
            <a href="https://www.instagram.com/sherbekofficial2007/" target="_blank">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://github.com/MrOsmo" target="_blank">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.tiktok.com/@sherbekosmonaliev63894" target="_blank">
              <img src={tiktok} alt="TikTok" />
            </a>
          </div>

          <p>Copyright © 2021-2024. All rights are reserved.</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer