import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton'

import OpenInBrowser from '@material-ui/icons/OpenInBrowser'
import GridListTileBar from '@material-ui/core/GridListTileBar'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.contrastText,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

function SingleLineGridList({tileData}) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} className={classes.tile}>
                        <img src={tile.img} alt={tile.title} />

                        <GridListTileBar
                          title={tile.title}
                          classes={{
                            root: classes.titleBar,
                            title: classes.title,
                          }}
                          actionIcon={
                            <IconButton>
                              <OpenInBrowser className={classes.title} />
                            </IconButton>
                          }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default SingleLineGridList;
