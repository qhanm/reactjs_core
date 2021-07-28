import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import FacebookAppForm from "../../components/Form/SettingForm/FacebookAppForm";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function SettingPage() {

    const classes = useStyles();
    const [tab, setTab] = React.useState('1');

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    const renderContentTab = () => {
        switch (tab)
        {
            case "1":
                return <h1>Tab one</h1>
            case "2":
                return <FacebookAppForm />
            case "3":
                return <h1>Tab three</h1>
            default: break;
        }
    }

    return (
        <>
            {/*<SettingForm />*/}
            <div className={classes.root}>
                <TabContext value={tab}>
                    <AppBar position="static">
                        <TabList onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="General" value="1" />
                            <Tab label="Facebook App" value="2" />
                            <Tab label="Facebook Video" value="3" />
                        </TabList>
                    </AppBar>
                    <TabPanel value={ tab }>{ renderContentTab() }</TabPanel>
                </TabContext>
            </div>
        </>
    )
}

export default SettingPage;