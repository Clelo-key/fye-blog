<script setup>
import { useBlogCategory } from '@vuepress/plugin-blog/client'
import { useRoute } from 'vuepress/client'
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const tagMap = useBlogCategory('tag')

const chartRef = ref(null)
let myChart = null

// 动态加载 ECharts 和 ECharts-Wordcloud
const loadECharts = () => {
    return new Promise((resolve, reject) => {
        const echartScript = document.createElement('script')
        echartScript.src =
            'https://jsd.onmicrosoft.cn/npm/echarts@5.6.0/dist/echarts.min.js'
        echartScript.onload = () => {
            const wordcloudScript = document.createElement('script')
            wordcloudScript.src =
                'https://jsd.onmicrosoft.cn/npm/echarts-wordcloud@2.1.0/dist/echarts-wordcloud.min.js'
            wordcloudScript.onload = () => {
                resolve()
            }
            document.head.appendChild(wordcloudScript)
        }
        echartScript.onerror = reject
        document.head.appendChild(echartScript)
    })
}

// 初始化图表
const initChart = () => {
    if (chartRef.value) {
        myChart = window.echarts.init(chartRef.value)

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
}

onMounted(async () => {
    try {
        await loadECharts()
        initChart()
    } catch (error) {
        console.error('Failed to load ECharts scripts:', error)
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
