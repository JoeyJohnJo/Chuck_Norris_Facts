import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel
} from "@material-tailwind/react";
import React from "react";
import CategoryContent from "./CategoryContent";

const FactTabs: React.FC<{ tabs: string[] }> = props =>
    <Tabs value={props.tabs[0]}
    className="w-full p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible">
    <TabsHeader className="flex relative bg-blue-grey-50 bg-opacity-60 rounded-lg p-1" indicatorProps={{style: {display: "none"},}}>
        {
            props.tabs.map((value, index) => (
                <Tab key={index} value={value}
                     className="p-1 hover:text-indigo-500 h-full sm:text-sm rounded-full cursor-pointer">{value.toUpperCase()}</Tab>
            ))
        }
    </TabsHeader>
    <hr className="border border-t-blue-grey-50"/>
    <TabsBody>
        {
            props.tabs.map((value, index) => (
                <TabPanel key={index} value={value} className="px-5 py-10">
                    <CategoryContent category={value}/>
                </TabPanel>
            ))
        }
    </TabsBody>
</Tabs>

export default FactTabs
