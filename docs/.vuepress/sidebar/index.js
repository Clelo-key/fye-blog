const sidebar = {
    '/category': [
        {
            text: '必看',
            icon: 'star',
            collapsible: true,
            prefix: 'javaguide/',
            children: [
                'intro',
                'use-suggestion',
                'contribution-guideline',
                'faq'
            ]
        },
        {
            text: '面试准备',
            icon: 'interview',
            collapsible: true,
            prefix: 'interview-preparation/',
            children: [
                'teach-you-how-to-prepare-for-the-interview-hand-in-hand',
                'resume-guide',
                'key-points-of-interview',
                'project-experience-guide',
                'interview-experience',
                'self-test-of-common-interview-questions'
            ]
        },
        {
            text: 'Java',
            icon: 'java',
            collapsible: true,
            prefix: 'java/',
            children: [
                {
                    text: '基础',
                    prefix: 'basis/',
                    icon: 'basic',
                    children: [
                        'java-basic-questions-01',
                        'java-basic-questions-02',
                        'java-basic-questions-03',
                        {
                            text: '重要知识点',
                            icon: 'star',
                            collapsible: true,
                            children: [
                                'why-there-only-value-passing-in-java',
                                'serialization',
                                'generics-and-wildcards',
                                'reflection',
                                'proxy',
                                'bigdecimal',
                                'unsafe',
                                'spi',
                                'syntactic-sugar'
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    '/article': [
        {
            text: '面试准备',
            icon: 'interview',
            collapsible: true,
            prefix: 'interview-preparation/',
            children: [
                'teach-you-how-to-prepare-for-the-interview-hand-in-hand',
                'resume-guide',
                'key-points-of-interview',
                'project-experience-guide',
                'interview-experience',
                'self-test-of-common-interview-questions'
            ]
        },
        {
            text: 'Java',
            icon: 'java',
            collapsible: true,
            prefix: 'java/',
            children: [
                {
                    text: '基础',
                    prefix: 'basis/',
                    icon: 'basic',
                    children: [
                        'java-basic-questions-01',
                        'java-basic-questions-02',
                        'java-basic-questions-03'
                    ]
                }
            ]
        }
    ]
}

export default sidebar
