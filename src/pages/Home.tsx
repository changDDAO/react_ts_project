import React from 'react';
import {Link} from "react-router-dom";
function Home(){
    return (
        <div>
            <h1>Home</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <Link to="/about">About</Link>
            <ul>
                <li>
                    <Link to="/profiles/changho">changho</Link>
                </li>
                <li>
                    <Link to="/profiles/abcd">abcd</Link>
                </li>
                <li>
                    <Link to="/profiles/jongho">존재 X 프로필</Link>
                </li>
                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
            </ul>
        </div>
    );
}
export default Home;