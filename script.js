window.onload = function() {

    // 프로젝트 캐러샐 버튼 목록
    const buttonList = document.getElementsByClassName('carousel-button');
    const springButton = document.getElementsByClassName('carousel-button')[0].querySelectorAll('button');
    const reactButton = document.getElementsByClassName('carousel-button')[1].querySelectorAll('button');
    const next = document.getElementsByClassName('next');
    const prev = document.getElementsByClassName('prev');

    // 캐러샐 현재위치
    let Sidx = 0;
    let Ridx = 0;
    
    // 프로젝트 캐러샐 버튼에 클래스명 추가
    function addClassName(carouselIndex, buttonIndex) {
        const buttons = buttonList[carouselIndex].querySelectorAll('button')
        buttons.forEach(i => {
            i.className = '';
        })
        buttons[buttonIndex].className = 'clicked';
    }


    // 프로젝트 캐러샐 버튼 클릭 시 사진 변경
    function changeCarousel(carouselIndex, buttonIndex) {
        if(carouselIndex == 0) {
            Sidx = buttonIndex;
        } else {
            Ridx = buttonIndex;
        }
        document.getElementById(`carousel${carouselIndex + 1}`).style.transform = `translate(${buttonIndex * -1000}px)`;
        addClassName(carouselIndex, buttonIndex);
    }

    console.log(springButton.length)
    
    // 버튼 클릭 이벤트
    prev[0].addEventListener('click', () => {
        if(Sidx == 0) {
            return;
        }
        console.log(Sidx)
        changeCarousel(0, Sidx-1)
    });

    next[0].addEventListener('click', () => {
        if(Sidx == springButton.length - 1) {
            return;
        }
        changeCarousel(0, Sidx+1)
    })

    prev[1].addEventListener('click', () => {
        if(Ridx == 0) {
            return;
        }
        changeCarousel(1, Ridx-1)
    });

    next[1].addEventListener('click', () => {
        if(Ridx == reactButton.length - 1) {
            return;
        }
        changeCarousel(1, Ridx+1)
    })

    springButton[0].addEventListener('click', () => {
        changeCarousel(0, 0);
    })
    springButton[1].addEventListener('click', () => {
        changeCarousel(0, 1);
    })
    springButton[2].addEventListener('click', () => {
        changeCarousel(0, 2);
    })
    springButton[3].addEventListener('click', () => {
        changeCarousel(0, 3);
    })
    springButton[4].addEventListener('click', () => {
        changeCarousel(0, 4);
    })
    springButton[5].addEventListener('click', () => {
        changeCarousel(0, 5);
    })

    reactButton[0].addEventListener('click', () => {
        changeCarousel(1, 0);
    })
    reactButton[1].addEventListener('click', () => {
        changeCarousel(1, 1);
    })
    reactButton[2].addEventListener('click', () => {
        changeCarousel(1, 2);
    })
    reactButton[3].addEventListener('click', () => {
        changeCarousel(1, 3);
    })
    reactButton[4].addEventListener('click', () => {
        changeCarousel(1, 4);
    })
    reactButton[5].addEventListener('click', () => {
        changeCarousel(1, 5);
    })
    reactButton[6].addEventListener('click', () => {
        changeCarousel(1, 6);
    })
    reactButton[7].addEventListener('click', () => {
        changeCarousel(1, 7);
    })
    reactButton[8].addEventListener('click', () => {
        changeCarousel(1, 8);
    })
    
}