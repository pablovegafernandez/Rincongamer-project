//Done by Pablo and Alvaro
// noinspection JSJQueryEfficiency

$(document).ready(function () {
    //add fade in class for sections when scrolled to
    $(window).scroll(function () {
        //for each section which will get revealed
        $('.revealed').each(function () {
            //get heights
            const windowheight = window.innerHeight;
            const revealtop = this.getBoundingClientRect().top;
            //if in viewframe reveal section
            if (revealtop < windowheight) {
                this.classList.add('true');
            } else {
                this.classList.remove('true');
            }
        });
    });
    //declare variables
    const listItems = [];
    const nextEvent = $('#nextEvent');
    const allEvents = $('#allEvents');
    let counter = 0;
    //delete timeline events and add each event to an array
    $('li.event').each(function () {
        listItems.push(this);
        $(this).remove();
    });

    //add events to the timeline 1 by 1
    nextEvent.click(function () {
        //append the events on the timeline from the list one by one
        if (counter < listItems.length) {
            $('li.scale').removeClass('scale');
            $('ul.gameTimeline').append(listItems[counter]);
            $('li.event').last().addClass('scale');
            counter++;
            //if list is finished change the arrow directions and hide left button
            if (counter === listItems.length) {
                allEvents.children().removeClass('fa-angle-double-down');
                allEvents.children().addClass('fa-angle-double-up');
                nextEvent.hide();
            }
        }
    });
    //add events to the timeline 1 by 1
    allEvents.click(function () {
        //append the events on the timeline from the list
        if (counter < listItems.length) {
            $('li.scale').removeClass('scale');
            listItems.forEach(element => $('ul.gameTimeline').append(element));
            counter = listItems.length;
            //if list is finished change the arrow directions and hide left button
            if (counter === listItems.length) {
                $(this).children().removeClass('fa-angle-double-down');
                $(this).children().addClass('fa-angle-double-up');
                nextEvent.hide();
            }
            //if the timeline is full, onclick: remove all events from html
        } else if (counter === listItems.length) {
            $('li.event').each(function () {
                listItems.push(this);
                $(this).remove();
            });
            //add left button back in
            nextEvent.show();
            //change arrow directions once events are deleted from html
            $(this).children().removeClass('fa-angle-double-up');
            $(this).children().addClass('fa-angle-double-down');
        }
    });

    //change color of icons when clicking
    nextEvent.mousedown(function () {
        $(this).removeClass('text-secondary');
        $(this).addClass('text-text');
    });
    allEvents.mousedown(function () {
        $(this).addClass('bg-text');
    });
    //revert color of icons after clicking
    nextEvent.mouseup(function () {
        $(this).removeClass('text-text');
        $(this).addClass('text-secondary');
    });
    allEvents.mouseup(function () {
        $(this).removeClass('bg-text');
    });
    //blur cards when hovering above
    if ($(window).width() > 991) {
        $('.photocards').removeClass('blur');
    }
    $('.photocards').on('mouseenter mouseleave', function () {
        $(this).toggleClass('blur');
    });
    $('.photocards').siblings('p').on('mouseenter mouseleave', function () {
        $(this).siblings('div').toggleClass('blur');
    });
});
