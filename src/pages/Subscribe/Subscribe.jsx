import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Check if email is empty
        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please provide your email!',
            });
            return;
        }

        // Display success SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Subscribe Successful!',
            text: 'Your subscribe is done.',
        });

        // Clear the email input field after successful subscription
        setEmail('');
    };

    return (
        <div className="form-control bg-slate-600">
            <form onSubmit={handleSubscribe}>
                <div className="input-group justify-center my-12">
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        className="input input-bordered"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="btn btn-error normal-case text-[#fff]">
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Subscribe;
