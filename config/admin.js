module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ca3f8e67b8e134158ce2ddf59da4e24'),
  },
});
