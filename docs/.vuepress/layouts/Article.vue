<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import { useBlogCategory } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/ArticleList.vue'
import TagClouds from '../components/TagCloud.vue'

const articles = useBlogType('article')
const tagMap = useBlogCategory('tag')
</script>

<template>
    <ParentLayout>
        <template #page>
            <main class="page">
                <ArticleList :items="tagMap.currentItems ?? articles.items" />
                <div class="tag-cloud">
                    <TagClouds />
                </div>
            </main>
        </template>
    </ParentLayout>
</template>

<style lang="scss" scoped>
.page {
    margin-top: 3.6rem;
    display: flex;
    justify-content: space-between;
    .article-wrapper {
        margin-left: 20rem;
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
