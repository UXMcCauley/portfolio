import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";

function Work(props) {
    return (
        <Layout>
            <div className={`grid grid-cols-2`}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <Image src={`/mchs_home_square.png`} alt={`Alt text here...`} width={500} height={500}/>
                <Image src={`/mchs_home_square.png`} alt={`Alt text here...`} width={500} height={500}/>
                <Image src={`/mchs_home_square.png`} alt={`Alt text here...`} width={500} height={500}/>
                <Image src={`/mchs_home_square.png`} alt={`Alt text here...`} width={500} height={500}/>
            </div>
        </Layout>
    );
}

export default Work;
