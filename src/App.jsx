// import "./App.css";
// import Carousell from "./components/Carousell/Carousell";
import Counts from "./components/Count/Count";
// import Post from "./components/PostViewer/Post";


import PostViewer from "./components/PostViewer/PostViewer";

function App() {
  return (
    <div>
      {/* <Carousell /> */}
      <Counts />

      {/* <Post /> */}

       <PostViewer /> 
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [allPosts, setAllPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const postsPerPage = 10;

//   const fetchPosts = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch posts');
//       }
//       const data = await response.json();
//       setAllPosts(data);
//       setCurrentPage(0); // 重置到第一頁
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getCurrentPosts = () => {
//     const startIndex = currentPage * postsPerPage;
//     const endIndex = startIndex + postsPerPage;
//     return allPosts.slice(startIndex, endIndex);
//   };

//   const goToNextPage = () => {
//     if ((currentPage + 1) * postsPerPage < allPosts.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const goToPrevPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const hasNextPage = (currentPage + 1) * postsPerPage < allPosts.length;
//   const hasPrevPage = currentPage > 0;
//   const currentPosts = getCurrentPosts();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Posts Fetcher</h1>
//         <button 
//           onClick={fetchPosts} 
//           disabled={loading}
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             backgroundColor: '#61dafb',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: loading ? 'not-allowed' : 'pointer',
//             marginBottom: '20px'
//           }}
//         >
//           {loading ? '載入中...' : '抓取 Posts 資料'}
//         </button>
        
//         {error && (
//           <div style={{ color: 'red', marginBottom: '20px' }}>
//             錯誤: {error}
//           </div>
//         )}
        
//         {allPosts.length > 0 && (
//           <div style={{ marginBottom: '20px' }}>
//             <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
//               {hasPrevPage && (
//                 <button 
//                   onClick={goToPrevPage}
//                   style={{
//                     padding: '8px 16px',
//                     fontSize: '14px',
//                     backgroundColor: '#4CAF50',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '5px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   上一頁
//                 </button>
//               )}
//               <span style={{ color: '#333', fontSize: '16px' }}>
//                 第 {currentPage + 1} 頁 / 共 {Math.ceil(allPosts.length / postsPerPage)} 頁
//               </span>
//               {hasNextPage && (
//                 <button 
//                   onClick={goToNextPage}
//                   style={{
//                     padding: '8px 16px',
//                     fontSize: '14px',
//                     backgroundColor: '#4CAF50',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '5px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   下一頁
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
        
//         <div style={{ maxWidth: '800px', textAlign: 'left' }}>
//           {currentPosts.map(post => (
//             <div 
//               key={post.id} 
//               style={{
//                 border: '1px solid #ccc',
//                 borderRadius: '5px',
//                 padding: '15px',
//                 marginBottom: '15px',
//                 backgroundColor: '#f9f9f9'
//               }}
//             >
//               <h3 style={{ color: '#333', marginTop: '0' }}>
//                 {post.id}. {post.title}
//               </h3>
//               <p style={{ color: '#666', lineHeight: '1.5' }}>
//                 {post.body}
//               </p>
//               <small style={{ color: '#999' }}>
//                 User ID: {post.userId}
//               </small>
//             </div>
//           ))}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
