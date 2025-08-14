import { useState } from "react";

export default function PostViewer() {
  let [num, setNum] = useState(9);

  return (
    <div>
        <p>{num}</p>
    </div>
  )
}
