<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import { useBlogCategory } from '@vuepress/plugin-blog/client'
import ArticleList from '../components/ArticleList.vue'
import TagClouds from '../components/TagCloud.vue'

const articles = useBlogType('article')
const tagMap = useBlogCategory('tag')
</script>

<template>
    <main class="page">
        <ArticleList :items="tagMap.currentItems ?? articles.items" />
        <div class="tag-cloud">
            <TagClouds />
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/palette';

.page {
    margin-top: 3.6rem;
    display: flex;
    // justify-content: space-between;
    .article-wrapper {
    }
    .tag-cloud {
        width: fit-content;
        height: fit-content;
        @media (max-width: 1150px) {
            display: none;
        }
    }
}
</style>
