function scrollDown(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function setMainContent(cid) {
    const ids = ['ijvm', 'a8088', 'style'];
    for (const id of ids) {
        let itsActive = id === cid;
        const element = document.getElementById(id);
        element.style.display = (itsActive) ? 'flex' : 'none';
        if (itsActive) {
            document.getElementById(`switch-${cid}`).classList.add('active');
        } else {
            document.getElementById(`switch-${id}`).classList.remove('active');
        }
    }

}