import { Autocomplete, Box, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const skills = ['HTML', 'CSS', 'javascript', 'typescript']

const skillsOptions = skills.map((skill, i) => ({ id: i + 1, label: skill }))
console.log(skillsOptions)

const MuiAutocomplete = () => {
    const [value, setValue] = useState(null)
    const [skill, setSkill] = useState(null)
    console.log(value)
    console.log({ skill })
    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                options={skills}
                renderInput={(params) => (
                    <TextField {...params} lable='skills' />
                )}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                freeSolo
            />
            <Autocomplete
                options={skillsOptions}
                renderInput={(params) => (
                    <TextField {...params} lable='skills' />
                )}
                value={skill}
                onChange={(event, newValue) => setSkill(newValue)}
                freeSolo
            />
        </Stack>
    )
}

export default MuiAutocomplete
