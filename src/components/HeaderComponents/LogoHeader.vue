<template>
 <div class="header">
        <div class="logo">NEWS<span>ROOM</span></div>
        <div class="ads">
            <span><h3>&lt;html&gt;</h3> <h6>CODEX</h6></span>|
            <span>ADS 700x70px</span>
        </div>
    </div>
</template>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f1f1;
    padding: 0 5%;
}

.header .logo {
    font-weight: bold;
    color: #d0021b;
    font-size: 30px;
    span {
        color: #000;
    }
}

.header .ads {
    width: 40%;
    background-color: #000;
    color: #fff;
    padding: 15px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.header .ads span {
    margin: 0 20px;
}
.header .ads span:first-child {
    text-align: end;
}
</style>