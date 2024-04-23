import { useLocation } from '@remix-run/react';

export const usePath = () => {
  const location = useLocation();

  const path =
    location.pathname === '/dashboard/chat' ? '/dashboard/overview' : '/dashboard';

  return path;
};
