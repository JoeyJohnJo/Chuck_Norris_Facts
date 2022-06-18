import React from "react";

const Column: React.FC<{ children?: React.ReactNode, className?: string }> = props => (
    <div className={"flex flex-col " + (props.className ? props.className : "")}>
        {props.children}
    </div>
)

export default Column
