<template>
    <div class="featured-courses">
        <h2>Featured Courses</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
        <div class="course-list">
            <div class="course-item">
                <span>Chinese</span><div class="line"></div>
                <button>Language start learn</button>
            </div>
            <div class="course-item">
                <span>English</span><div class="line"></div>
                <button>Language start learn</button>
            </div>
            <div class="course-item">
                <span>French</span><div class="line"></div>
                <button>Language start learn</button>
            </div>
            <div class="course-item">
                <span>German</span><div class="line"></div>
                <button>Language start learn</button>
            </div>
            <div class="course-item">
                <span>Japanese</span><div class="line"></div>
                <button>Language start learn</button>
            </div>
            <div class="course-item">
                <span>Spanish</span><div class="line"></div>
                <button>Language start learn</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.featured-courses {
    text-align: center;
    padding: 20px;
}

.featured-courses h2 {
    font-size: 3em;
    font-weight: bold;
}

.featured-courses p {
    color: #888;
    margin-bottom: 20px;
}

.course-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.course-item {
    display: flex;
    align-items: center;
    width: 60%;
    margin: 10px 0;
    padding-bottom: 10px;
}

.course-item img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
}

.course-item span {
    flex-grow: 1;
    text-align: left;
    font-size: 1.2em;
    width: 140px;
}

.course-item button {
    background-color: #ffffff;
    border: 2px solid #DBC64C;
    padding: 10px 70px;
    color: #DBC64C;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.5s, color 0.3s;
}
.course-item:first-child button {
    background-color: #DBC64C;
    color: #ffffff;
}

.course-item button:hover {
    background-color: #DBC64C;
    color: #ffffff;
}
.line {
    background-color: #DBC64C;
    height: 2px;
    width: 100%;
}
@media (max-width: 768px) {
    .featured-courses{
        transition: All 0.3s;
    }
.course-item {
    display: block;
    text-align: start;
    width: 60%;
    margin: 10px 0;
    padding-bottom: 10px;
}
.line {
    background-color: transparent;
}
.course-item button {
    margin-top: 10px;
    width: 100%;
}
.course-item {
    width: 90%;
}
}

</style>