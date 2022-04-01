const { Topic } = require("../../models");

const learningBtn = document.querySelector('learning-btn');

learningBtn.addEventListener('click', loadingPage);

function loadingPage (event) {
    if (topic_id === 1) {
        event.render('/HTML');
    }
};