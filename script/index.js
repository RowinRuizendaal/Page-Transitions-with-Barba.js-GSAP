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
        transformOrigin: 'top right',
        stagger: .2
    })

    tl.to('ul.transition li', {
        duration: .5,
        scaleY: 0,
        transformOrigin: 'top left',
        stagger: .1
    })
}

const contentAnimation = () => {
    let tl = gsap.timeline();
}

let mouseCursor = document.querySelector('.cursor')



function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
}

window.addEventListener('mousemove', cursor)