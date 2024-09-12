// src/collections/Users.ts

import type { CollectionConfig } from 'payload';
import { isAdmin, isAdminFieldLevel, isAdminOrSelf } from '../access/access';

const isDevEnvironment = process.env.NODE_ENV === 'development';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // Allow authentication based on email and password
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // allow creation of users by admins by default
    create: isAdmin,
    // Allow read and update access for admins or self in both environments
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    // Only admins can delete in both environments
    delete: isAdmin,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      defaultValue: isDevEnvironment ? ['admin'] : ['editor'], // Default to admin only in dev
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
    },
    // Add any other necessary fields here...
  ],
};

export default Users;
