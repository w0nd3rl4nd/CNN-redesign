import React, { Suspense } from "react";

const NewsCard = React.lazy(() => import("./NewsCard.jsx"));


export default function LazyNewsCard(props) {
  return (
    <Suspense fallback={<div style={{textAlign:"center"}}>Loading...</div>}>
      <NewsCard {...props}/>
    </Suspense>
  );
}
