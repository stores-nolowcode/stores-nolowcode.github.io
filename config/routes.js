const routes = [
    {
        path: "/",
        name: "home",
        component: "home",
        meta: {
            public: true,
            authenticated: null,
        }
    },
    {
        path: "/pages/settings/",
        name: "settings",
        component: "settings",
        meta: {
            public: false,
            authenticated: true,
            roles: [1, 2]
        }
    }
]

export default routes;