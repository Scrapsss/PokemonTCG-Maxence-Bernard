let DarkMode = document.querySelector('#DarkMode_Logo')

let Collection = document.querySelector('#Collection')
let Echange = document.querySelector('#Echange')

DarkMode.addEventListener('click', function() {
    document.body.classList.toggle('DarkMode')
})

let Button_collection = document.querySelector('#Button_Collection')
Button_collection.addEventListener('click', function() {

    Collection.classList.replace('Invisible', 'Visible')
    Echange.classList.replace('Visible', 'Invisible')

})

let Button_echange = document.querySelector('#Button_Echange')
Button_echange.addEventListener('click', function() {

    Collection.classList.replace('Visible', 'Invisible')
    Echange.classList.replace('Invisible', 'Visible')

})



const li = document.querySelectorAll('.tab')
const section = document.querySelectorAll('.content')


li.forEach(li => {
    li.addEventListener('click', function() {
        
        const li_list = document.querySelectorAll('.tab')
        li_list.forEach(li => {
            li.classList.remove('tab-active')
        });

        const section_list = document.querySelectorAll('.content')
        section_list.forEach(section => {
            section.classList.remove('active')
        });
        console.log('yes')

        this.classList.add('tab-active')

        if ( this.classList.contains('tab-Collection') )
        {
            document.querySelector('.Collection').classList.add('active')
        }
        else if ( this.classList.contains('tab-Ouverture') )
        {
            document.querySelector('.Ouverture').classList.add('active')
        }
        else if ( this.classList.contains('tab-Echange') )
        {
            document.querySelector('.Echange').classList.add('active')
        }

    })
});
