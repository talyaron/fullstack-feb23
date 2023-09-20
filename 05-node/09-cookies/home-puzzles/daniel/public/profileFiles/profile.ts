
interface Profile {
    userName: string;
    // crossfitName: string;
    status: string;
    // iconImg: string;
    birthDate: string;
    phoneNumber: number;
    _id?: string;
}

async function handleAddDetail(ev:any){
    try {
        ev.preventDefault();
        const userName = ev.target.userName.value;
        // const crossfitName = ev.target.crossfitName.value;
        const status = ev.target.status.value;
        // const iconImg = ev.target.iconImg.value;
        const birthDate = ev.target.birthDate.valueAsNumber;
        const phoneNumber = ev.target.phoneNumber.valueAsNumber;
        if(!userName || !status || !birthDate ||  !phoneNumber) throw new Error("Please fill all fileds")

        const detail:Profile = { userName,status,birthDate,phoneNumber};
        const response = await fetch("/API/profile/add-detail",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(detail)
        })

        const result = await response.json();
        console.log(result);
        
    } catch (error) {
        console.error(error.message);
    }
}

async function getDetails(){
    try {
        const response = await fetch('/API/profile/get-detail')
        const result = await response.json();
        const { details } = result
        if(!Array.isArray(details)) throw new Error("details are not array")
        console.log(details);
        console.log(result);
        return details;

    } catch (error) {
        console.error(error);
        return []
    }
}
function renderDetailsHtml(detail:Profile){
    try {
        const html = `<div class="container">
        <h2 style="border-radius: 10px 10px 0px 0px;">Businesses</h2>
        <div class="businesses">
            <div class="businesses__img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbC6osuqiBNnqVRRl9p9LzG-iLUjFDO3cSg&usqp=CAU" alt="">
            </div>
            <div class="businesses__name">
                <div class="businesses__status">
                    <h3>CrossFit Rishon City</h3>
                    <p><span>${detail.status}</span></p>

                </div>
                <div class="businesses__callUs">
                    <img src="https://www.svgrepo.com//show/17430/phone-call.svg" alt="">
                    <img src="https://cdn-icons-png.flaticon.com/512/7613/7613767.png" alt="">
                </div>
            </div>
        </div>
        <div class="container__personalTitle">
            <h2 style="position: relative; width: 100%;">Personal Details</h2>
            <img src="https://cdn-icons-png.flaticon.com/128/747/747994.png" alt="">
        </div>
        <div class="PersonalDetails">
            <div class="PersonalDetails__birthday">
                <img src="https://cdn-icons-png.flaticon.com/512/1412/1412443.png" alt="">
                <p>${detail.birthDate}</p>
            </div>
            <div class="PersonalDetails__phone">
                <img src="https://www.svgrepo.com/show/6064/phone-call.svg" alt="">
                <p>${detail.phoneNumber}</p>
            </div>
        </div>
    </div>
        `
        return html;
    } catch (error) {
        console.error(error);
        return ""
    }
}

function renderDetails(details:Profile[], HTMLElement:HTMLDivElement){
    try {
        if(!HTMLElement) throw new Error("HTMLElement not found")
        console.log(details);
        if(!Array.isArray(details)) throw new Error("details are not array")
        const detailsHTML = details.map(detail=> renderDetailsHtml(detail)).join("")
        HTMLElement.innerHTML = detailsHTML;
    } catch (error) {
        console.error(error)
    }
}


async function handleGetDetails(){
    const details = await getDetails();

    const rootDetail = document.querySelector("#rootDetail");
    renderDetails(details, rootDetail as HTMLDivElement)
}

// async function handleGetUser(){
//     try {
//         const response = await fetch('API/users/get-user');
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.error(error)
//     }
// }

// handleGetUser()