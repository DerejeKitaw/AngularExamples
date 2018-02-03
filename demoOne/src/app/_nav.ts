export const navigation = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW'
      // }
    },
    {
      title: true,
      name: 'Eqipments'
    },
    {
      name: 'Add Equipmaent',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Inverter',
          url: '/components/buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Modules',
          url: '/components/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Service Type',
          url: '/components/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Breaker Size',
          url: '/components/forms',
          icon: 'icon-puzzle'
        }
      ]
    },

    
    {
      divider: true
    },
    // {
    //   title: true,
    //   name: 'Projects',
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/pages/login',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Register',
    //       url: '/pages/register',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/pages/404',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/pages/500',
    //       icon: 'icon-star'
    //     }
    //   ]
    // },
    {
      name: 'Voltage Drop',
      url: 'http://dkitaw.com',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'PV Design',
      url: 'http://dkitaw.com',
      icon: 'icon-layers',
      variant: 'danger'
    }
  ];
