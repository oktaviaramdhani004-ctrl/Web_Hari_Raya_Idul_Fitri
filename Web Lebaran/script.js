function showContent(id) {
    let sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.style.display = 'none');

    document.getElementById(id).style.display = 'block';
}