import React from 'react'
import './Contact.css';
import logoo from  '../../assets/images/logoo.png'
import {  cilEnvelopeClosed, cilPhone,cilLocationPin,cibLinkedin,cibGoogleChrome } from '@coreui/icons';
import CIcon from '@coreui/icons-react'

export default function Contact() {
  
    const Style = {
      backgroundColor: '#ADE8F4',
      width: '105%',
      height: '530px',
      border: '7px solid #023E8A',
      
    };
    const textStyle = {
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: '35px',
      color: '#0096C7',
      justifyContent: 'center',
      display:'flex'
      
    };
    const textStyle3 = {
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: '25px',
      color: '#0096C7',
      justifyContent: 'center',
      display:'flex'
      
    };
    const textStyle1 = {
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: '20px',
      color: '#0096C7',
      marginLeft: '10px',
      
    };
    const textStyle2 = {
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: '19px',
      color: '#03045E',
      
    };
    const styles = {
      
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10px', 
      
    };

    
  return (
    <section className='body'>
      <div className="contact-section" >
        <div className="container" >
          <div className="row justify-content-start">
            <div className="col-md-18">
              <div className="wrapper">
                <div className="row no-gutters" ></div>
                   <div className="col-md-20s d-flex align-items-stretch">
                 
                   <br></br>
                   <br></br>
                      <div style={Style} > 
                      <h3 style={textStyle} >Contactez Nous</h3>
                      <br></br>
                      
                      
                      <div className='divo'>
                      <img src={logoo} alt="logo" className='logo' /> 
                      <br></br>
                      <br></br>
                      <br></br>
                     
                      <p style={textStyle3} > Contactez nous pour plus d'informations</p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-start" style={styles}>
                          
                          <span className="fa fa-map-marker"style={textStyle1} ></span>
                        </div>
                        <div className="text pl-3">
                        
                          <p style={textStyle2}>
                            <span><CIcon icon={cilLocationPin} size="lg" className='custom-icon' />Address:</span> RHCV446, Pôle technologique de Sousse
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-start" style={styles}>
                          <span className="fa fa-phone"style={textStyle1}></span>
                        </div>
                        <div className="text pl-3">
                          <p style={textStyle2} >
                            <span><CIcon icon={cilPhone} size="lg" className='custom-icon'/>Phone:</span>
                            <a href="tel://123456789"style={textStyle1}>+21693102093</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center" style={styles}>
                          <span className="fa fa-paper-plane"style={textStyle1}></span>
                        </div>
                        <div className="text pl-3">
                          <p style={textStyle2}>
                            <span><CIcon icon={cilEnvelopeClosed} size="lg" className='custom-icon' />Email:</span>
                            <a href="mailto:contactintelleau@gmail.com" style={textStyle1}>
                              contactintelleau@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center" style={styles}>
                          <span className="fa fa-globe"style={textStyle1}></span>
                        </div>
                        <div className="text pl-3">
                          <p style={textStyle2}>
                            <span><CIcon icon={cibGoogleChrome} size="lg" className='custom-icon' />Website:</span>
                      
                          </p>
                          
                        </div>
                    
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center" style={styles}>
                          <span className="fa fa-globe"style={textStyle1}></span>
                        </div>
                        <div className="text pl-3">
                          <p style={textStyle2}>
                            <span><CIcon icon={cibLinkedin} size="lg" className='custom-icon'/>LinkedIn:</span>
                            <a href="https://www.bing.com/ck/a?!&&p=a6c0c141fa9f2c8fJmltdHM9MTY5MzI2NzIwMCZpZ3VpZD0xZGY1YmEzZS0xMjYxLTZmMjktMWFmMS1hOGQxMTMwYTZlYTcmaW5zaWQ9NTE3NQ&ptn=3&hsh=3&fclid=1df5ba3e-1261-6f29-1af1-a8d1130a6ea7&psq=intell+%27eau&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvaW50ZWxsLWVhdQ&ntb=1" style={textStyle1}>
                             LinkedIn Intell'Eau
                            </a>
                          </p>
                          
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    
                     </div>
                     
                     </div>
                     </div>
  
                  </div>
                 </div>
                
            
                     
    </section>
              
  )
}

