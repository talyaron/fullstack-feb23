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
