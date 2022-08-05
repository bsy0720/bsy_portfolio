//서브메뉴 나오게
/*eslint-disable*/
$(document).ready(function () {
    $('.subMenu').hide();

    $('.subMenu_wrap').mouseover(function () {
        $('.subMenu').slideDown();

    });
    $('.subMenu_wrap').mouseleave(function () {
        $('.subMenu').hide();
    });
});

/*eslint-disable*/

$(document).ready(function () {
    $('.sidenav').hide();

    $('.burger_btn').click(function () {
        $('.sidenav').fadeIn(400);

        $('.mb_subMenu_wrap').mouseover(function () {
            $('.mb_subMenu').slideDown();
        });

        $('.mb_subMenu_wrap').mouseleave(function () {
            $('.mb_subMenu').hide();
        });
        $('.sidenav li').click(function () {
            $('.sidenav').fadeOut(400);
        })

    });
});

// 스크롤이벤트
var animateHTML = function () {
    var elems,
        windowHeight

    var init = function () {
        elems = document.getElementsByClassName("hidden");
        windowHeight = window.innerHeight;
        _addEventHandlers();
    }

    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("resize", init)
    }
    var _checkPosition = function () {
        for (var i = 0; i < elems.length; i++) {
            var posFromTop = elems[i].getBoundingClientRect().top;
            if (posFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace("hidden", "typewriter");
            }
        }
    }

    return {
        init: init
    }
}
animateHTML().init();



// 마우스 클릭이벤트
function clickEffect(e) {
    var d = document.createElement("div");
    d.className = "clickEffect";
    d.style.top = e.clientY + "px";
    d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener('animationend', function () {
        d.parentElement.removeChild(d);
    }.bind(this));
}
document.addEventListener('click', clickEffect);