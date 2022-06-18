import {ExternalLinkIcon} from "@heroicons/react/solid";
import React from "react";

type ExternalLinkProps = {
    href: string,
    children?: React.ReactNode,
    className?: string,
    icon?: boolean
}

const ExternalLink: React.FC<ExternalLinkProps> = props => {
    const link = <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-medium text-gray-900 hover:cursor-pointer hover:underline">
        {props.children}
    </a>
    return props.icon ?
        (
            <div className={"flex flex-row items-center " + (props.className ? props.className : "")}>
                {
                    props.icon ? <div className="text-indigo-500">
                        <ExternalLinkIcon className="h-6 w-6" aria-hidden="true"/>
                    </div> : null
                }
                {link}
            </div>
        ) : link
}


export default ExternalLink
