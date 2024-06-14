import scss from "./Home.module.scss"
import robertImg from "../../../assets/ironMan.png"

const Home = () => {
  return (
    <section className={scss.home}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.description}>
            <h1>MY FAVORITE <span>ACTORS</span></h1>
            <p className={scss.description_p}>  On this website you can find my favourite actors, who have captivated audiences with their extraordinary performances, unique charisma, and unforgettable roles in various films and TV shows.
            </p>

            <p className={scss.build_p}>Built by S. Osmonaliev</p>

          </div>
          <img src={robertImg} alt="Robert-Downey-Junior" />
        </div>
      </div>
    </section>
  )
}

export default Home