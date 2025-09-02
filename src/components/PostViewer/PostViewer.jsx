import { useState, useEffect } from "react";

import { getPlaceholder } from "../../api/method";
import "./Style.scss";
export default function PostViewer() {
  const [allPosts, setPosts] = useState([]);

  const [Page, setPage] = useState(1);

  const itemsGroup = 10;

  async function getPosts() {
    try {
      const res = await getPlaceholder();
      // console.log(res.data);

      setPosts(res.data);

      console.log(allPosts);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  function showlist() {
    return allPosts.slice((Page - 1) * itemsGroup, Page * itemsGroup);
  }

  function nextPage() {
    setPage((value) => value + 1);

    console.log(Page);
  }
  function returnPage() {
    setPage((value) => value - 1);

    console.log(Page);
  }

  const computedData = showlist();

  const isReturn = Page > 1;

  const isNext = Page < Math.ceil(allPosts.length / itemsGroup);

  return (
    <div>
      <h2>文章輪播器</h2>

      {/* <button onClick={getPosts}>-----</button> */}
      {isNext && <button onClick={nextPage}>下一頁</button>}
      {isReturn && <button onClick={returnPage}>上一頁</button>}
      {Page}

      {computedData.map((item) => {
        return (
          <div>
            <div className="Posts">
              <p>{item.id}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
