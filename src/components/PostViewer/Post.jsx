import { useState, useEffect } from "react";
// import "./PostViewer.scss";

export default function Post() {
  let [Posts, setPosts] = useState([]); //  儲存文章列表的變數

  let [startIndex, setStart] = useState(0);

  let [itemsGroup] = useState(3);
  async function fetchPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await res.json();

    setPosts(data);

    console.log(Posts);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    console.log(Posts);
  }, [Posts]);

  return (
    <div>
      <div className="Post-container">
        <h2 className="post-title">Posts Viewer</h2>
        <button className="showButton">檢視資料筆數</button>

        <div className="page-conrol">
          <button className="returnPageBtn">上一頁</button>
          <h2 className="page">第1/10頁</h2>

          <button className="nextPageBtn">下一頁</button>
        </div>

        <div className="main-Posts">
          {Posts.slice(0, 10).map((item) => {
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
