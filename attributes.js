const attributes = {

    types: ['Fire', 'Explosive', 'Electric', 'Blood', 'Atrophy'],
    
    fireAttacks:      {
                       'Fire Tornado': [8,  '"My power is endless! Purifying all in the wake of my flame. Be caught in the fury of my hate! The cosmos shall know my wrath!"', '"Foolish whelp!"'], 
                       'Flame Breath': [10, '"Hero, you\'ve come here to meet your end. I\'ve been watching you. Your deeds are impressive; but you have never faced a foe as challenging as I."', '"You don\'t stand a chance, weakling!"'], 
                       'Combustion':   [20, '"BURN! BURN! BUUUUUUUURN!"', '"You DARE enter my lair! You will never leave this place alive. Your corpse will be displayd to your people. Then...I shall murder them all!"'], 
                       'Flame Tongue': [12, '"How foolish of you to come here, mortal! How convenient..."', '"What were trying to achieve, coming here?"'],     
                       'Third-Degree': [9,  '"May your flesh burn slowly...painfully...the way I will destroy your people for your trespass!"', '"You have grossly underestimated me!"']
                        },
    
    explosiveAttacks: {'RPG': [15,'Sweet, sweet, Destruction!'],         'Airstrike': [20, 'Spreading Democracy!'],    'Grenade': [7, 'Here comes the BOOM!'],     'Laser Strike': [30, 'Zip, Zap, Zow, BITCH!'],    'Precision Strike': [10, 'Wait for it..............BOOOOM!'],   'Mortar': [8, 'Hail Mary!']},
    
    electricAttacks:  {'Shock': 9,        'Lightning': 15,    'Maelstrom': 25,  'Arc Bomb': 30},
    
    bloodAttacks:     {'Sinister Bite': [15, 'phrase'], 
                       'False Swipe': [10, 'phrase'],    
                       'Backstab': [20, 'phrase'],     
                       'Cold Shank': [5, 'phrase'],  
                       'Deathly Stare': [8, 'phrase']},
    
    atrophyAttacks:   {'Poison Dart': [7, 'Die slowly, painfully, devil!'],    
                       'Touch of Death': [17, 'Decay, comsume you!'], 
                       'Transition': [0, 'Protect me, ancestors!'], 
                       'Ashes to Ashes': [25, 'Dust to Dust.'],  
                       'Zulu Spear': [16, 'I never miss.']
                        },
    
    itemsTierOne:   {'Herbs': [25, 'Health'],              'Passionfruit': [25, 'AtkPwr'],      'Bark Shield': [25, 'Def'],           'Herbal Salve': null,    'Quickness Potion': null,                     'Smoke Bomb': null},
    itemsTierTwo:   {'Tonic': [50, 'Health'],              'Thunder Punch': [50, 'AtkPwr'],     'Steel Shield': [50, 'Def'],          'Holy Water': null,      'Alchemist Vial': null,                       'Shriveled Head': 'Boss health cut by 1/4'},
    itemsTierThree: {'Suluku\'s Blessing': [75, 'Health'], 'War Machine': [75, 'AtkPwr'],       'Immovable Object': [75, 'Def'],      'Panacea': null,         'Ancestral Boon': 'Doubles Def or Def +50',   'Death': 'Boss health cut by 1/3'}
    
    }

module.exports = {
    attributes
}
