const ROMANIAN_CITY_CONTEXTS = [
    {
        city: 'București',
        lat: 44.4268,
        lng: 26.1025,
        landmark: 'sistemul energetic de rezervă al Palatului Parlamentului',
        needsVerb: 'are',
        introMission: 'Avem o pană de curent chiar în sistemul energetic de rezervă al Palatului Parlamentului.'
    },
    {
        city: 'Cluj-Napoca',
        lat: 46.7712,
        lng: 23.6236,
        landmark: 'serverele critice de la UBB',
        needsVerb: 'au',
        introMission: 'Serverele critice de la UBB au început să piardă semnal logic.'
    },
    {
        city: 'Timișoara',
        lat: 45.7489,
        lng: 21.2087,
        landmark: 'rețeaua de control din Piața Unirii',
        needsVerb: 'are',
        introMission: 'Rețeaua de control din Piața Unirii are nevoie de o recalibrare urgentă.'
    },
    {
        city: 'Iași',
        lat: 47.1585,
        lng: 27.6014,
        landmark: 'circuitele de siguranță ale Palatului Culturii',
        needsVerb: 'au',
        introMission: 'Circuitele de siguranță ale Palatului Culturii raportează erori de logică.'
    },
    {
        city: 'Constanța',
        lat: 44.1598,
        lng: 28.6348,
        landmark: 'sistemele de navigație din Portul Constanța',
        needsVerb: 'au',
        introMission: 'Sistemele de navigație din Portul Constanța au nevoie de stabilizare.'
    },
    {
        city: 'Brașov',
        lat: 45.6427,
        lng: 25.5887,
        landmark: 'panourile de control de lângă Biserica Neagră',
        needsVerb: 'au',
        introMission: 'Panourile de control de lângă Biserica Neagră s-au blocat într-o stare logică instabilă.'
    },
    {
        city: 'Sibiu',
        lat: 45.7983,
        lng: 24.1256,
        landmark: 'senzorii digitali din Piața Mare',
        needsVerb: 'au',
        introMission: 'Senzorii digitali din Piața Mare transmit semnale contradictorii.'
    },
    {
        city: 'Oradea',
        lat: 47.0465,
        lng: 21.9189,
        landmark: 'sistemul de iluminare inteligentă din Cetatea Oradea',
        needsVerb: 'are',
        introMission: 'Sistemul de iluminare inteligentă din Cetatea Oradea are nevoie de o intervenție logică.'
    },
    {
        city: 'Craiova',
        lat: 44.3302,
        lng: 23.7949,
        landmark: 'nodul logic al Parcului Nicolae Romanescu',
        needsVerb: 'are',
        introMission: 'Nodul logic al Parcului Nicolae Romanescu a intrat în modul de avarie.'
    },
    {
        city: 'Galați',
        lat: 45.4353,
        lng: 28.0079,
        landmark: 'controlerele industriale de pe faleza Dunării',
        needsVerb: 'au',
        introMission: 'Controlerele industriale de pe faleza Dunării au nevoie de o reconfigurare rapidă.'
    },
    {
        city: 'Ploiești',
        lat: 44.9367,
        lng: 26.0129,
        landmark: 'rețeaua de senzori a rafinăriei centrale',
        needsVerb: 'are',
        introMission: 'Rețeaua de senzori a rafinăriei centrale raportează un scurtcircuit logic.'
    },
    {
        city: 'Arad',
        lat: 46.1866,
        lng: 21.3123,
        landmark: 'magistrala logică din zona Palatului Administrativ',
        needsVerb: 'are',
        introMission: 'Magistrala logică din zona Palatului Administrativ trebuie repornită.'
    },
    {
        city: 'Târgu Mureș',
        lat: 46.5425,
        lng: 24.5575,
        landmark: 'sistemele digitale din Cetatea Medievală',
        needsVerb: 'au',
        introMission: 'Sistemele digitale din Cetatea Medievală au intrat în stare de eroare.'
    },
    {
        city: 'Baia Mare',
        lat: 47.6567,
        lng: 23.5849,
        landmark: 'releele de control ale Turnului Ștefan',
        needsVerb: 'au',
        introMission: 'Releele de control ale Turnului Ștefan au nevoie de reactivare.'
    },
    {
        city: 'Suceava',
        lat: 47.6635,
        lng: 26.2732,
        landmark: 'sistemele de apărare ale Cetății de Scaun',
        needsVerb: 'au',
        introMission: 'Sistemele de apărare ale Cetății de Scaun au pierdut sincronizarea logică.'
    },
    {
        city: 'Bacău',
        lat: 46.5670,
        lng: 26.9146,
        landmark: 'nodul de comunicații al centrului tehnologic local',
        needsVerb: 'are',
        introMission: 'Nodul de comunicații al centrului tehnologic local are nevoie de depanare.'
    }
];

export const DEFAULT_LOCATION_CONTEXT = {
    status: 'unavailable',
    city: null,
    landmark: null,
    needsVerb: 'are',
    introMission: 'Avem o mică pană de curent în sistemele principale ale stației LogicGate.'
};

const toRadians = (degrees) => degrees * Math.PI / 180;

const getDistanceKm = (lat1, lng1, lat2, lng2) => {
    const earthRadiusKm = 6371;

    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusKm * c;
};

const findNearestCityContext = (latitude, longitude) => {
    const nearestCity = ROMANIAN_CITY_CONTEXTS
        .map((cityContext) => ({
            ...cityContext,
            distanceKm: getDistanceKm(latitude, longitude, cityContext.lat, cityContext.lng)
        }))
        .sort((a, b) => a.distanceKm - b.distanceKm)[0];

    if (!nearestCity || nearestCity.distanceKm > 70) {
        return DEFAULT_LOCATION_CONTEXT;
    }

    return {
        status: 'matched',
        city: nearestCity.city,
        landmark: nearestCity.landmark,
        needsVerb: nearestCity.needsVerb,
        introMission: nearestCity.introMission,
        distanceKm: Math.round(nearestCity.distanceKm)
    };
};

export const getLocationContextFromBrowser = () => {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve({
                ...DEFAULT_LOCATION_CONTEXT,
                status: 'unsupported'
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                resolve(findNearestCityContext(latitude, longitude));
            },
            () => {
                resolve({
                    ...DEFAULT_LOCATION_CONTEXT,
                    status: 'denied'
                });
            },
            {
                enableHighAccuracy: false,
                timeout: 8000,
                maximumAge: 1000 * 60 * 60 * 24
            }
        );
    });
};