import { useDispatch, useSelector } from "react-redux"
import scss from "./List.module.scss"
import { getActors } from "../../../store/actorsSlice"
import { useEffect } from "react"
import { RootState } from "@reduxjs/toolkit/query"
import { Link } from "react-router-dom"
import { AppDispatch } from "../../../store/store"

const List = () => {
  const dispatch: AppDispatch = useDispatch()
  const actors = useSelector((state: RootState) => state.actors.actors);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getActors())
    }
    fetchData()
  }, [dispatch])

  return (
    <section className={scss.list}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1>Actors/Actress</h1>
          <div className={scss.actors_list}>
            {actors.map((e: any, index: any) => (
              <div className={scss.actors} key={index}>
                <img src={e.mainImg} alt="" />
                <div className={scss.profile}>
                  <h2>{e.name}</h2>
                  <h3>{e.ratingStars} ({e.rating})</h3>
                  <Link to={`actors/${e._id}`}>
                    <button>VIEW DETAILS</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default List