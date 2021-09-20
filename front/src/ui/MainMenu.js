import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2), 
    },
    menuLink: {
      color:theme.palette.text.primary,
      textDecoration: 'none'//sem sublinhado
    }
}));

export default function MainMenu() {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" 
      aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick=
      {handleClick}>
        <MenuIcon />
      </IconButton>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to= "/Home" className={classes.menuLink}>Home</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to= "/Orcamento" className={classes.menuLink}>Orçamento</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to= "/Cadastro" className={classes.menuLink}>Cadastro</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to= "/Caixa" className={classes.menuLink}>Caixa</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to= "/Pedidos" className={classes.menuLink}>Pedidos</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to= "/Ficha Técnica" className={classes.menuLink}>Ficha Técnica</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to= "/Produtos" className={classes.menuLink}>Produtos</Link>
        </MenuItem>

      
{/*
        <MenuItem onClick={handleClose}>
          <Link to= "/new" className={classes.menuLink}> Cadastrar novo karango </Link>
        </MenuItem>
*/}
        
      </Menu>
    </div>
  );
}