import { CAvatar } from '@coreui/react'
import React from 'react'
import avatar8 from './../../assets/images/avatars/8.jpg'

function Profile() {
    return (
        <div>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <CAvatar src={avatar8} size="lg" style={{width:'100px',margin:'50px'}} />
                            <span className="font-weight-bold">Edogaru</span>
                            <span className="text-black-50">edogaru@mail.com.my</span>
                            </div>
                    </div>
                    <div className="col-md-8 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value="" /></div>
                                <div className="col-md-6"><label className="labels">Email</label><input type="email" className="form-control" value="" placeholder="surname" /></div>
                            </div>
                            <div className="row mt-3">
                                
                                <div className="col-md-12"><label className="labels">Nouveau mot de passe </label><input type="password" className="form-control" placeholder="nouveau mot de passe" value="" /></div>
                                
                                <div className="col-md-12"><label className="labels">Resaisie mot de passe</label><input type="password" className="form-control" placeholder="confirmer mot de passe" value="" /></div>
                                
                            </div>
                            
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
          

    )
}

export default Profile