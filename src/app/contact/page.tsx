import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>If you would like to get in touch, feel free to reach out via email or connect with me on social media!</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactPage;