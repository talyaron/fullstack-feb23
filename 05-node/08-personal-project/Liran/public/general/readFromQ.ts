function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('physicianEmail');
}

function getPhysicianEmailFromQuery() {
    try {
        const params = new URLSearchParams(window.location.search);
        return params.get("physicianEmail");
    } catch (error) {
        console.error(error)
    }
}

function getSummaryIdFromQuery() {
    try {
        const params = new URLSearchParams(window.location.search);
        return params.get("VisitId");
    } catch (error) {
        console.error(error);
    }
}

function getPatientIdFromQuery() {
    try {
        const params = new URLSearchParams(window.location.search);
        return params.get("_id");
    } catch (error) {
        console.error(error);
    }
}

async function getSummaryFromDB(visitId) {
    try {
        const response = await fetch(`/API/visit/get-visits`);
        const result = await response.json();
        const visit = result.visits.find(visit => visit._id === visitId);
        return visit.summary;
    } catch (error) {
        console.error(error);
    }
}

async function getPrescriptionFromDB(prescriptionId) {
    try {
        const response = await fetch(`/API/prescription/get-prescriptions`);
        const result = await response.json();
        const prescription = result.prescriptions.find(prescription => prescription._id === prescriptionId);
        return prescription;
    } catch (error) {
        console.error(error);
    }
}

function getTimeFormated(date) {
    try {
        debugger;
        if (!date) throw new Error("No date");
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
        // const formattedDateAsDate = new Date(formattedDate);
        return formattedDate;
    } catch (error) {
        console.error(error);
    }
}

async function getPhysicianDB(pEmail) {
    try {
        const response = await fetch(`/API/physician/get-physicians`);
        const result = await response.json();
        const physician = result.physicians.find(physician => physician.email === pEmail);
        if (!physician) throw new Error("Physician not found");
        return physician;
    } catch (error) {
        console.error(error);
    }
}

async function getVisitsDB(pId) {
    try {
        const response = await fetch(`/API/visit/get-visits`);
        const result = await response.json();
        const visits = result.visits.filter(visit => visit.patient === pId);
        return visits;
    } catch (error) {
        console.error(error);
    }
}

async function getPrescriptionsDB(pId) {
    try {
        const response = await fetch(`/API/prescription/get-prescriptions`);
        const result = await response.json();
        const prescriptions = result.prescriptions.filter(prescription => prescription.patient === pId);
        return prescriptions;
    } catch (error) {
        console.error(error);
    }
}

async function getPatientDB(pId) {
    try {
        const response = await fetch(`/API/patient/get-patients`);
        const result = await response.json();
        debugger;
        const patient = result.patients.find(patient => patient._id === pId);
        if (!patient) throw new Error("Patient not found");
        return patient;
    } catch (error) {
        console.error(error);
    }
}

async function getPatientName(patientId: string) {
    try {
        const response = await fetch("/API/patient/get-patients");
        const data = await response.json();
        const patient = data.patients.find(patient => patient._id === patientId);
        const patientName = `${patient.firstName} ${patient.lastName}`;
        return patientName;
    } catch (error) {
        console.error(error);
    }
}

async function getPhysicianName(physicianId: string) {
    try {
        const response = await fetch("/API/physician/get-physicians");
        const data = await response.json();
        const physician = data.physicians.find(physician => physician._id === physicianId);
        const physicianName = `Dr. ${physician.firstName} ${physician.lastName}`;
        return physicianName;
    } catch (error) {
        console.error(error);
    }
}

async function getMedicineName(medicineId: string) {
    try {
        const response = await fetch("/API/medicine/get-medicines");
        const data = await response.json();
        const medicine = data.medicines.find(medicine => medicine._id === medicineId);
        debugger;
        const medicineName = medicine.name;
        return medicineName;
    } catch (error) {
        console.error(error);
    }
}

async function getMedicinesDB() {
    try {
        const response = await fetch("/API/medicine/get-medicines");
        const data = await response.json();
        const medicines = data.medicines
        return medicines;
    } catch (error) {
        console.error(error);
    }
}

async function getVisitsAdminDB() {
    try {
        const response = await fetch(`/API/visit/get-visits`);
        const result = await response.json();
        const visits = result.visits;
        return visits;
    } catch (error) {
        console.error(error);
    }
}