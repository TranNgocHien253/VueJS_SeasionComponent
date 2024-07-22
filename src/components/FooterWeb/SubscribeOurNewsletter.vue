<template>
    <div class="containerPuple">
        <div class="subscribe-container">
            <h2>Subscribe Our Newsletter</h2>
            <form class="subscribe-form">
                <input type="email" placeholder="Enter Your email" required>
                <button type="submit">→</button>
            </form>
        </div>
    </div>
</template>


<style scoped>
.containerPuple {
    width: 85%;
    margin: 50px auto;
    padding: 20px;
    background-color: #270B60;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
}

.subscribe-container {
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    width: 100%;
    max-width: 600px;
}

.subscribe-container h2 {
    color: #fff;
    margin-bottom: 20px;
}

.subscribe-form {
    display: flex;
    justify-content: center;
    align-items: center;
}

.subscribe-form input[type="email"] {
    padding: 10px;
    font-size: 16px;
    border: 2px;
    border: none;
    border-right: none;
    outline: none;
    width: 100%;
}

.subscribe-form button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #d3b94b;
    color: #fff;
    cursor: pointer;
    outline: none;
}

.subscribe-form button:hover {
    background-color: #b89e3b;
}
</style>