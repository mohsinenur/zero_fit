import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {CAvatar,CDropdown,CDropdownDivider,CDropdownHeader,CDropdownItem,CDropdownMenu,CDropdownToggle,} from '@coreui/react'
import {cilLockLocked,cilSettings,cilUser,} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar9 from './../../assets/images/avatars/9.jpg'
import { supabase } from '../../helper/supabaseClient';

const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  const logout = async () => {
      setUser(null);
      localStorage.removeItem('supabaseSession');
      await supabase.auth.signOut();
  };
  
  const goToProfile = () => {
      navigate('/profile');
  };
  
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar9} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <CDropdownItem onClick={goToProfile}>
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={logout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
