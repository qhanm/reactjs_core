import React, {Component} from 'react';
import SideBar from "./SideBar";
import Menu from "./Menu";
import { Route } from 'react-router-dom';
import TaskDetail from "./Modal/TaskDetail";
import SearchIssues from "./Modal/SearchIssues";

function DashboardTemplate({ Component, ...restProps }) {
    return (
        <Route {...restProps} render={(propRoute) => {
            return (
                <>
                    <div>
                        <div className="jira">
                            <SideBar />
                            <Menu />
                            <div className="main">
                                <Component {...propRoute} />
                            </div>
                        </div>
                        <SearchIssues />
                        <TaskDetail />
                    </div>
                </>
            )
        }}/>

    )
}

export default DashboardTemplate;