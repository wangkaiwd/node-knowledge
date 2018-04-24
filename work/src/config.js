/**
 * @description: 全局的配置文件
 */
import Home from 'src/pages/home'
import MyTable from 'src/pages/table'
import MyModal from 'src/pages/modal'
// 左侧导航配置文件
export const leftNavConfig = [
    {
        key: '1',
        icon: 'switcher',
        content: 'tab切换',
        href: '/tab',
        component: Home
    },
    {
        key: '2',
        icon: 'table',
        content: '表格',
        href: '/table',
        component: MyTable
    },
    {
        key: '3',
        icon: 'folder-add',
        content: '模态框',
        href: '/modal',
        component: MyModal,
    },
    {
        key: 'sub1',
        icon: 'mail',
        content: '文件夹',
        // href: '/folder',
        // component: 'Folder',
        child: [
            {
                key: '4',
                icon: '',
                content: 'option1',
                // href: '/folder/option1',
                // component: Option1
                child: [
                    {
                        key: 's-sub1',
                        icon: '',
                        content: 's-option1'
                    }
                ]
            },
        ]
    }
]