import React from 'react'
import Leet from '../images/coding-min.png';
import Github from '../images/github-min.png';
import Linked from '../images/linkedin-min.png';
import Stack from '../images/stack-overflow-min.png';

function Links(){
    
    return (
        <div className="w-full flex justify-around h-20 mb-2 p-2 ">

            <div className="border-2 from-[#243c5a]  from-[#243c5a]  flex items-center h-full w-16 rounded-md" style={{border: "1px solid #74634F"}}>
                <a href="https://github.com/" target="_blank" alt="github">
                    <img className="w-9/12 ml-auto mr-auto algin-center" src={Github} alt='logo'/>
                </a>
            </div>

            <div className="border-2 from-[#243c5a]  from-[#243c5a]  flex items-center h-full w-16 rounded-md" style={{border: "1px solid #74634F"}}>
                <a href="https://www.linkedin.com/" target="_blank" alt="linkedin">
                    <img className="w-9/12  ml-auto mr-auto algin-center" src={Linked} alt='logo'/>
                </a>
            </div>

            <div className="border-2 from-[#243c5a]  from-[#243c5a]  flex items-center h-full w-16 rounded-md" style={{border: "1px solid #74634F"}}>
                <a href="https://stackoverflow.com/" target="_blank" alt="stackoverflow">
                    <img className="w-9/12  ml-auto mr-auto algin-center" src={Stack} alt='logo'/>
                </a>
            </div>

            <div className="border-2 from-[#243c5a]  from-[#243c5a] flex items-center h-full w-16 rounded-md" style={{border: "1px solid #74634F"}}>
                <a href="https://leetcode.com/" target="_blank" alt="leetcode">
                    <img className="w-9/12  ml-auto mr-auto algin-center" src={Leet} alt='logo'/>
                </a>
            </div>

        </div>
    )
};

export default Links
