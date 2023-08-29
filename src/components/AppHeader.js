import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CDropdown,
  CDropdownToggle,
  CDropdownHeader,
  CDropdownItem,
  CBadge,
  CDropdownDivider,
  CDropdownMenu,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'


const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const message = "Bonjour Intell'eau";
  const message1 = "Comment je peux vous aider";
  const message2 = "Merci et bonne journée";

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CDropdown variant="nav-item">
              <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
                <CNavLink  component={NavLink}>
                  Métriques
                </CNavLink>

              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-light fw-semibold py-2">Métriques</CDropdownHeader>
                <CDropdownItem to="/ph#/ph" component={NavLink}>
                  PH
                </CDropdownItem>
                <CDropdownItem to="/turbidité#/turbidité"component={NavLink}>
                  Turbidité
                </CDropdownItem>
                <CDropdownItem to="/Oxigéne_dissous#/Oxigéne_dissous"component={NavLink}>
                  Oxigéne_dissous
                </CDropdownItem>
                <CDropdownItem to="/Chlore_résiduel#/Chlore_résiduel"component={NavLink}>
                  Chlore_résiduel
                </CDropdownItem>
                <CDropdownItem to="/Conductivité#/Conductivité"component={NavLink}>
                  Conductivité
                </CDropdownItem>
                <CDropdownItem to="/Température#/Température"component={NavLink}>
                  Température
                </CDropdownItem>

              </CDropdownMenu>
            </CDropdown>
          </CNavItem>
          <CNavItem>
            <CNavLink  to="/gestion_metrique#/gestion_metrique"component={NavLink}>Gestion métriques</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink  to="/Contact#/Contact"component={NavLink}>Contact</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink  to="/Notifications#/Notifications"component={NavLink}>Notifications</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink to="/Notifications#/Notifications" component={NavLink}>
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
          <CDropdown variant="nav-item">
            <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
             <CIcon icon={cilEnvelopeOpen} size="lg" />
             </CDropdownToggle>
             <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-light fw-semibold py-2">Message</CDropdownHeader>
                <CDropdownItem >
                 <div className="message-button-container">
                   <span>{message.slice(0, 7)}...</span>
                    <CNavLink to="/Message#/Message" component={NavLink}>
                      <button className="btn btn-primary" style= {{height:'35px'}} type="button">voir</button>
                    </CNavLink>
                  </div>
                </CDropdownItem>
                <CDropdownItem >
                 <div className="message-button-container">
                   <span>{message1.slice(0, 7)}...</span>
                    <CNavLink to="/Message#/Message" component={NavLink}>
                      <button className="btn btn-primary" style= {{height:'35px'}}type="button">voir</button>
                    </CNavLink>
                  </div>
                </CDropdownItem>
                <CDropdownItem >
                 <div className="message-button-container">
                   <span>{message2.slice(0, 7)}...</span>
                    <CNavLink to="/Message#/Message" component={NavLink}>
                      <button className="btn btn-primary" style= {{height:'35px'}}type="button">voir</button>
                    </CNavLink>
                  </div>
                </CDropdownItem>
              </CDropdownMenu>
          </CDropdown>  
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
