let products = [
    {
        name: "milk",
        price: 25
    },
    {
        name: "Joe Banks",
        price: 1702
    },
    {
        name: "Louis Marshall",
        price: 1425
    },
    {
        name: "Ronald Cooper",
        price: 1972
    },
    {
        name: "Ethan Brewer",
        price: 815
    },
    {
        name: "Will Bro",
        price: 8444
    },
    {
        name: "Steve Reid",
        price: 1302
    },
    {
        name: "Alex Lawson",
        price: 1015
    },
    {
        name: "Roy Garrett",
        price: 1678
    },
    {
        name: "Georgi Garrett",
        price: 1145
    },
    {
        name: "Aaron Henderson",
        price: 874
    },
    {
        name: "Lois ottam",
        price: 1581
    },
    {
        name: "Nicolas Rivera",
        price: 1878
    },
    {
        name: "Jerry Diaz",
        price: 750
    },
    {
        name: "Ronald Garrett",
        price: 1509
    },
    {
        name: "Carles Fuller",
        price: 304
    },
    {
        name: "Chris Wallace",
        price: 551
    },
]

let h6 = document.querySelector('.one')
let h5 = document.querySelector('.two')
let back = document.querySelector('.back')
let modal = document.querySelector('.box')
let add = document.querySelector('.add')
let blue =document.querySelector('.blue')
let form_two = document.forms.ad
let form = document.forms.get

add.onclick = () => {
    modal.style.display = 'block'
}

back.onclick = () => {
    modal.style.display = 'none'
}

blue.onclick = () => {
    modal.style.display ='none'
}



let big = document.querySelector('.big')

function reload(apend) {
    big.innerHTML = ''
    for (let item of apend) {
        let elem = document.createElement('div')
        let h1 = document.createElement('h1')
        let h3 = document.createElement('h3')

        elem.classList.add('elem')
        h1.classList.add('h1')
        h3.classList.add('h3')

        h1.innerHTML = item.name
        h3.innerHTML = `${item.price} $`
        big.append(elem)
        elem.append(h1, h3)

    }
}

form.onsubmit = (e) => {
    e.preventDefault()

    if (h6.value.length !== 0 && h5.value.length !== 0) {
        let filtered = products.filter((product) => {
            if (product.price > +h6.value && product.price < +h5.value) {
                return product
            }
        })
        reload(filtered)
    }

}

form_two.onsubmit = (e) => {
    e.preventDefault()

    let todo = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        todo[key] = value
    })
    products.push(todo)
    reload(products)
}
reload(products)