import React,{useState,useEffect} from 'react';

export function HomePage() {
    const[num,setNum] = useState(5);
    return (
        <div className="home-page-container main-container">
            HOME-PAGE! {num}
        </div>
    )
}
