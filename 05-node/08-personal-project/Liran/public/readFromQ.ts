function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('physicianEmail');
}

function getPhysicianEmailFromQuery(){
    try{
        const params = new URLSearchParams(window.location.search);
        return params.get("physicianEmail");
    }catch(error){
        console.error(error)
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


function getTimeFormated(date) {
    try {
        if (!date) throw new Error("No date");
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const formattedDateAsDate = new Date(formattedDate);
        return formattedDateAsDate;
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