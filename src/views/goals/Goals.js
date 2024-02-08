import React, { useEffect, useState, createRef } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CNavItem,
  CNavLink,
  CTabContent,
  CNav,
  CTabPane,
} from '@coreui/react'

import { supabase } from '../../helper/supabaseClient'

const Goals = () => {
  const [activeKey, setActiveKey] = useState(1)
  const [goals, setGoals] = useState([])
  const [goalsW, setGoalsW] = useState([])

  useEffect(() => {
    fetchGoals()
    fetchGoalsW()
  }, [])

  const fetchGoals = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      // Fetch logged-in user's goals data
      const { data, error } = await supabase
        .from('goals')
        .select('*')
        .order('created_at', { ascending: false })
        .eq('user_id', user.id)

      if (error) {
        throw error
      }

      // Set goals data in state
      setGoals(data || [])
    } catch (error) {
      console.error('Error fetching goals:', error.message)
    }
  }

  const fetchGoalsW = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      const { data, error } = await supabase
        .from('goals')
        .select('*')
        .order('created_at', { ascending: false })
        .eq('type', 'weight')
        .eq('user_id', user.id)

      if (error) {
        throw error
      }

      // Set goals data in state
      setGoalsW(data || [])
    } catch (error) {
      console.error('Error fetching goals:', error.message)
    }
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Goals</CCardHeader>
        <CCardBody>
          <CNav variant="pills" role="tablist">
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 1}
                component="button"
                role="tab"
                aria-controls="all-tab-pane"
                aria-selected={activeKey === 1}
                onClick={() => setActiveKey(1)}
              >
                All
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 2}
                component="button"
                role="tab"
                aria-controls="weight-tab-pane"
                aria-selected={activeKey === 2}
                onClick={() => setActiveKey(2)}
              >
                Weight
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 3}
                component="button"
                role="tab"
                aria-controls="activities-tab-pane"
                aria-selected={activeKey === 3}
                onClick={() => setActiveKey(3)}
              >
                Activities
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="all-tab-pane" visible={activeKey === 1}>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Timeline</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {goals.map((goal) => (
                    <CTableRow key={goal.id}>
                      <CTableDataCell>{goal.title}</CTableDataCell>
                      <CTableDataCell>{goal.type}</CTableDataCell>
                      <CTableDataCell>{goal.end_at}</CTableDataCell>
                      <CTableDataCell>{goal.status}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="weight-tab-pane" visible={activeKey === 2}>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Timeline</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Duration</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {goalsW.map((goal) => (
                    <CTableRow key={goal.id}>
                      <CTableDataCell>{goal.title}</CTableDataCell>
                      <CTableDataCell>{goal.type}</CTableDataCell>
                      <CTableDataCell>{goal.end_at}</CTableDataCell>
                      <CTableDataCell>{goal.status}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CTabPane>
            <CTabPane
              role="tabpanel"
              aria-labelledby="acivities-tab-pane"
              visible={activeKey === 3}
            >
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Timeline</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Duration</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CTabPane>
          </CTabContent>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Goals
