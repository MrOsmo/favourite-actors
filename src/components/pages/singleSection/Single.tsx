import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import scss from "./Single.module.scss";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Actor {
  _id: number;
  name: string;
  mainImg: string;
  subImg1: string;
  subImg2: string;
  subImg3: string;
  subImg4: string;
  career: string[];
  birthday: string;
  birthPlace: string;
  genre: string[];
  movies: string[];
}

const Single = () => {
  const { id } = useParams<{ id: string }>();
  const [actors, setActors] = useState<Actor | null>(null);

  useEffect(() => {
    fetch(`https://api-v2.elchocrud.pro/api/v1/c3bdae21bdb0e680d54230ba34d73713/actors/${id}`)
      .then(res => res.json())
      .then(data => setActors(data));
  }, [id]);

  return (
    <section className={scss.single}>
      <div className={scss.container}>
        <div className={scss.content}>
          {actors && (
            <div className={scss.content_parts}>
              <h2>
                <Link to={"/"}>
                  List »
                </Link>
                <span> {actors.name}</span>
                </h2>
              <div className={scss.contents}>
                <div className={scss.profile}>
                  <div className={scss.sides}>
                    <div className={scss.left}>
                      <img src={actors.mainImg} alt={actors.name} />
                    </div>
                    <div className={scss.right}>
                      <h1>{actors.name}</h1>
                      <div className={scss.border}></div>

                      <div className={scss.about}>
                        <h2>About The Person</h2>

                        <div className={scss.about_information}>
                          <p>Career: <span>{actors.career.join(', ')}</span></p>
                          <p>Birthday: <span>{actors.birthday}</span></p>
                          <p>Place of Birth: <span>{actors.birthPlace}</span></p>
                          <p>Genre: <span>{actors.genre.join(' , ')}</span></p>
                          <div className={scss.border}></div>
                        </div>
                      </div>

                      <div className={scss.movies}>
                        <h2>Best TV Series / Movies</h2>

                        <div className={scss.about_movies}>
                          <p>{actors.movies.join(" , ")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={scss.border}></div>
                </div>

                <div className={scss.content_2}>
                  <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={2500}
                    useKeyboardArrows
                  >
                    <div>
                      <img src={actors.subImg1} alt={`${actors.name} 1`} />
                    </div>
                    <div>
                      <img src={actors.subImg2} alt={`${actors.name} 2`} />
                    </div>
                    <div>
                      <img src={actors.subImg3} alt={`${actors.name} 3`} />
                    </div>
                    <div>
                      <img src={actors.subImg4} alt={`${actors.name} 4`} />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Single;
