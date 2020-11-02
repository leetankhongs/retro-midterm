import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    Box,
    Button
} from '@material-ui/core';


const ChangePassword = () => {
    const [values, setValues] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form
            autoComplete="off"
            noValidate

        >
            <Card>
                <CardHeader
                    title="Change Password"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Should contain at least 8 chars, 1 number, 1 uppercase, 1 lowercase."
                                label="Old Password"
                                name="oldPassword"
                                onChange={handleChange}
                                required
                                value={values.oldPassword}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                        ></Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Should contain at least 8 chars, 1 number, 1 uppercase, 1 lowercase."
                                label="New Password"
                                name="newPassword"
                                onChange={handleChange}
                                required
                                value={values.newPassword}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                        ></Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Should contain at least 8 chars, 1 number, 1 uppercase, 1 lowercase."
                                label="Confirm Password"
                                name="confirmPassword"
                                onChange={handleChange}
                                required
                                value={values.confirmPassword}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                        ></Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    p={2}
                >
                    <Button
                        color="primary"
                        variant="contained"
                    >
                        Save Password
                </Button>
                </Box>
            </Card>
        </form>
    );
};


export default ChangePassword;
