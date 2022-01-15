---
title: Projects
description: List of Metal Earth projects
sidebar: false
---

# Models

## Star Wars

<div class="images">
    <a href="/models/snowspeeder">
        <figure>
            <img src="/images/snowspeeder/entry.webp" alt="Model model, a Snowspeeder"/>
            <figcaption>Snowspeeder</figcaption>
        </figure>
    </a>
    <a href="/models/at-at">
        <figure>
            <img src="/images/at-at/entry.webp" alt="Metal model, an AT-AT"/>
            <figcaption>Imperial AT-AT</figcaption>
        </figure>
    </a>
    <a href="/models/kylo-ren-command-shuttle">
        <figure>
            <img src="/images/kylo-shuttle/entry.webp" alt="Metal model, Kylo Ren's Command Shuttle model"/>
            <figcaption>Kylo Ren's Command Shuttle</figcaption>
        </figure>
    </a>
</div>

## Batman

<div class="images">
    <a href="/models/batmobile-tv-series">
        <figure>
            <img src="/images/batmobile-tv/entry.webp" alt="Metal model, the Batmobile from the 1966 TV series"/>
            <figcaption>Batmobile: TV Series (1966)</figcaption>
        </figure>
    </a>
    <a href="/models/batmobile-batman-movie">
        <figure>
            <img src="/images/batmobile-movie/entry.webp" alt="Metal model, the Batmobile from the 1989 movie"/>
            <figcaption>Batmobile: Batman movie (1989)</figcaption>
        </figure>
    </a>
</div>

## Other

<div class="images">
    <a href="/models/sydney-opera-house">
        <figure>
            <img src="/images/sydney-opera-house/entry.webp" alt="Metal model, Sydney Opera House model"/>
            <figcaption>Sydney Opera House</figcaption>
        </figure>
    </a>
</div>

<style lang="scss">
    .images {
        margin: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        figure {
            transition: 100ms linear;

            img {
                filter: grayscale(1);
            }

            &:hover {
                transform: perspective(100px) translateZ(3px) rotateZ(-1deg);
                filter: drop-shadow(10px 10px 20px black);

                img {
                    filter: none;
                }
            }
        }
    }
</style>

## Other

- [DeLorean: Back to the Future](./other/back-to-the-future-delorean/)
