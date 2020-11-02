import { useEffect, useState } from 'react';
import { Grid, } from '@material-ui/core';

import ColumnItem from './../columnItem/index'
import APICaller from './../../../until/callAPI'

const ColumnList = (props) => {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        APICaller('columns', 'GET', null).then(res => {
            setColumns(res.data);
        })

    }, []);

    return (
        <Grid container spacing = {2}>
            {columns.map(column => <ColumnItem infor={column} key = {column._id} boardID = {props.boardID} columnType = {column.value}/>)}
        </Grid>
    );
}

export default ColumnList;
