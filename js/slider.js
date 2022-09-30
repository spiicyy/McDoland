$(function () {
    let slide = $('.slide-cont');
    slide.hide();

    let currId = 0;
    let minId = 0;
    let maxId = slide.length - 1;

    slide.eq(0).show();

    let rightArrow = $('#arrow-right');
    let leftArrow = $('#arrow-left');

    rightArrow.click(() => {
        slide.eq(currId).hide();

        currId++;
        if (currId > maxId) {
            currId = minId;
        }

        slide.eq(currId).show();
    })

    leftArrow.click(() => {
        slide.eq(currId).hide();

        currId--;
        if (currId < minId) {
            currId = maxId;
        }

        slide.eq(currId).show();
    })
})