import React, { useState } from "react";
import style from "./Carousell.module.scss";
import "./Carousell.scss";
export default function MyApp() {
  console.log(style);

  let [num, setNums] = useState(0);

  const movieArry = [
    {
      id: 1,
      date: "12月19日",
      img: "https://image.tmdb.org/t/p/w500/bekdAKIaggJxYBbmDa1MOeJ9MC4.jpg",
    },
    {
      id: 2,
      date: "12月20日",
      img: "https://image.tmdb.org/t/p/w500/bekdAKIaggJxYBbmDa1MOeJ9MC4.jpg",
    },
    {
      id: 3,
      date: "12月21日",
      img: "https://image.tmdb.org/t/p/w500/bekdAKIaggJxYBbmDa1MOeJ9MC4.jpg",
    },
    {
      id: 4,
      date: "12月21日",
      img: "https://image.tmdb.org/t/p/w500/bekdAKIaggJxYBbmDa1MOeJ9MC4.jpg",
    },
    {
      id: 5,
      date: "12月21日",
      img: "https://image.tmdb.org/t/p/w500/bekdAKIaggJxYBbmDa1MOeJ9MC4.jpg",
    },
    {
      id: 6,
      date: "12月21日",
      img: "https://image.tmdb.org/t/p/w500/bekdAKIaggJxYBbmDa1MOeJ9MC4.jpg",
    },
    {
      id: 7,
      date: "12月21日",
      img: "https://image.tmdb.org/t/p/w500/bekdAKIaggJxYBbmDa1MOeJ9MC4.jpg",
    },
  ];

  function addNums() {
    setNums(num + 3);
    console.log(num);
  }
  return (
    <div>
      <div className={style["movie-slide"]}>
        <div className={style["movie-title"]}>
          <h2>即將上映</h2>
        </div>
        <div className={style["movie-carsoul"]}>
          <div className={style["time-line"]}>
            <div className={style.team}>
              <div className={style.line}></div>

              <div className={style["list-item"]}>
                {movieArry.map((item) => {
                  // return <img src={item.img} alt="" />;
                  return (
                    <div key={item.id} className={style.item}>
                      <div className={style.circle}></div>
                      <p>12月19日</p>
                      <div className={style["img-box"]}>
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
