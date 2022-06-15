module.exports = {
  name: 'salesplans',
  port: 3025,
  exposes: {
    './routes': './src/routes.tsx',
  },
  routes: {
    url: 'http://localhost:3025/remoteEntry.js',
    scope: 'salesplans',
    module: './routes',
  },
  menus: [
    {
      text: 'Sales Plans Settings',
      to: '/settings/sales-plans',
      image: '/images/icons/erxes-05.svg',
      location: 'settings',
      scope: 'salesplans',
      action: '',
      permissions: [],
    },
  ],
};
