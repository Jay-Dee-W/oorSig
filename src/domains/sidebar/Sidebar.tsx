import { x } from '@xstyled/emotion';

import { SidebarNavigation } from './SidebarNavigation';
import { SidebarBottom } from './SiderbarBottom';

export const Sidebar: React.FC = () => {

  return (
    <x.div bg="#2C2F30" w="17.82125rem" color="#ffffff">
      <SidebarNavigation  title='test'></SidebarNavigation>
      <SidebarBottom ></SidebarBottom>
    </x.div>
  );
}
