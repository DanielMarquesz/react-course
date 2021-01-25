import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function TestComponent(){
    return(
        <div>
            <h2>Hello</h2>
            <h3>From test Component</h3>
            <Button variant="contained" color="primary">
                Hello World
            </Button>

            <form  noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>

        </div>
    )
}

export default TestComponent;