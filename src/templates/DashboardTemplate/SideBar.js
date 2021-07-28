
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import {NavLink} from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import {URL_DASHBOARD, URL_SETTING, URL_USER} from "../../util/constants/UrlConstnat";
import {Color} from "./Theme";
export function SideBar() {
    return (
        <div>
            <ListItem button>
                <NavLink to={URL_DASHBOARD} activeClassName='nav-link-active' className={`nav-link-side-bar`} style={Color.grey700}>
                    <ListItemIcon>

                            <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </NavLink>
            </ListItem>
            <ListItem button>
                <NavLink to={URL_USER} activeClassName='nav-link-active'className="nav-link-side-bar" style={Color.grey700}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
                </NavLink>
            </ListItem>
            <ListItem button>
                <NavLink to={URL_SETTING} activeClassName='nav-link-active' className="nav-link-side-bar" style={Color.grey700}>
                    <ListItemIcon>
                            <SettingsIcon />
                    </ListItemIcon>
                <ListItemText primary="Settings" />
                </NavLink>

            </ListItem>
        </div>
    )
}
