export const DEV_DATA_NAV = [
    {
        id: 'dashboard',
        route: 'dashboard',
        icon: '',
        label: 'Accueil',
    },
    {
        id: 'operations',
        route: 'dashboard',
        icon: '',
        label: 'Opérations',
        sublinks: [
            {
                id: 'acheter',
                route: 'acheter',
                icon: '',
                label: 'Acheter',
            },
            {
                id: 'vendre',
                route: 'vendre',
                icon: '',
                label: 'Vendre',
            }
        ]
    },
    {
        id: 'operations-titres',
        route: 'operations-titres',
        icon: '',
        label: 'Opérations sur titres',
        sublinks: [
            {
                id: 'opa',
                route: 'opa',
                icon: '',
                label: 'Opération sur titres',
            },
            {
                id: 'ak',
                route: 'ak',
                icon: '',
                label: 'Augmentation de capital',
            }
        ]
    },
    {
        id: 'documentation',
        route: 'documentation',
        icon: '',
        label: 'Documentation',
    },
    {
        id: 'historique',
        route: 'historique',
        icon: '',
        label: 'Historique des opérations',
        sublinks: [
            {
                id: 'historique-operations',
                route: 'historique-operations',
                icon: '',
                label: 'Historique des opérations',
            },
            {
                id: 'historique-autres',
                route: 'historique-autres',
                icon: '',
                label: 'Autres historiques',
            },
        ]
    },
    {
        id: 'ag',
        route: 'ag',
        icon: '',
        label: 'Assemblée générale',
    },
]