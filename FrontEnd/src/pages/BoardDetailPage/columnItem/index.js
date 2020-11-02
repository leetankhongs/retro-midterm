import { useEffect, useState } from 'react';
import { Button, Box, Grid, Paper, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';


import TaskItem from './../taskItem/index'
import APICaller from './../../../until/callAPI'
import InputTask from './../inputTask/index'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            width: theme.spacing(2),
            height: theme.spacing(2),
        },
    },
}));

const ColumnItem = (props) => {
    const classes = useStyles();

    const [tasks, setTasks] = useState([]);
    const [indexAddColumn, setIndex] = useState(-1);
    const [reset, setReset] = useState(false);
    useEffect(() => {
        APICaller('columns/' + props.infor.value + "/" + props.boardID, 'GET', null).then(res => {
            setTasks(res.data);
        });
    }, [reset, props]);

    const handleClickAdd = (value) => {
        if (value === indexAddColumn) {
            setIndex(-1);
        } else {
            setIndex(value);
        }
    }

    const handleCloseInputTask = () => {
        setIndex(-1);
    }

    const handleResetData = () => {
        setReset(!reset);
    }

    return (
        <Grid item md={4} xs={12} >
            <Grid container alignItems="center">
                <Grid item>
                    <Box className={classes.root}>
                        <Paper variant="outlined" square style={{ background: props.infor.color }} />
                    </Box>
                </Grid>
                <Grid item>
                    <Typography align="center" variant="h6" style = {{margin: "0px 8px"}} >{props.infor.label}</Typography >
                </Grid>
            </Grid>


            <Button variant="contained" fullWidth={true} onClick={() => handleClickAdd(props.columnType)}><AddIcon /></Button>

            {indexAddColumn === props.infor.value ?
                <Box mt={2} mb={2} >
                    <InputTask color={props.infor.color} value={props.infor.value} onCloseInputTask={handleCloseInputTask} onResetData={handleResetData} board={props.boardID} />
                </Box> : ""}

            {tasks.map((task, dex) => {
                return (
                    <Box mt={2} mb={2} key={dex}>
                        <TaskItem taskInfor={task} background={props.infor.color} onResetData={handleResetData} />
                    </Box>
                )
            })}
        </Grid>
    );
}

export default ColumnItem;
