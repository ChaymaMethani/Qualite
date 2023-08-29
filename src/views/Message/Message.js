import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'; import { cilPlaylistAdd,cilSend,cilTrash, cilX } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
import './Message.css';
import {CNavLink} from '@coreui/react'
import { NavLink } from 'react-router-dom'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
export default function Message() {
  const [open_del, setOpen_del] = React.useState(false);
  const handleOpen_del = () => setOpen_del(true);
  const handleClose_del = () => setOpen_del(false);

  return (
    <div >

      <Modal
        open={open_del}
        onClose={handleClose_del}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CIcon icon={cilX} size='lg' style={{ color: '#000',position:'absolute',top:'0',right:'0' }} onClick={handleClose_del} /> 
          <h1 class="italic-bold" >Supprimer</h1>
          <p class="italic-bold-td" >Vous êtes sur de supprimer le message</p>
          <button className='boutton'style={{ color: 'red'}} type="button" >Oui</button>
           <button  className='boutton' style={{ color: 'green'}} type="button" >Non</button>
          

        </Box>
      </Modal>

      <div className='body'>
      <div className="mt-5 ">
        <CNavLink to="/Repondre#/Repondre" component={NavLink}>
          <button className="btn btn-primary" style={{ margin: '20px' }} type="button" >
            <CIcon icon={cilSend} size='lg' style={{ color: '#fff' }} />Répondre
            </button>
            </CNavLink>
            </div>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Messages</th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody >
          <tr >
            <th scope="row" >1</th>
            <td class="italic-bold-td">Bonjour client Intell'eau</td>
            
            <td><CIcon icon={cilTrash} size='lg' style={{ color: 'red' }} onClick={handleOpen_del}  /></td>

          </tr>
          <tr>
            <th scope="row">2</th>
            <td class="italic-bold-td">Comment je peux vous aider</td>
            
            <td><CIcon icon={cilTrash} size='lg' style={{ color: 'red' }} onClick={handleOpen_del} /></td>

          </tr>
          <tr>
            <th scope="row">3</th>
            <td class="italic-bold-td">Merci et bonne journée</td>
           
            <td><CIcon icon={cilTrash} size='lg' style={{ color: 'red' }} onClick={handleOpen_del} /></td>

          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}