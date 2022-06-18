import React from "react";

type FooterSectionProps = {
    title?: string,
    children: {
        subtitle?: React.ReactNode,
        content?: React.ReactNode,
    }
}

const FooterSection: React.FC<FooterSectionProps> = props => (
    <div className="text:center sm:text-start">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{props.title}</h2>

        {
            props.children.subtitle ?
                <p className="mt-4 max-w-2xl text-xl text-gray-500">
                    {props.children.subtitle}
                </p> : null
        }

        <br/>

        {props.children.content}
    </div>
)

export default FooterSection
