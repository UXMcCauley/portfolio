import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Layout from "../components/Layout";
import JobHistory from "../components/JobHistory";

export default function Home() {
    return (
        <div className={""}>
            <Head>
                <title>Andrew J. McCauley</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <div className={"max-w-screen-lg mt-10 mx-auto p-8"}>
                    <h2 className={"mb-6"}>PROFILE</h2>
                    Universal skill set including certification-backed UX/UI design and UX management. Full-stack
                    developer, highly-skilled with React, React Native, Next.js, Angular, Vue.js. Master-level skills
                    with prototyping tools such as Framer, Adobe XD, Figma, and more. Human-centered design focus on
                    interface interactivity and high-fidelity prototyping.
                    <hr className={"my-8"}/>
                    <h2 >EXPERIENCE</h2>
                    <JobHistory from={"2022"} to={"Current"} role={"Software Engineer"}
                                company={"Forward Service Corporation"}>
                        Designed and Developed the Transition to Success application to help unite people in need of
                        state services with the best service providers based on needs and location. Designed and
                        developed the
                        call center training application for internal use in the career development department.
                    </JobHistory>

                    <JobHistory from={"2017"} to={"2021"} role={"Lead Service Designer, UX Designer"}
                                company={"Marshfield Clinic Health System"}>
                        Responsible for researching, designing, and prototyping end-to-end services
                        and touchpoint for both patients and internal staff. Some of the projects worked on include the
                        customer-facing website, the mobile app, and the intranet. Also designed improvements for
                        pharmacy services and streamlining operations for COVID-19.
                    </JobHistory>

                    <JobHistory from={"2014"} to={"2017"} role={"Software Engineer"}
                                company={"Foot Locker, Inc."}>
                        Participating in the iteration of design and development of all the Foot Locker
                        electronic properties such as footlocker.com, ladyfootlocker.com, kidsfootlocker.com,
                        six0two.com,
                        and Eastbay.com.
                    </JobHistory>

                    <JobHistory from={"2011"} to={"2013"} role={"Lead Web Developer"}
                                company={"Naish International"}>
                        Naish is one of the world&apos;s leading stand up paddleboard designers and
                        distributors. The product websites serve as a tool for professional and novice surfers alike to
                        find
                        their ideal equipment. Each product page included 3D interactive drawings and
                        specifications.
                    </JobHistory>

                    <hr className={"my-8"}/>
                    <h2 className={"mb-6"}>EDUCATION</h2>
                    <p><strong>Purdue University Global</strong> — Industrial Organizational Psychology, In-progress Jan
                        2018 - May
                        2023</p>
                    <p><strong>Waukesha County Technical College</strong> — Marketing, Incomplete Aug 2005 - Jan 2008
                    </p>
                    <hr className={"my-8"}/>
                    <h2 className={"mb-6"}>SKILLS / CERTIFICATIONS</h2>
                    <ul>
                        <li>Figma</li>
                        <li>Adobe XD</li>
                        <li>Framer Prototyping</li>
                        <li>Nielsen Norman Group certified UX manager and designer</li>
                        <li>Umbraco certified developer</li>
                        <li>React developer</li>
                        <li>Next.js developer</li>
                        <li>Collaborative workshops</li>
                        <li>User design research</li>
                        <li>User design testing</li>
                        <li>Low and high fidelity prototyping</li>
                        <li>Rapid prototyping</li>
                    </ul>







                </div>
            </Layout>

        </div>
    )
}
