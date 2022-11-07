import React from 'react';

function JobHistory({from, to, company, role, children}) {
    return (
        <div className={"mt-6"}>
            <div className={"font-bold"}>{company}, {from}-{to}</div>
            <div className={"italic"}>{role}</div>
            <div className={""}>
                {children}
            </div>
        </div>
    );
}

export default JobHistory;
