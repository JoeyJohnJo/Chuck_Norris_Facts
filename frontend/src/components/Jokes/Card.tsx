import React from "react";
import Column from "../Column/Column";

const Card: React.FC<{ title: string, content: string, footer: string, className?: string }> = props => {
    const columnClassName = "bg-white rounded-lg p-4 justify-between leading-normal"
    return (
        <Column className={(props.className ? columnClassName + " " : "") + columnClassName}>
            <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">{props.content}.</p>
            </div>
            <div className="flex items-center">
                <div className="text-sm">
                    <p className="text-gray-600">{props.footer}</p>
                </div>
            </div>
        </Column>
    )
}


export default Card;
