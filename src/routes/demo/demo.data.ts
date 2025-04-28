export const DEV_DATA_NAV = [
    {
        id: 'dashboard',
        route: 'dashboard',
        icon: '',
        text: 'Accueil',
    },
    {
        id: 'operations',
        route: 'dashboard',
        icon: '',
        text: 'Opérations',
        sublinks: [
            {
                id: 'acheter',
                route: 'acheter',
                icon: '',
                text: 'Acheter',
            },
            {
                id: 'vendre',
                route: 'vendre',
                icon: '',
                text: 'Vendre',
            }
        ]
    },
    {
        id: 'operations-titres',
        route: 'operations-titres',
        icon: '',
        text: 'Opérations sur titres',
        sublinks: [
            {
                id: 'opa',
                route: 'opa',
                icon: '',
                text: 'Opération sur titres',
            },
            {
                id: 'ak',
                route: 'ak',
                icon: '',
                text: 'Augmentation de capital',
            }
        ]
    },
    {
        id: 'documentation',
        route: 'documentation',
        icon: '',
        text: 'Documentation',
    },
    {
        id: 'historique',
        route: 'historique',
        icon: '',
        text: 'Historique des opérations',
        sublinks: [
            {
                id: 'historique-operations',
                route: 'historique-operations',
                icon: '',
                text: 'Historique des opérations',
            },
            {
                id: 'historique-autres',
                route: 'historique-autres',
                icon: '',
                text: 'Autres historiques',
            },
        ]
    },
    {
        id: 'ag',
        route: 'ag',
        icon: '',
        text: 'Assemblée générale',
    },
]