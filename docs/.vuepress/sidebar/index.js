// import { sidebar } from 'vuepress-theme-hope'

const sidebar = {
    '/category': [
        {
            text: 'Foo',
            prefix: '/foo/',
            children: [
                '' /* /foo/ */,
                'one' /* /foo/one.html */,
                'two' /* /foo/two.html */
            ]
        },
        {
            text: 'Bar',
            prefix: '/bar/',
            children: [
                '' /* /bar/ */,
                'three' /* /bar/three.html */,
                'four' /* /bar/four.html */
            ]
        }
    ]
}

export default sidebar
