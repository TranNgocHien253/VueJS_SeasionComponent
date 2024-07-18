<template>
    <div class="contact-section">
        <div class="contact-form">
            <h2>Get In Touch</h2>
            <form action="#" method="POST">
                <input type="text" name="name" placeholder="Name" required>
                <input type="text" name="phone" placeholder="Phone" required>
                <input type="email" name="email" placeholder="Email" required>
                <textarea name="message" placeholder="Message" required></textarea>
                <div class="button-container">
                    <button type="submit" class="send-btn">SEND</button>
                </div>
            </form>
        </div>
        <div class="contact-info">
            <div class="contact-item">
                <i class="fa fa-phone"></i> Call Now +01 123467890
                <i class="fa fa-envelope"></i> demo@gmail.com
            </div>
            <div class="social-media">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
            </div>
        </div>
        <div class="footerInFooter">
            <p>2023 All Rights Reserved. Design by Free Html Templates</p>
        </div>
    </div>
</template>


<style scoped>
.contact-section {
    background-color: #000000;
    padding: 50px 20px;
    text-align: center;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto 30px;
    text-align: left;
}

.contact-form h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    font-size: 1rem;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: #fff;
}

.contact-form .button-container {
    display: flex;
    justify-content: flex-end;
}

.contact-form button {
    background-color: transparent;
    border: 2px solid #d4af37;
    color: #d4af37;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.contact-form button:hover {
    background-color: #d4af37;
    color: #ffffff;
}

.contact-info {
    max-width: 600px;
    margin: 0 auto 30px;
}

.contact-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    font-size: 1.2rem;
    color: #fff;
    width: 100%;
}

.contact-info {
    display: flex;
    align-items: center;
}
/* 
.contact-info i {
    margin-right: 10px;
} */


.social-media {
    margin-top: 20px;
    color: #fff;
}

.social-media a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s;
}

.social-media a:hover {
    color: #d4af37;
}

.footerInFooter {
    margin-top: 20px;
}

.footerInFooter p {
    font-size: 0.9rem;
    color: #666;
}
</style>