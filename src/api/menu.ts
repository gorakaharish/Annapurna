import useSWR, { mutate } from 'swr';
import { useMemo } from 'react';

// Project-imports
import { fetcher } from 'utils/axios';

// types
import { MenuProps, NavItemType } from 'types/menu';

const initialState: MenuProps = {
  isDashboardDrawerOpened: false,
  isComponentDrawerOpened: true
};

export const endpoints = {
  key: 'api/menu',
  master: 'master',
  dashboard: '/dashboard' // server URL
};

export function useGetMenu() {
  let { data, isLoading, error, isValidating } = useSWR(endpoints.key + endpoints.dashboard, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  console.log("chechi: ", data)
  data = {
    "dashboard": {
        "id": "group-dashboard",
        "title": "Features",
        "type": "group",
        "icon": "dashboard",
        "children": [
            {
                "id": "dashboard",
                "title": "User Management",
                "type": "collapse",
                "icon": "dashboard",
                "children": [
                    {
                        "id": "listUsers",
                        "title": "List Users",
                        "type": "item",
                        "url": "/dashboard/listUsers",
                        "breadcrumbs": false
                    },
                    {
                        "id": "blockedStaff",
                        "title": "Blocked Staff",
                        "type": "item",
                        "url": "/dashboard/blockedStaff",
                        "breadcrumbs": false
                    },
                    {
                      "id": "suspendedStaff",
                      "title": "Suspended Staff",
                      "type": "item",
                      "url": "/dashboard/suspendedStaff",
                      "breadcrumbs": false
                  },
                  {
                      "id": "createUser",
                      "title": "Create User",
                      "type": "item",
                      "url": "/dashboard/createUser",
                      "breadcrumbs": false
                  }
                ]
            }
        ]
    }
}
  const memoizedValue = useMemo(
    () => ({
      menu: data?.dashboard as NavItemType,
      menuLoading: isLoading,
      menuError: error,
      menuValidating: isValidating,
      menuEmpty: !isLoading && !data?.length
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetMenuMaster() {
  const { data, isLoading } = useSWR(endpoints.key + endpoints.master, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  console.log("data: ", data)
  const memoizedValue = useMemo(
    () => ({
      menuMaster: data as MenuProps,
      menuMasterLoading: isLoading
    }),
    [data, isLoading]
  );

  return memoizedValue;
}

export function handlerComponentDrawer(isComponentDrawerOpened: boolean) {
  // to update local state based on key

  mutate(
    endpoints.key + endpoints.master,
    (currentMenuMaster: any) => {
      return { ...currentMenuMaster, isComponentDrawerOpened };
    },
    false
  );
}

export function handlerDrawerOpen(isDashboardDrawerOpened: boolean) {
  // to update local state based on key

  mutate(
    endpoints.key + endpoints.master,
    (currentMenuMaster: any) => {
      return { ...currentMenuMaster, isDashboardDrawerOpened };
    },
    false
  );
}
