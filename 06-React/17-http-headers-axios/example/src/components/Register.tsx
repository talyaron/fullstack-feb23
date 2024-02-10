/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
    const [formContent, setFormContent] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePicture: null,
    });

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        setFormContent((prevFormContent) => ({
            ...prevFormContent,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Create FormData object
        const formDataObject = new FormData();
        for (const key in formContent) {
            //@ts-ignore
            formDataObject.append(key, formContent[key]);
        }

        // Log FormData object to the console (you might want to send it to the server here)
        console.log(formDataObject);
        for (const pair of formDataObject.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        const config = {
            headers: { 'content-type': 'multipart/form-data', "Authorization": "ADMINPASSWORD" }
        }

        const data = await axios.post(
            `/register`, formContent, config
        );

        // axios : "url" , {body}, {config}



        setFormContent({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            profilePicture: null,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formContent.username}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formContent.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formContent.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Confirm Password:
                <input
                    type="password"
                    name="confirmPassword"
                    value={formContent.confirmPassword}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Profile Picture:
                <input
                    type="file"
                    accept="image/*"
                    name="profilePicture"
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Register;
