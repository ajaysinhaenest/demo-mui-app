import {
    Button,
    Stack,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import React, { useState } from 'react'

const MuiButton = () => {
    const [format, setFormat] = useState(null)
    console.log(format)
    const handelFormate = (e, updatedFormats) => {
        console.log(updatedFormats)
        setFormat(updatedFormats)
    }

    return (
        <div>
            <Stack spacing={4} m={2}>
                {/* <Stack spacing={2} direction='row'>
                    <Button variant='text'>text</Button>
                    <Button variant='contained'>contained</Button>
                    <Button variant='outlined '>outlined</Button>
                </Stack>

                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary'>
                        Primary
                    </Button>
                    <Button variant='contained' color='secondary'>
                        Secondary
                    </Button>
                    <Button variant='contained' color='warning'>
                        Warning
                    </Button>
                    <Button variant='contained' color='info'>
                        Info
                    </Button>
                    <Button variant='contained' color='error'>
                        Error
                    </Button>
                    <Button variant='contained' color='success'>
                        Success
                    </Button>
                </Stack>

                <Stack spacing={2} direction='row'>
                    <Button variant='contained' startIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>

                <Stack direction='row'>
                    <ButtonGroup variant='outlined'>
                        <Button>left</Button>
                        <Button>center</Button>
                        <Button>right</Button>
                    </ButtonGroup>
                </Stack> */}
                <Stack direction='row'>
                    <ToggleButtonGroup
                        variant='outlined'
                        value={format}
                        onChange={handelFormate}
                        size='small'
                        color='success'
                        orientation='vertical'
                        exclusive
                    >
                        <ToggleButton value='bold' aria-label='bold'>
                            <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value='italic' aria-label='italic'>
                            <FormatItalicIcon />
                        </ToggleButton>
                        <ToggleButton
                            value='underlined'
                            aria-label='underlined'
                        >
                            <FormatUnderlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </div>
    )
}

export default MuiButton
