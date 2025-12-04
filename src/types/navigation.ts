export interface NavItem {
  name: string;
  icon: string;
  badge?: string | number;
  isActive?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}
