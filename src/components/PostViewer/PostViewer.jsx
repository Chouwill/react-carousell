import { useState, useEffect } from "react";
import { getPlaceholder } from "../../api/method";
import "./PostViewer.scss";

export default function PostViewer() {
  let [postTexts, setPosts] = useState([]);

  let [startValue, setStart] = useState(0);

  let [rangeValue, setRange] = useState(10);

  let [pageNum, setPages] = useState(1);

  let [mainStatus, setStatus] = useState(false);

  let [spacingNum, setSpacing] = useState(10);
  console.log(Array.isArray(postTexts, setPosts));
  const getPosts = async () => {
    try {
      let res = await getPlaceholder();

      //   console.log(res);

      setPosts((postTexts = res.data));

      console.log("api回傳:", postTexts);
    } catch (e) {
      console.log(e);
    }
  };

  const showData = () => {
    let data = document.querySelector(".main-Posts");
    console.log(data);


    console.log("data狀態", data);
    

    data.style = "display:block";
  };

  useEffect(() => {
    getPosts();
  }, []);

  const nextPage = () => {
    setPages(pageNum + 1);
    console.log("start", setStart(startValue + spacingNum)); // start 值
    console.log("range", setRange(rangeValue + spacingNum)); // range 值

    console.log("00000", postTexts);
    let nextPage = document.querySelector(".nextPage");
    // let showButton = document.querySelector(".showButton");
    console.log(nextPage);

    console.log("起始：", startValue, "終值：", rangeValue);

    // setPosts(postTexts.slice(startValue, rangeValue));
    if (pageNum === 10) {
      setPages((pageNum = 10));
      setStart((startValue = 90));
      setRange((rangeValue = 100));
      console.log("沒有第0頁");
      nextPage.style = "display:none";
    }
  };

  const returnPage = () => {
    setPages(pageNum - 1);
    console.log("start", setStart(startValue - spacingNum)); // start 值
    console.log("range", setRange(rangeValue - spacingNum)); // range 值
    let returnPage = document.querySelector(".returnPage");

    console.log("00000", postTexts);

    console.log("起始：", startValue, "終值：", rangeValue);

    if (pageNum === 1) {
      setPages((pageNum = 1));
      setStart((startValue = 0));
      setRange((rangeValue = 10));
      console.log("沒有第0頁");
      returnPage.style = "display:none";
    }
  };

  return (
    <div>
      <div className="Post-container">
        <h2>PostViewer</h2>
        <button className="showButton" onClick={showData}>
          檢視資料筆數
        </button>
        <h2>目前頁數{pageNum}/10</h2>
        <div className="page-conrol">
          <button className="nextPage" onClick={nextPage}>
            下一頁
          </button>
          <button className="returnPage" onClick={returnPage}>
            上一頁
          </button>
        </div>

        <div className="main-Posts">
          {postTexts.slice(startValue, rangeValue).map((item) => {
            return (
              <div className="postItem" key={item.id}>
                <div className="title">
                  <p>{item.id}.</p>
                  <p>{item.title}</p>
                </div>
                <div className="text">
                  <p>{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
