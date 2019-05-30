import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton'

import OpenInBrowser from '@material-ui/icons/OpenInBrowser'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

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
        paddingTop: theme.spacing(2)
    },
    title: {
        color: theme.palette.primary.contrastText,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  modalPaper: {
      margin: 'auto'
  },
  modal: {
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
  },
  modalImage : {
     width: '100%',
      height: 'auto',
      /* Magic! */
      maxWidth: '50vw',
  }
}));

function SingleLineGridList({tileData}) {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState(false);

    function handleModalOpen(image) {
      setImage(image)
      setOpen(true);
      console.log(image)
    }

    function handleModalClose() {
      setOpen(false);
    }

    return (
        <div className={classes.root}>
          <Modal open={open} onClose={handleModalClose} className={classes.modal}>
            <Paper className={classes.modalPaper}>
              <div>
                <img src={image} alt='Modal image' className={classes.modalImage}/>
                <Button onClick={handleModalClose}>Close</Button>
              </div>
            </Paper>
          </Modal>
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
                            <IconButton onClick={() => handleModalOpen(tile.img)}>
                              <OpenInBrowser
                                className={classes.title}
                              />
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
