import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function FormComponent() {

    const [status, setStatus] = useState('');

    const [formData, setFormData] = useState({
        firstname: ' ',
        lastname: ' ',
        email: '',
        number: '',
        address: '',
        nationality: '',
        occupation: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to SheetDB API
            const response = await axios.post(
                // 'https://sheetdb.io/api/v1/<YOUR-SHEETDB-API-ENDPOINT>',
                'https://sheetdb.io/api/v1/5k2ugtfzxgwhg',

                formData
            );

            // Handle the response if needed
            setStatus('SUCCESS');
            console.log(response);

            // Reset the form
            setFormData({ firstname: ' ', lastname: '', email: '', number: '', address: '', nationality: '', occupation: '' });
        } catch (error) {
            // Handle the error
            console.error(error);
        }
    };


    useEffect(() => {
        if (status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 7000);
        }
    }, [status]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form id='regForm' className='w-fit mx-auto shadow-md m-4 p-8' onSubmit={handleSubmit}>
            {status && renderAlert()}
            <h4 className='text-center font-bold py-2'>Registration Form</h4>
            <div className='grid md:grid-cols-2 gap-4'>

                <div>
                    <label htmlFor="firstname" className='font-semibold'>Firstname:</label><br />
                    <input
                        className='border border-[gray] rounded'
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div>
                    <label className='font-semibold' htmlFor="lastname">Lastname:</label><br />
                    <input
                        className='border border-[gray] rounded'
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className='font-semibold' htmlFor="email">Email:</label><br />
                    <input
                        className='border border-[gray] rounded'
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div>
                    <label className='font-semibold' htmlFor="address">Address:</label><br />
                    <input
                        className='border border-[gray] rounded'
                        type="address"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div>
                    <label className='font-semibold' htmlFor="number">Phone Number:</label> <br />
                    <input
                        className='border border-[gray] rounded'
                        type="number"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className='font-semibold' htmlFor="occupation">Occupation:</label><br />
                    <input
                        className='border border-[gray] rounded'
                        type="text"
                        id="occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className='font-semibold' htmlFor="nationality">Nationality:</label><br />
                    <input
                        className='border border-[gray] rounded'
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        required
                    />
                </div>

            </div>

            <div className='mt-4'>
                <button className='mx-auto bg-blue-600 shadow text-white font-bold px-4 py-2 rounded' type="submit">Submit</button>
            </div>
        </form>
    );
}

const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-[green] bg-gray shadow rounded mb-5 text-center ">
        <p>Registration successful</p>
        <p>Complete your Registration by making Payment to the Company's Account to get Started</p>
    </div>
)