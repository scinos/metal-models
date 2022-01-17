<template>
    <Layout>
        <template #page-bottom>
            <div class="footer">
                <div class="personal-card">
                    <div class="name">
                        <span class="prefix">by</span> Sergio Cinos
                    </div>
                    <div class="links">
                        <a href="https://twitter.com/scinos" class="twitter">
                            <inline-svg
                                :src="twitterLogoSrc"
                                aria-label="Twitter logo"
                            />
                        </a>
                        <a href="https://github.com/scinos" class="github">
                            <inline-svg
                                :src="githubLogoSrc"
                                aria-label="GitHub logo"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sergiocinos/"
                            class="linkedin"
                        >
                            <inline-svg
                                :src="linkedInLogoSrc"
                                aria-label="LinkedIn logo"
                            />
                        </a>
                    </div>
                </div>
                <div class="copyright">
                    © 2022, Sergio Cinos. All rights reserved.<br />
                    Built with
                    <a href="https://v2.vuepress.vuejs.org/" target="_blank"
                        >VuePress 2</a
                    >. Source in
                    <a
                        href="https://github.com/scinos/metal-models"
                        target="_blank"
                        >GitHub</a
                    >
                </div>
            </div>
        </template>
    </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import InlineSvg from 'vue-inline-svg'
import twitterLogoSrc from '../../public/logos/twitter.svg'
import githubLogoSrc from '../../public/logos/github.svg'
import linkedInLogoSrc from '../../public/logos/linkedin.svg'

export default {
    components: {
        Layout,
        InlineSvg,
    },
    setup() {
        return {
            twitterLogoSrc,
            githubLogoSrc,
            linkedInLogoSrc,
        }
    },
}
</script>

<style lang="scss">
.footer {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: var(--c-bg-secondary);
    padding-bottom: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    min-height: var(--size-bottom);

    .copyright {
        text-align: right;
        flex: 2;
        font-size: 0.8rem;
        margin-right: 2.5rem;
    }

    .personal-card {
        min-width: 10rem;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        .name {
            .prefix {
                font-weight: normal;
            }
            text-align: center;
            font-weight: bold;
            margin: 10px;
        }

        .links {
            display: flex;
            justify-content: space-evenly;
        }

        a {
            display: block;
            width: 24px;
            height: 24px;

            &:hover svg {
                fill: var(--c-brand-light);
            }

            svg {
                width: 24px;
                height: 24px;
                fill: var(--c-brand);
            }
        }
    }
}
</style>
