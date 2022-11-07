import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";

function Work(props) {
    return (
        <Layout>
            <div className={"grid grid-cols-3 gap-10 mx-auto mt-10 text-center"}>
                <div className={"shadow flex justify-center"}>
                    <img src={`/mchs_home_square.png`} alt={`Alt text here...`} className={""}/>
                </div>
                <div className={"shadow flex justify-center"}>
                    <img src={`/footlocker_square.png`} alt={`Alt text here...`} className={""}/>
                </div>
                <div className={"shadow flex justify-center"}>
                    <img src={`/reign_square.png`} alt={`Alt text here...`} className={""}/>
                </div>
                <div className={"shadow flex justify-center"}>
                    <img src={`/kids_footlocker_square.png`} alt={`Alt text here...`} className={""}/>
                </div>
                <div className={"shadow flex justify-center"}>
                    <img src={`/naish_square.png`} alt={`Alt text here...`} className={""}/>
                </div>
                <div className={"shadow flex justify-center"}>
                    <img src={`/tts_square.png`} alt={`Alt text here...`} className={""}/>
                </div>


            </div>
        </Layout>
    );
}

export default Work;
