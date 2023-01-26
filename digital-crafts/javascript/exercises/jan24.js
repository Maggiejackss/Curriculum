const shoppingList = ['
Eggs', 'Bacon', 'Lettuce', 'Rice Noodles', 'Tomatoes'];
console.log(shoppingList);

//name(string), cost(number), discretionary(boolean)
const budget = [
    {name: 'Eggs',
    cost: 2.17,
    isDiscretionary: false
},

    {name: 'Bacon',
    cost: 3.79,
    isDiscretionary: false
},

    {name: 'Lettuce',
    cost: .79,
    isDiscretionary: true
},
    {name: 'Rice Noodles',
    cost: 4.95,
    isDiscretionary: true
},
    {name: 'Tomatoes',
    cost: .45,
    isDiscretionary: false}
];


const friends = [
    {firstName: 'Mason',
    lastName: 'Smith',
    isOver25: false,
    hobbies: ['coding', 'video games', 'bartending']
    },

    {firstName: 'Alex',
    lastName: 'Benton',
    isOver25: false,
    hobbies: ['video games', 'trying new food', 'playing dnd']
    },

    {firstName: 'Sydney',
    lastName: 'Branson',
    isOver25: false, 
    hobbies: ['hiking', 'machining', 'cooking']
    }
];

console.log(friends[0].isOver25);
console.log(friends[2].hobbies);
console.log(friends[1].firstName);




const rubiksCube = 
   {sideColors: ['red', 'blue', 'yellow', 'green', 'white', 'orange'],
    sideNumbers: 6,
    isSolved: false,
    cubeType: '3x3x3',
    isBroken: false
};

console.log(rubiksCube.sideColors);
console.log(rubiksCube.cubeType);


const musicArtists = [
    {name: 'Bad Bunny',
    genre: 'Latin Urbano',
    grossSales: 435000000,
    grammyWon: true,
    yearBorn: 1994,
    charities: [redCross: false, UNICEF: true, DWB: false]
},

    {name: 'Taylor Swift',
    genre: 'Pop',
    grossSales: '185000000',
    grammyWon: true,
    yearBorn: 1989,
    charities: [redCross: true, UNICEF: true, DWB: false]
},

    {name: 'Drake',
    genre: 'Pop/Rap',
    grossSales: 45000000,
    grammyWon: true,
    yearBorn: 1986,
    charities: [redCross: true, UNICEF: true, DWB: false]
},
  
    {name: 'The Weekend',
    genre: 'Pop',
    grossSales: 92000000,
    grammyWon: true,
    yearBorn: 1990,
    charities: [redCross: true, UNICEF: true, DWB: false]
},
    {name: 'BTS',
    genre: 'K-Pop',
    grossSales: 507000000,
    grammyWon: true,
    yearBorn: 2013,
    charities: [redCross: false, UNICEF: true, DWB: true]
}
];