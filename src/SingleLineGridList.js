import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {GridList} from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import Modal from '@material-ui/core/Modal'

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
        paddingTop: theme.spacing(2),
    },
    title: {
        color: theme.palette.primary.contrastText,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    img: {
        cursor: 'pointer',
        padding: theme.spacing(2)
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
        maxWidth: '90vw',
        maxHeight: '90vh',
      }
}));

function SingleLineGridList({tileData}) {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState(false);

    function handleModalOpen(image) {
      setImage(image)
      setOpen(true);
    }

    function handleModalClose() {
      setOpen(false);
    }

    return (
        <div className={classes.root}>
          <Modal open={open} onClose={handleModalClose} className={classes.modal}>
                <img src={image} alt='Modal' className={classes.modalImage}/>
          </Modal>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} className={classes.tile}>
                        <img src={tile.img} alt={tile.title} className={classes.img}
                             onClick={() => handleModalOpen(tile.img)} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default SingleLineGridList;
