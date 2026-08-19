const mountains = [
    {
        id: 1,
        range: "Рила",
        peak: "Мусала",
        height: 2925,
        completed: true,
        date: "12.08.2026",
        coordinates: {
            lat: 42.179304475234744, 
            lng: 23.58518540891887
        },
        photos: [
            "https://photos.example.com/musala"
        ]
    },
    {
        id: 2,
        range: "Пирин",
        peak: "Вихрен",
        height: 2914,
        completed: false,
        coordinates: {
            lat: 41.76723, 
            lng: 23.39888,
        },
        photos: []
    },
    {
        id: 3,
        range: "Стара планина",
        peak: "Ботев",
        height: 2376,
        completed: false,
        coordinates: {
            lat: 42.71754, 
            lng: 24.91655,
        },
        photos: []
    },
    {
        id: 4,
        range: "Витоша",
        peak: "Черни връх",
        height: 2290,
        completed: true,
        date: "05.07.2026",
        coordinates: {
            lat: 42.56374,
            lng: 23.27832
        },
        photos: []
    },
    {
        id: 5,
        range: "Осоговска",
        peak: "Руен",
        height: 2251,
        completed: false,
        coordinates: {
            lat: 42.15790521836217, 
            lng: 22.51613737059788
        },
        photos: []
    },
    {
        id: 6,
        range: "Славянка",
        peak: "Гоцев връх",
        height: 2212,
        completed: false,
        coordinates: {
            lat: 41.37706040231576,  
            lng: 23.620649285946588,
        },
        photos: []
    },
    {
        id: 7,
        range: "Родопи",
        peak: "Голям Перелик",
        height: 2191,
        completed: false,
        coordinates: {
        lat: 41.606047185299126, 
        lng: 24.57430822003771
    },
        photos: []
    },
    {
        id: 8,
        range: "Беласица",
        peak: "Радомир",
        height: 2029,
        completed: false,
        coordinates: {
            lat: 41.32114, 
            lng: 23.12053,
        },
        photos: []
    },
    {
        id: 9,
        range: "Влахина",
        peak: "Кадийца (Огреяк)",
        height: 1924,
        completed: false,
        coordinates: {
            lat: 41.78937086714135, 
            lng: 22.96487561518686,
        },
        photos: []
    },
    {
        id: 10,
        range: "Малашевска",
        peak: "Ильов връх",
        height: 1803,
        completed: false,
        coordinates: {
            lat: 41.7691, 
            lng: 23.00838,
        },
        photos: []
    },
    {
        id: 11,
        range: "Кървав камък",
        peak: "Било",
        height: 1737,
        completed: false,
        coordinates: {
            lat: 42.68531, 
            lng: 22.47382,
        },
        photos: []
    },
    {
        id: 12,
        range: "Милевска",
        peak: "Милевец",
        height: 1733,
        completed: false,
        coordinates: {
            lat: 42.5653, 
            lng: 22.43922,
        },
        photos: []
    },
    {
        id: 13,
        range: "Руй",
        peak: "Руй",
        height: 1706,
        completed: false,
        coordinates: {
            lat: 42.86334, 
            lng: 22.57635,
        },
        photos: []
    },
    {
        id: 14,
        range: "Огражден",
        peak: "Билска чука",
        height: 1644,
        completed: false,
        coordinates: {
            lat: 41.5089, 
            lng: 23.00685,
        },
        photos: []
    },
    {
        id: 15,
        range: "Средна гора",
        peak: "Богдан",
        height: 1604,
        completed: false,
        coordinates: {
            lat: 42.60734, 
            lng: 24.46137,
        },
        photos: []
    },
    {
        id: 16,
        range: "Лисец",
        peak: "Връшник",
        height: 1500,
        completed: false,
        coordinates: {
            lat: 42.29034, 
            lng: 22.57005
        },
        photos: []
    },
    {
        id: 17,
        range: "Чудинска",
        peak: "Арамлия",
        height: 1497,
        completed: false,
        coordinates: {
            lat: 42.36777, 
            lng: 22.46504,
        },
        photos: []
    },
    {
        id: 18,
        range: "Конявска",
        peak: "Виден",
        height: 1487,
        completed: false,
        coordinates: {
            lat: 42.3441, 
            lng: 22.83938,
        },
        photos: []
    },
    {
        id: 19,
        range: "Ерулска",
        peak: "Големи връх",
        height: 1481,
        completed: true,
        date: "02.08.2026",
        coordinates: {
            lat: 42.69946, 
            lng: 22.65696,
        },
        photos: []
    },
    {
        id: 20,
        range: "Верила",
        peak: "Голям Дебелец",
        height: 1415,
        completed: false,
        coordinates: {
            lat: 42.39067, 
            lng: 23.26214,
        },
        photos: []
    },
    {
        id: 21,
        range: "Любаш",
        peak: "Любаш",
        height: 1398,
        completed: true,
        date: "25.06.2026",
        coordinates: {
            lat: 42.75615, 
            lng: 22.75356,
        },
        photos: []
    },
    {
        id: 22,
        range: "Парамунска",
        peak: "Стража",
        height: 1389,
        completed: true,
        date: "19.08.2026",
        coordinates: {
            lat: 42.77728, 
            lng: 22.72795,
        },
        photos: []
    },
    {
        id: 23,
        range: "Кобилска",
        peak: "Бели камък",
        height: 1362,
        completed: false,
        coordinates: {
            lat: 42.51414, 
            lng: 22.60596,
        },
        photos: []
    },
    {
        id: 24,
        range: "Плана",
        peak: "Манастирище",
        height: 1338,
        completed: true,
        date: "28.06.2026",
        coordinates: {
            lat: 42.51275, 
            lng: 23.40794,
        },
        photos: []
    },
    {
        id: 25,
        range: "Еловишка",
        peak: "Плоча",
        height: 1329,
        completed: false,
        coordinates: {
            lat: 42.70958, 
            lng: 22.56169,
        },
        photos: []
    },
    {
        id: 26,
        range: "Земенска",
        peak: "Тичак",
        height: 1295,
        completed: false,
        coordinates: {
            lat: 42.51246, 
            lng: 22.68864,
        },
        photos: []
    },
    {
        id: 27,
        range: "Люлин",
        peak: "Дупевица",
        height: 1256,
        completed: true,
        date: "31.05.2026",
        coordinates: {
            lat: 42.65234, 
            lng: 23.17149,
        },
        photos: []
    },
    {
        id: 28,
        range: "Ездемирска",
        peak: "Големи връх",
        height: 1219,
        completed: false,
        coordinates: {
            lat: 42.81157, 
            lng: 22.70148,
        },
        photos: []
    },
    {
        id: 29,
        range: "Стъргач",
        peak: "Асанов връх",
        height: 1218,
        completed: false,
        coordinates: {
            lat: 41.40276,  
            lng: 23.75881
        },
        photos: []
    },
    {
        id: 30,
        range: "Пенкьовска",
        peak: "Конски връх",
        height: 1187,
        completed: false,
        coordinates: {
            lat: 42.5505848015625, 
            lng: 22.65472309806826,
        },
        photos: []
    },
    {
        id: 31,
        range: "Завалска",
        peak: "Китка",
        height: 1181,
        completed: false,
        coordinates: {
            lat: 42.83002, 
            lng: 22.78305
        },
        photos: []
    },
    {
        id: 32,
        range: "Рудина",
        peak: "Сирищнишка Рудина",
        height: 1172,
        completed: false,
        coordinates: {
            lat: 42.58601, 
            lng: 22.7769,
        },
        photos: []
    },
    {
        id: 33,
        range: "Голо бърдо",
        peak: "Ветрушка",
        height: 1158,
        completed: false,
        coordinates: {
            lat: 42.56927, 
            lng: 23.00876
        },
        photos: []
    },
    {
        id: 34,
        range: "Гребен",
        peak: "Голеш",
        height: 1157,
        completed: false,
        coordinates: {
            lat: 42.87871, 
            lng: 22.69567,
        },
        photos: []
    },
    {
        id: 35,
        range: "Черна гора",
        peak: "Тумба",
        height: 1129,
        completed: false,
        coordinates: {
            lat: 42.62509442281282, 
            lng: 22.853137857733287
        },
        photos: []
    },
    {
        id: 36,
        range: "Боздаг",
        peak: "Чиплакбаир",
        height: 1091,
        completed: false,
        coordinates: {
            lat: 41.43958257439421, 
            lng: 23.968310497488382,
        },
        photos: []
    },
    {
        id: 37,
        range: "Вискяр",
        peak: "Мечи камък",
        height: 1077,
        completed: true,
        date: "14.06.2026",
        coordinates: {
            lat: 42.78819100746272,  
            lng: 22.91376207775317,
        },
        photos: []
    },
    {
        id: 38,
        range: "Сакар",
        peak: "Вишеград",
        height: 856,
        completed: false,
        coordinates: {
            lat: 41.99205, 
            lng: 26.32728,
        },
        photos: []
    },
    {
        id: 39,
        range: "Странджа",
        peak: "Голямо Градище",
        height: 710,
        completed: false,
        coordinates: {
            lat: 41.96538545330762, 
            lng: 27.489674683899896,
        },
        photos: []
    }
];

export { mountains };