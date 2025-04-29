export const DEV_DATA_NAV = [
    {
        id: 'dashboard',
        route: 'dashboard',
        icon: 'fa-solid fa-chart-line',
        text: 'Tableau de bord',
        isForHeader: true,
    },
    {
        id: 'operations',
        route: 'operations',
        icon: 'fa-solid fa-arrows-turn-to-dots',
        text: 'Opérations',
        isForHeader: true,
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
        icon: 'fa-solid fa-arrows-turn-to-dots',
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
        icon: 'fa-solid fa-desktop',
        text: 'Documentation',
    },
    {
        id: 'historique',
        route: 'historique',
        icon: 'fa-solid fa-clock-rotate-left',
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
        icon: 'fa-solid fa-people-line',
        text: 'Assemblée générale',
    },
]