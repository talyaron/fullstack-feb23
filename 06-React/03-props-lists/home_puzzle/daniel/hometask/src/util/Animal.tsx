// create a animal card component, animal should have type (cat, dog etc), name and age, color the background of the component by the type of the animal (cat = purple, dog = blue, etc);

const animals = [
    {
        type: 'cat',
        name: 'Ketie',
        age: 8,
        style:{
            backgroundColor: 'pink',
            borderRadius: '12px'
        }
    },
    {
        type: 'dog',
        name: 'Rexi',
        age: 6,
        style: {
            backgroundColor: 'black',
            borderRadius: '12px'
        }
    },
    {
        type: 'rabbit',
        name: 'Lili',
        age: 4,
        style: {
            backgroundColor: '#afaf9e',
            borderRadius: '12px'
        }
    }

]

export default animals