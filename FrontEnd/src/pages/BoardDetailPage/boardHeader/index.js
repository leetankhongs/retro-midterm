import { useState } from 'react';
import { Grid, Typography, IconButton, TextField, Button } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';

const BoardHeader = (props) => {
    const [isEdit, setIsEdit] = useState(false);

    const handleOpenEditBoardName = () => {
        setIsEdit(!isEdit)
    }

    return (
        <Grid container direction="row" justify="space-between" alignItems="center" style={{ backgroundColor: "white" }}>
            <Grid item style={{ margin: "8px 16px" }}>
                <Grid container>
                    {isEdit ?
                        <>
                            <Grid item>
                                <TextField
                                    id="outlined-textarea"
                                    label="Board Name"
                                    placeholder="Board Name"
                                    variant="outlined"
                                    size="small"
                                    style={{ margin: "-4px 0px" }}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" size="small" style={{ margin: "0px 20px" }}>
                                    Save
                            </Button>
                            </Grid>
                            <Grid item>
                                <Button size="small" onClick={handleOpenEditBoardName}>Cancel</Button>
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item>
                                <Typography variant="h6">Tên của board</Typography>
                            </Grid>
                            <Grid item>
                                <IconButton component="span" size="small" style={{ margin: "0px 8px" }} onClick={handleOpenEditBoardName}>
                                    <EditIcon />
                                </IconButton>
                            </Grid>
                        </>
                    }
                </Grid>


            </Grid>
            <Grid item>
                <IconButton component="span" size="small"  >
                    <SettingsIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default BoardHeader;
