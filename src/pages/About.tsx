import React from 'react'
import {useLocation, useSearchParams} from "react-router-dom";

function About(){
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get("detail");
    const page = parseInt(searchParams.get("page") || "0");

    function onToggleDetail() {
        setSearchParams((prev) => ({
            ...prev,
            detail: detail === "true" ? "false" : "true",
            page,
        }));
    }

    function onIncreasePage() {
        setSearchParams((prev) => ({
            ...prev,
            detail,
            page: page + 1
        }));
    }
return (
   <div>
       <h1>소개</h1>
       <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
       <p>detail: {detail}</p>
       <p>page: {page}</p>
       <button onClick={onToggleDetail}>Toggle detail</button>
       <button onClick={onIncreasePage}>page + 1</button>
   </div>
);
}
export default About;