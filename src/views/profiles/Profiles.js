import React, { useEffect, useState } from 'react'
import { CCardBody, CCard, CCardHeader, CRow, CCol, CImage, CButton } from '@coreui/react'
import { supabase } from '../../helper/supabaseClient'
import { useNavigate } from 'react-router-dom'

const Profiles = () => {
  const [profile, setProfile] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single()

      if (error) {
        throw error
      }

      setProfile(data || [])
    } catch (error) {
      console.error('Error fetching profile:', error.message)
    }
  }

  const goToEditProfile = () => {
    navigate('/profile/edit')
  }

  const cmToFeetAndInches = (heightInCm) => {
    const totalInches = heightInCm / 2.54
    const feet = Math.floor(totalInches / 12)
    const inches = Math.round(totalInches % 12)
    return `${feet} feet ${inches} inches`
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Profile
          {profile && (
            <CButton color="primary" className="float-end" onClick={goToEditProfile}>
              Edit
            </CButton>
          )}
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="3">
              <CImage src={profile.avatar_url} alt="Avatar" width="150" height="150" />
            </CCol>
            <CCol xs="auto">
              <div>
                <strong>Full Name:</strong> {profile.full_name}
              </div>
              {profile.gender && (
                <div>
                  <strong>Gender:</strong> {profile.gender}
                </div>
              )}
              {profile.weight && (
                <div>
                  <strong>Weight:</strong> {profile.weight} KG
                </div>
              )}
              {profile.height && (
                <div>
                  <strong>Height:</strong> {cmToFeetAndInches(Number(profile.height))}
                </div>
              )}
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Profiles
