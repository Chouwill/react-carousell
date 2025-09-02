import React, { useState } from "react";
import style from "./Carousell.module.scss";
import "./Carousell.scss";
export default function MyApp() {
  console.log(style);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsGroup = 7;

  const movieArray = [
    { id: 1, date: "12月01日", img: "https://picsum.photos/id/101/300/400" },
    { id: 2, date: "12月02日", img: "https://picsum.photos/id/102/300/400" },
    { id: 3, date: "12月03日", img: "https://picsum.photos/id/103/300/400" },
    { id: 4, date: "12月04日", img: "https://picsum.photos/id/104/300/400" },
    { id: 5, date: "12月05日", img: "https://picsum.photos/id/905/300/400" },
    { id: 6, date: "12月06日", img: "https://picsum.photos/id/106/300/400" },
    { id: 7, date: "12月07日", img: "https://picsum.photos/id/107/300/400" },
    { id: 8, date: "12月08日", img: "https://picsum.photos/id/108/300/400" },
    { id: 9, date: "12月09日", img: "https://picsum.photos/id/109/300/400" },
    { id: 10, date: "12月10日", img: "https://picsum.photos/id/110/300/400" },
    { id: 11, date: "12月11日", img: "https://picsum.photos/id/111/300/400" },
    { id: 12, date: "12月12日", img: "https://picsum.photos/id/112/300/400" },
    { id: 13, date: "12月13日", img: "https://picsum.photos/id/113/300/400" },
    { id: 14, date: "12月14日", img: "https://picsum.photos/id/114/300/400" },
    { id: 15, date: "12月15日", img: "https://picsum.photos/id/115/300/400" },
    { id: 16, date: "12月16日", img: "https://picsum.photos/id/116/300/400" },
    { id: 17, date: "12月17日", img: "https://picsum.photos/id/117/300/400" },
    { id: 18, date: "12月18日", img: "https://picsum.photos/id/118/300/400" },
    { id: 19, date: "12月19日", img: "https://picsum.photos/id/119/300/400" },
    { id: 20, date: "12月20日", img: "https://picsum.photos/id/120/300/400" },
    { id: 21, date: "12月21日", img: "https://picsum.photos/id/121/300/400" },
    { id: 22, date: "12月22日", img: "https://picsum.photos/id/122/300/400" },
    { id: 23, date: "12月23日", img: "https://picsum.photos/id/123/300/400" },
    { id: 24, date: "12月24日", img: "https://picsum.photos/id/124/300/400" },
    { id: 25, date: "12月25日", img: "https://picsum.photos/id/125/300/400" },
    { id: 26, date: "12月26日", img: "https://picsum.photos/id/126/300/400" },
    { id: 27, date: "12月27日", img: "https://picsum.photos/id/127/300/400" },
    { id: 28, date: "12月28日", img: "https://picsum.photos/id/128/300/400" },
    { id: 29, date: "12月29日", img: "https://picsum.photos/id/129/300/400" },
    { id: 30, date: "12月30日", img: "https://picsum.photos/id/130/300/400" },
  ];

  function showlist() {
    return movieArray.slice(currentPage - 1, currentPage * itemsGroup);
  }

  function nextPage() {
    setCurrentPage((value) => value + 1);
  }
  function returnPage() {
    setCurrentPage((value) => value - 1);
  }

  const computedData = showlist();

  return (
    <div>
      <div className={style["movie-slide"]}>
        <div className={style["movie-title"]}>
          <h2>即將上映</h2>
          <button onClick={nextPage}>下ㄧ頁</button>
          <button onClick={returnPage}>上ㄧ頁</button>
        </div>
        <div className={style["movie-carsoul"]}>
          <div className={style["time-line"]}>
            <div className={style.team}>
              <div className={style.line}></div>

              <div className={style["list-item"]}>
                {computedData.map((item) => {
                  // return <img src={item.img} alt="" />;
                  return (
                    <div key={item.id} className={style.item}>
                      <div className={style.circle}></div>
                      <p>{item.date}</p>
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
