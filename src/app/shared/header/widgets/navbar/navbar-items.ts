// Menu
export interface Menu {
    path?: string;
    title?: string;
    type?: string;
    megaMenu?: boolean;
    megaMenuType?: string; // small, medium, large
    image?: string;
    children?: Menu[];
}

export const MENUITEMS: Menu[] = [
    {
        title: 'shop', type: 'sub', megaMenu: true, megaMenuType: 'large', children: [
            {
                title: 'Digital', type: 'link', children: [
                    {path: '/home/no-sidebar/collection/all', title: 'Office Keys', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', title: 'Ebay VCC', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', title: 'Edu Emails', type: 'link'}
                ]
            },
            {
                title: 'Physical', type: 'link', children: [
                    {path: '/home/no-sidebar/collection/all', title: 'Addidas', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', title: 'Nike', type: 'link'},
                    {path: '/home/no-sidebar/collection/all', title: 'Apple', type: 'link'}
                ]
            }
        ]
    },
];
