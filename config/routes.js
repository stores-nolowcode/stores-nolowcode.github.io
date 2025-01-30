const routes = [
    {
        path: "/",
        name: "home",
        component: "/pages/home/index.js",
        layout: "default",
        meta: {
            public: true,
            authenticated: null,
        }
    },
    {
        path: "/login",
        name: "login",
        component: "/pages/login/index.js",
        layout: "blank",
        meta: {
            public: true,
            authenticated: false,
        }
    },
    {
        path: "/logout",
        name: "logout",
        component: "/pages/logout/index.js",
        layout: "blank",
        meta: {
            public: true,
            authenticated: true,
        }
    },
    {
        path: "/register",
        name: "register",
        component: "/pages/register/index.js",
        layout: "blank",
        meta: {
            public: true,
            authenticated: false,
        }
    },
    {
        path: "/about",
        name: "about",
        component: "/pages/about/index.js",
        layout: "default",
        meta: {
            public: true,
            authenticated: null,
        }
    },
    {
        path: "/contact",
        name: "contact",
        component: "/pages/contact/index.js",
        layout: "blank",
        meta: {
            public: true,
            authenticated: null,
        }
    },
    {
        path: "/pages/settings/",
        name: "settings",
        component: "settings",
        layout: "dashboards",
        meta: {
            public: false,
            authenticated: true,
            roles: [1, 2]
        },
        children: [
            {
                path: "profile",
                name: "profile",
                component: "/pages/settings/profile/index.js",
                layout: "dashboards",
                meta: {
                    public: false,
                    authenticated: true,
                    roles: [1, 2]
                }
            },
        ]
    },
]

export default routes;