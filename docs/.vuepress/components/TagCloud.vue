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
console.log()
// 初始化图表
let myChart = null
onMounted(() => {
    if (chartRef.value) {
        myChart = echarts.init(chartRef.value)

        const option = {
            title: {
                // text: '词云',
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
                            value: tagMap.value.map[item].items.length,
                            path: tagMap.value.map[item].path
                        }
                    })
                }
            ]
        }

        myChart.setOption(option)

        myChart.on('click', (params) => {
            window.location.href = params.data.path
        })

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

// 图标点击事件
</script>

<template>
    <ParentLayout>
        <template #page>
            <main class="page">
                <div ref="chartRef" class="tag-wrapper">
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
// @use '@vuepress/theme-default/styles/mixins';

// .page {
//     margin-top: 3.6rem;
// }

.tag-wrapper {
    width: 250px; /* 容器宽度（2 * 半径） */
    height: 300px; /* 容器高度（2 * 半径） */
}
</style>
