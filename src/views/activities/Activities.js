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

const Activities = () => {
  const [activeKey, setActiveKey] = useState(1)

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Activities</CCardHeader>
        <CCardBody>
          <CNav variant="pills" role="tablist">
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 1}
                component="button"
                role="tab"
                aria-controls="walking-tab-pane"
                aria-selected={activeKey === 1}
                onClick={() => setActiveKey(1)}
              >
                Walking
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 2}
                component="button"
                role="tab"
                aria-controls="running-tab-pane"
                aria-selected={activeKey === 2}
                onClick={() => setActiveKey(2)}
              >
                Running
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 3}
                component="button"
                role="tab"
                aria-controls="cycling-tab-pane"
                aria-selected={activeKey === 3}
                onClick={() => setActiveKey(3)}
              >
                Cycling
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 4}
                component="button"
                role="tab"
                aria-controls="other-tab-pane"
                aria-selected={activeKey === 4}
                onClick={() => setActiveKey(4)}
              >
                Other
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="walking-tab-pane" visible={activeKey === 1}>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Activity</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Particulars</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Goal</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="running-tab-pane" visible={activeKey === 2}>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Activity</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Particulars</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Goal</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="cycling-tab-pane" visible={activeKey === 3}>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Activity</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Particulars</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Goal</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="other-tab-pane" visible={activeKey === 4}>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Activity</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Particulars</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Goal</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Dec 12, 2023</CTableDataCell>
                    <CTableDataCell>Walking</CTableDataCell>
                    <CTableDataCell>3,050 steps</CTableDataCell>
                    <CTableDataCell>31%</CTableDataCell>
                  </CTableRow>
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

export default Activities
