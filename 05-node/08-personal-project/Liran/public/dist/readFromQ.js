function getEmailFromQuery() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('physicianEmail');
}
function getPhysicianEmailFromQuery() {
    try {
        var params = new URLSearchParams(window.location.search);
        return params.get("physicianEmail");
    }
    catch (error) {
        console.error(error);
    }
}
function getPatientIdFromQuery() {
    try {
        var params = new URLSearchParams(window.location.search);
        return params.get("patientId");
    }
    catch (error) {
        console.error(error);
    }
}
