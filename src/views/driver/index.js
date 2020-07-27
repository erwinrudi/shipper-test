import React, { Component } from 'react';

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CInput,
    CButton
} from '@coreui/react'


import profile from './../../assets/profile.png'
import CIcon from '@coreui/icons-react'

import './index.scss'

export default class Driver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driverData: [
                {
                    driverID: "KOB209",
                    driverName: "Jonathan Smith",
                    driverPhone: "087714029349",
                    driverSchedule: ["senin", "Selasa", "Rabu", "Kamis", "Jumat"],
                    driverOntime: 60,
                    driverStatus: 1
                },
                {
                    driverID: "KOB209",
                    driverName: "Jonathan Smith",
                    driverPhone: "087714029349",
                    driverSchedule: ["senin", "Selasa", "Rabu", "Kamis", "Jumat"],
                    driverOntime: 0,
                    driverStatus: 1
                },
                {
                    driverID: "KOB209",
                    driverName: "Jonathan Smith",
                    driverPhone: "087714029349",
                    driverSchedule: ["senin", "Selasa", "Rabu", "Kamis", "Jumat"],
                    driverOntime: 30,
                    driverStatus: 0
                },
                {
                    driverID: "KOB209",
                    driverName: "Jonathan Smith",
                    driverPhone: "087714029349",
                    driverSchedule: ["senin", "Selasa", "Rabu", "Kamis", "Jumat"],
                    driverOntime: 100,
                    driverStatus: 1
                },
                {
                    driverID: "KOB209",
                    driverName: "Jonathan Smith",
                    driverPhone: "087714029349",
                    driverSchedule: ["senin", "Selasa", "Rabu", "Kamis", "Jumat"],
                    driverOntime: 60,
                    driverStatus: 1
                }
            ]
        }
    }

    render() {
        let { driverData } = this.state
        return (
            <div className="driver-container">
                <div className="container-header">
                    <CRow style={{marginBottom: 20}}>
                        <CCol xs="12" sm="6" md="6">
                            <div className="title">
                                Driver Management
                        </div>
                            <div className="sub-title">
                                Daftar Driver yang bekerja dengan anda
                        </div>
                        </CCol>
                        <CCol style={{marginBottom: "auto", marginTop: "auto"}} xs="12" sm="6" md="6">
                            <CRow >
                                <CCol xs="7" sm="7" md="7">
                                    <CInputGroup style={{ width: "100%" }}>
                                        <CInputGroupPrepend>
                                            <CInputGroupText>
                                                <CIcon style={{ color: "red" }} name="cil-magnifying-glass" />
                                            </CInputGroupText>
                                        </CInputGroupPrepend>
                                        <CInput id="input1-group1" style={{ borderLeft: "none" }} name="input1-group1" placeholder="Cari Driver" />
                                    </CInputGroup>
                                </CCol>
                                <CCol xs="5" sm="5" md="5">
                                    <CButton type="submit" style={{ width: "100%" }} color="danger">Tambah Driver &nbsp; <CIcon name="cil-scrubber" /> </CButton>
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                </div>
                <div className="content-container">
                    <CRow>
                        {driverData.map((x, index) => (
                            <CCol key={index} xs="12" sm="6" md="3">
                                <CCard>
                                    <CCardHeader>
                                        <span className="header-card">ID Driver <span className="driver-id">{x.driverID}</span></span>
                                        <div className="card-header-actions">
                                            <CIcon name="cil-check" className="float-right" />
                                        </div>
                                    </CCardHeader>
                                    <CCardBody>
                                        <div className="container-body">
                                            <div className="top-content">
                                                <div className="leftside">
                                                    <img src={profile} alt="profile" className="image-driver" />
                                                    <div className="bio-content">
                                                        <div className="title-bio">
                                                            Nama Driver
                                                    </div>
                                                        <div className="value-bio">
                                                            {x.driverName}
                                                        </div>
                                                    </div>
                                                    <div className="bio-content">
                                                        <div className="title-bio">
                                                            Telepon
                                                    </div>
                                                        <div className="value-bio">
                                                            {x.driverPhone}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rigtside">
                                                    <div className="set-size charts-container">
                                                        <div className={`pie-wrapper progress-${x.driverOntime} style-2`}>
                                                            <span className="label">{x.driverOntime}<span className="smaller">%</span></span>
                                                            <div className="pie">
                                                                <div className="left-side half-circle"></div>
                                                                <div className="right-side half-circle"></div>
                                                            </div>
                                                            <div className="shadow"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="bio-content">
                                                <div className="title-bio">
                                                    Jadwal
                                                    </div>
                                                <div className="value-bio">
                                                    {x.driverSchedule.map((schedule, index) => {
                                                        if (index == x.driverSchedule.length - 1) {
                                                            return <span key={index}>{schedule} </span>
                                                        }
                                                        return <span key={index}>{schedule}, </span>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                        ))}
                    </CRow>
                </div>
            </div>
        )
    }
}