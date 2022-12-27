import {Avatar, Box, Card, CardContent, Grid, Typography} from '@material-ui/core';
import {green} from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const ThietBiDaSua = (props) => (
    <Card {...props}>
        <CardContent>
            <Grid
                container
                spacing={3}
                style={{justifyContent: 'space-between'}}
            >
                <Grid item>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="h6"
                    >
                        ĐÃ SỬA TRONG THÁNG
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h3"
                    >
                        120
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        style={{
                            backgroundColor: green[600],
                            height: 56,
                            width: 56
                        }}
                    >
                        <CheckRoundedIcon/>
                    </Avatar>
                </Grid>
            </Grid>
            <Box
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    pt: 2
                }}
            >
                <ArrowUpwardIcon style={{color: green[900]}}/>
                <Typography
                    variant="body2"
                    style={{
                        color: green[900],
                        mr: 1
                    }}
                >
                    16%
                </Typography>
                &nbsp;
                <Typography
                    color="textSecondary"
                    variant="caption"
                >
                    So với tháng trước
                </Typography>
            </Box>
        </CardContent>
    </Card>
);

export default ThietBiDaSua;
