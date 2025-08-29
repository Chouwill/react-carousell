import { useState, useEffect } from "react";
export default function PostViewer() {
  const [allPosts, setPosts] = useState([]);

  const [page, setPages] = useState(1);
  const itemsGroup = 10;

  const getPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      console.log(res);

      const data = await res.json();

      console.log(data);

      setPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  function showPosts() {
    const startIndex = (page - 1) * itemsGroup;

    console.log("起始值", startIndex);

    const endIndex = startIndex + itemsGroup;

    console.log(endIndex);

    // return setPosts(allPosts.slice(startIndex, endIndex));
  }

  function nextPage() {
    setPages((value) => value + 1);
    showPosts();
  }
  function returnPage() {
    setPages((value) => value - 1);
    showPosts();
  }

  useEffect(() => {
    getPosts();
  }, []);

  //   const isShowNext = (page + 1) * itemsGroup <= allPosts.length;
  const isShowNext = Math.ceil(allPosts.length / itemsGroup) > page;
  const isShowReturn = page > 1;

  return (
    <div>
      <button onClick={showPosts}>輪播</button>
      {isShowNext && <button onClick={nextPage}>下一頁</button>}
      {isShowReturn && <button onClick={returnPage}>上一頁</button>}
      <h2>文章輪播器</h2>

      {allPosts
        .slice((page - 1) * itemsGroup, page * itemsGroup)
        .map((item) => {
          return (
            <div>
              <p>{item.id}</p>
              <p>{item.title}</p>
            </div>
          );
        })}
    </div>
  );
}
