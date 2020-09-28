// Menu
export interface Menu {
    id?: number;
    path?: string;
    categoryId?: number;
    name?: string;
    type?: string;
    megaMenu?: boolean;
    megaMenuType?: string; // small, medium, large
    image?: string;
    children?: Menu[];
}

export const MENUITEMS: Menu[] = [
    {
        name: 'shop', type: 'sub', megaMenu: true, megaMenuType: 'large', children: [
            {
                name: 'Digital', type: 'link', children: [
                    {path: '/home/no-sidebar/collection/all', name: 'Office Keys', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', name: 'Ebay VCC', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', name: 'Edu Emails', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', name: 'Office Keys', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', name: 'Ebay VCC', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', name: 'Edu Emails', type: 'link'},
                ]
            },
            {
                name: 'Physical', type: 'link', children: [
                    {path: '/home/no-sidebar/collection/all', name: 'Addidas', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', name: 'Nike', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', name: 'Apple', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', name: 'Addidas', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', name: 'Nike', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', name: 'Apple', type: 'link'},
                ]
            }
        ]
    },
];
