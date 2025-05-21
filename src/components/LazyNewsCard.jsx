import React, { suspense } from "react";

const NewsCard = React.lazy(() => import("./NewsCard.jsx"));


export default function LazyNewsCard(props) {
  return (
    <suspense fallback={<div style={{textAlign:"center"}}>Loading...</div>}>
      <NewsCard {...props}/>
    </suspense>
  );
}
