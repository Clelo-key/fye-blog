<script setup>
import { useBlogCategory } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { RouteLink, useRoute } from 'vuepress/client'
import ArticleList from '../components/ArticleList.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-wordcloud'

const route = useRoute()
const tagMap = useBlogCategory('tag')
const chartRef = ref(null)
console.log(tagMap.value)

// 词云数据
const data = [
    { name: 'Vue', value: 100 },
    { name: 'React', value: 80 },
    { name: 'Angular', value: 60 },
    { name: 'Svelte', value: 40 },
    { name: 'Node.js', value: 30 },
    { name: 'TypeScript', value: 50 },
    { name: 'JavaScript', value: 90 }
]

// 初始化图表
let myChart = null
onMounted(() => {
    if (chartRef.value) {
        myChart = echarts.init(chartRef.value)

        const option = {
            title: {
                text: '词云',
                left: 'center'
            },
            tooltip: {
                show: true
            },
            series: [
                {
                    type: 'wordCloud',
                    shape: 'circle', // 词云形状：circle（圆形）、cardioid（心形）、diamond（菱形）等
                    sizeRange: [12, 60], // 字体大小范围
                    rotationRange: [0, 0], // 旋转角度范围
                    rotationStep: 45, // 旋转步长
                    gridSize: 8, // 网格大小
                    drawOutOfBound: false, // 是否允许绘制超出画布的词
                    layoutAnimation: true, // 是否启用布局动画
                    textStyle: {
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        color: () => {
                            // 随机颜色
                            return (
                                'rgb(' +
                                [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') +
                                ')'
                            )
                        }
                    },
                    emphasis: {
                        focus: 'self',
                        textStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: Object.keys(tagMap.value.map).map((item) => {
                        return {
                            name: item,
                            value: tagMap.value.map[item].items.length
                        }
                    })
                }
            ]
        }

        myChart.setOption(option)

        // 窗口大小变化时调整图表大小
        window.addEventListener('resize', () => {
            myChart.resize()
        })
    }
})

// 组件卸载时销毁图表
onUnmounted(() => {
    if (myChart) {
        myChart.dispose()
        myChart = null
    }
})
</script>

<template>
    <ParentLayout>
        <template #page>
            <main class="page">
                <div ref="chartRef" id="container" class="tag-wrapper">
                    <!-- <RouteLink
                        v-for="({ items, path }, name, index) in tagMap.map"
                        :key="name"
                        :to="path"
                        :style="getTagStyle(index)"
                        :active="route.path === path"
                        class="tag"
                    >
                        {{ name }}
                        <span class="tag-num">
                            {{ items.length }}
                        </span>
                    </RouteLink> -->
                </div>
                <!-- <ArticleList :items="tagMap.currentItems ?? []" /> -->
            </main>
        </template>
    </ParentLayout>
</template>

<style lang="scss" scoped>
@use '@vuepress/theme-default/styles/mixins';

.page {
    margin-top: 3.6rem;
}

.tag-wrapper {
    position: relative;
    width: 400px; /* 容器宽度（2 * 半径） */
    height: 400px; /* 容器高度（2 * 半径） */
    // right: -100px;
    padding-top: 1rem !important;
    padding-bottom: 0 !important;
    font-size: 14px;
    margin: 0 auto;

    // .tag {
    //     position: absolute;
    //     display: inline-block;
    //     vertical-align: middle;
    //     border-radius: 0.25rem;
    //     border: 1px solid #ccc;
    //     overflow: hidden;
    //     white-space: nowrap;
    //     margin: 0;
    //     padding: 0.4rem 0.8rem;
    //     cursor: pointer;
    //     transition:
    //         background 0.3s,
    //         color 0.3s;

    //     .tag-num {
    //         display: inline-block;

    //         min-width: 1rem;
    //         height: 1.2rem;
    //         margin-inline-start: 0.2em;
    //         padding: 0 0.1rem;
    //         border-radius: 0.6rem;

    //         font-size: 0.7rem;
    //         line-height: 1.2rem;
    //         text-align: center;
    //     }

    //     &.route-link-active {
    //         background: var(--c-brand);
    //         color: green;

    //         .tag-num {
    //             color: var(--c-bg);
    //         }
    //     }
    //     &:hover {
    //         background: var(--c-brand); /* 背景颜色变化 */
    //         color: rgb(153, 195, 224); /* 文字颜色变化 */
    //         transform: scale(1.1); /* 缩放效果 */
    //         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影 */
    //     }
    // }
}
</style>
