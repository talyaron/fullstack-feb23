
handleGetgetUserName()
async function getAppointment(ev: any, status: string) {
    try {
        ev.preventDefault()
        const fields: any = document.querySelector('#field');
        const doctors: any = document.querySelector('#doctor');
        const dates: any = document.querySelector('#date');
        const appointment = {
            field: fields.value,
            doctor: doctors.value,
            date: dates.value,
        }
        if (!appointment.field || !appointment.doctor || !appointment.date) throw new Error("Please complete all details");


        rendersucceeded();

        const response = await fetch('/API/Personal/get-appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })

        const result = await response.json()
        const { usersTasks } = result
        console.log(usersTasks);


    } catch (error) {
        console.error(error)
    }
}

function rendersucceeded() {
    const html = `
    <p>נקבע לך תור בהצלחה</p>`
    const succeeded = document.querySelector('#succeeded');
    succeeded.innerHTML = html
}



async function getUserName() {
    try {
        const response = await fetch(`/API/Personal/get-user-name`);
        const result = await response.json();
        const { users } = result


        console.log(users)

        return users
    } catch (error) {
        console.error(error);
    }

}


async function handleGetgetUserName() {
    const users = await getUserName();

    const root = document.querySelector("#root");
    rendergetUserName(users, root as HTMLDivElement);
}



function rendergetUserName(users, HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found");
        console.log(users);
        if (!Array.isArray(users)) throw new Error("products are not array");
        const usersHTML = users
            .map((users) => renderusersHTML(users))
            .join("");
        HTMLElement.innerHTML = usersHTML;
    } catch (error) {
        console.error(error);
    }
}


function renderusersHTML(users) {
    try {
        const html = `<h2 class="appointments"> ,${users.name} שלום 
      

    </h2>`;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}



async function getUserappointments() {
    try {
        const response = await fetch(`/API/Personal/get-user-appointments`);
        const result = await response.json();
        const { appointments } = result

        // console.log(result)
        console.log(appointments)
        // console.log(usersPictures)
        return appointments
    } catch (error) {
        console.error(error);
    }

}


function renderAppointmentsHTML(appointments) {
    try {
        const html = `<div class="appointments">נקבע לך  תור אצל רופא ${appointments.field}
       בתאריך ${appointments.date} 
       אצל ${appointments.doctor} 

    </div>`;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderAppointments(appointments, HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found");
        // console.log(appointments);
        if (!Array.isArray(appointments)) throw new Error("products are not array");
        const appointmentsHTML = appointments
            .map((appointments) => renderAppointmentsHTML(appointments))
            .join("");
        HTMLElement.innerHTML = appointmentsHTML;
    } catch (error) {
        console.error(error);
    }
}

async function handleGetAppointments() {
    const PersonalAppointments = await getUserappointments();

    const appointments = document.querySelector("#appointments");
    renderAppointments(PersonalAppointments, appointments as HTMLDivElement);
}