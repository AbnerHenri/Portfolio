// --------------------Navbar-------------------- //

let state = false

function CloseBalloons() {

    let Balloons = document.querySelectorAll('.Balloon')
    console.log('Aqui')

    if (state == false) {
        Balloons.forEach((e) => {
            e.classList = 'Balloon'
        })
    } else {
        Balloons.forEach((e) => {
            e.classList = 'Balloon Collect'
        })
    }

    state = !state

}