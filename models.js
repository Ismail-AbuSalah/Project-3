const users = [
  {
    email: 'admin@gmail.com',
    password: '$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C',
    role_id: 1,
  },
  {
    email: 'user2@gmail.com',
    // 123456
    password: '$2b$10$6tjuguXB.uejxRZz6syZ1O.aEK8EKf9kA/cnvZJ6mOs6cl0bSrnJ.',
    role_id: 2,
  },
  {
    email: 'user3@gmail.com',
    // 123456
    password: '$2b$10$6tjuguXB.uejxRZz6syZ1O.aEK8EKf9kA/cnvZJ6mOs6cl0bSrnJ.',
    role_id: 2,
  },
];

const roles = [
  {
    id: 1,
    type: 'admin',
    permissions: ['r', 'w', 'u', 'd'],
  },
  {
    id: 2,
    type: 'user',
    permissions: ['r', 'w'],
  },
];

module.exports = {
  users,
  roles,
};
