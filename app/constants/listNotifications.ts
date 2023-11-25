interface IListNotifications {
    query: string,
    status: 'success' | 'error' | 'warning',
    keyText: string,
    isRouter: boolean,
    to?: string,
}

export const MainPageNotication :IListNotifications[] = [
    {
        query: 'register',
        status: 'success',
        keyText: 'reg_true',
        isRouter: true,
        to: '/'
    },
    {
        query: 'non-token',
        status: 'error',
        keyText: 'non-token',
        isRouter: true,
        to: '/'
    },
    {
        query: 'non-login',
        status: 'error',
        keyText: 'non-login',
        isRouter: true,
        to: '/'
    },
    {
        query: 'logout',
        status: 'success',
        keyText: 'logout',
        isRouter: true,
        to: '/'
    }
]