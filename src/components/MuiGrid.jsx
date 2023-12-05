import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
// import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material'
// import { Button, TextField } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
}))

export default function MuiGrid() {
    const [showButton, setShowButton] = useState(false)
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6} lg={4} justifyContent='center'>
                    <Paper
                        style={{
                            padding: 16,
                            margin: 8,
                            backgroundColor: '#f44336',
                        }}
                    >
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid xs={4}>
                                <Paper
                                    style={{
                                        padding: 16,
                                        margin: 8,
                                        backgroundColor: '#ff5722',
                                    }}
                                >
                                    {/* Content for inner box 1 */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper
                                    style={{
                                        padding: 16,
                                        margin: 8,
                                        backgroundColor: '#673ab7',
                                    }}
                                >
                                    {/* Content for inner box 2 */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper
                                    style={{
                                        padding: 16,
                                        margin: 8,
                                        backgroundColor: '#03a9f4',
                                    }}
                                >
                                    {/* Content for inner box 3 */}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6} lg={4}>
                    <Paper
                        style={{
                            padding: 16,
                            margin: 8,
                            backgroundColor: '#3f51b5',
                        }}
                    >
                        <Grid container spacing={2} justifyContent='start'>
                            <Grid item xs={8} md={4}>
                                <Paper
                                    style={{
                                        padding: 16,
                                        margin: 8,
                                        backgroundColor: '#e91e63',
                                    }}
                                >
                                    {/* Content for inner box 1 */}
                                </Paper>
                            </Grid>
                            <Grid item xs={8} md={4}>
                                <Paper
                                    style={{
                                        padding: 16,
                                        margin: 8,
                                        backgroundColor: '#4caf50',
                                    }}
                                >
                                    {/* Content for inner box 2 */}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={4} display='flex'>
                    <Paper
                        style={{
                            padding: 16,
                            margin: 8,
                            backgroundColor: '#4caf50',
                        }}
                    >
                        {showButton && (
                            <>
                                <Paper
                                    style={{
                                        padding: 16,
                                        margin: 8,
                                        backgroundColor: '#8bc34a',
                                    }}
                                >
                                    {/* Content for inner box 2 */}
                                </Paper>
                                <Paper
                                    style={{
                                        padding: 16,
                                        margin: 8,
                                        backgroundColor: '#8bc34a',
                                    }}
                                >
                                    {/* Content for inner box 2 */}
                                </Paper>
                            </>
                        )}
                        <Box>
                            <p>Show</p>
                            <input
                                type='checkbox'
                                value={showButton}
                                onChange={() => setShowButton(!showButton)}
                            />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
