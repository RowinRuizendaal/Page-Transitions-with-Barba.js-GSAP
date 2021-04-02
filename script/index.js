barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();

            pageTransition();
            await delay(1500);
            done();
        },

        async enter(data) {
            contentAnimation();
        },

        async once(data) {
            contentAnimation();
        },
    }]
})

const delay = (n) => {
    n = n || 200;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n)
    })
}

const pageTransition = () => {
    let tl = gsap.timeline()

    tl.to('ul.transition li', {
        duration: .5,
        scaleY: 1,
        transformOrigin: 'bottom left',
        stagger: .2
    })

    tl.to('ul.transition li', {
        duration: .5,
        scaleY: 0,
        transformOrigin: 'bottom left',
        stagger: .1
    })
}

const contentAnimation = () => {
    let tl = gsap.timeline();
    tl.from('.left', {
        duration: 1.5,
        translateY: 50,
        opacity: 0
    })

    tl.to('img', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        },
        '-=1.1')
}


let mouseCursor = document.querySelector('.cursor')



function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
}

window.addEventListener('mousemove', cursor)