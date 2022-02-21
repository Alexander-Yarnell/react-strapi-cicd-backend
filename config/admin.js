module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4df447119afc71f2ffe5a4d27f52831c'),
  },
});
