<template>
    <div class="footerHome">
        <div class="footerHome__container">
            <div class="nameLogo">
                <h2><span>NEWS</span>ROOM</h2>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quasi rem maxime.</p>
            <div class="button-container">
                <button class="grid-button icon"><i class="fa fa-twitter"></i></button>
                <button class="grid-button icon"><i class="fa fa-facebook-f"></i></button>
                <button class="grid-button icon"><i class="fa fa-linkedin"></i></button>
                <button class="grid-button icon"><i class="fa fa-instagram"></i></button>
                <button class="grid-button icon"><i class="fa fa-youtube-play"></i></button>
            </div>
        </div>
        <div class="footerHome__container">
            <h2>Categories</h2>
            <div class="button-container">
                <button class="grid-button">Button 1</button>
                <button class="grid-button">Button 2</button>
                <button class="grid-button">Button 3</button>
                <button class="grid-button">Button 4</button>
                <button class="grid-button">Button 5</button>
                <button class="grid-button">Button 6ada</button>
                <button class="grid-button">Button 7</button>
                <button class="grid-button">Button8</button>
            </div>
        </div>
        <div class="footerHome__container">
            <h2>Tags</h2>
            <div class="button-container">
                <button class="grid-button">Button 1</button>
                <button class="grid-button">Button 2</button>
                <button class="grid-button">Button 3</button>
                <button class="grid-button">Button 4</button>
                <button class="grid-button">Button 5</button>
                <button class="grid-button">Button 6ada</button>
                <button class="grid-button">Button 7</button>
                <button class="grid-button">Button8</button>
            </div>
        </div>
        <div class="footerHome__container">
            <h2>Quick Links</h2>
            <ul>
                <li>About</li>
                <li>Advertise</li>
                <li>Privacy Policy</li>
                <li>Term & Conditions</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
<div class="endFooter">
        <p><i class="fa fa-copyright"></i> <span>Your Site Name</span>. All Right Reserved. Designed by <span>HTML Codex</span></p>
    
</div>
</template>
<style scoped>
.footerHome {
    display: flex;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    color: rgb(51, 51, 51);
    button {
        border: 2px solid #bfbfbf;
        color: #a5a5a5;
    }
}

.footerHome__container {
    width: 25%;
    margin: 20px;

    span {
        color: red;
    }
}

.button-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    padding: 10px;
}

.grid-button {
    padding: 5px;
    margin: 2px;
    background-color: transparent;
    border: 1px solid #000;
    cursor: pointer;
    transition: background-color 0.3s;
    white-space: nowrap;
}

.icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.grid-button:hover {
    background-color: #b8b8b87b;
}

ul {
    list-style-type: none;
    padding: 0;
}

li::before {
    content: "> ";
    color: black;
    font-weight: bold;
}
.endFooter {
    color: #595959;
    text-align: center;
    font-weight: bolder;
    margin-bottom: 150px;
    margin-top: 10px;
    span {
        color: red;
    }
}
@media (max-width: 800px) {
    .footerHome {
        display: block;
    }

    .footerHome__container {
        width: 100%;
    }
}
</style>