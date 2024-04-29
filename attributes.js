const attributes = {

    types: ['Fire', 'Explosive', 'Electric', 'Blood', 'Atrophy'],
    
    fireAttacks:      {'Fire Tornado': 8, 'Flame Breath': 10, 'Combustion': 20, 'Flame Tongue': 12,     'Third-Degree': 9},
    
    explosiveAttacks: {'RPG': 15,         'Airstrike': 20,    'Grenade': 7,     'Laser Strike': 30,     'Precision Strike': 10,   'Mortar': 8},
    
    electricAttacks:  {'Shock': 9,        'Lightning': 15,    'Maelstrom': 25,  'Arc Bomb': 30},
    
    bloodAttacks:     {'Sinister Bite': 15, 'False Swipe': 10,    'Backstab': 20,     'Cold Shank': 5,  'Deathly Stare': 8},
    
    atrophyAttacks:   {'Poison Dart': 7,    'Touch of Death': 17, 'Poison Slash': 13, 'Ashes to Ashes': 25,  'Zulu Spear': 16},
    
    itemsTierOne:   {'Herbs': [25, 'Health'],              'Passionfruit': [25, 'AtkPwr'],  'Bark Shield': [25, 'Def'],       'Herbal Salve': null, 'Quickness Potion': null, 'Smoke Bomb': null},
    itemsTierTwo:   {'Tonic': [50, 'Health'],              'Thunder Punch': [50, 'AtkPwr'],   'Steel Shield': [50, 'Def'],     'Holy Water': null,   'Alchemist Vial': null,   'Shriveled Head': 'Boss health cut by 1/4'},
    itemsTierThree: {'Suluku\'s Blessing': [75, 'Health'], 'War Machine': [75, 'AtkPwr'], 'Immovable Object': [75, 'Def'], 'Panacea': null,      'Ancestral Boon': null,   'Death': 'Boss health cut by 1/3'}
    
    }

module.exports = {
    attributes
}