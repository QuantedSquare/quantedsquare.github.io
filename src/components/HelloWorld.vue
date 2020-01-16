<template>
    <div>
        <!-- <v-container> -->
        <v-row class="qs-black head-row" justify="center" align="center">
            <svg class="lines" viewBox="0 0 3000 720" width="100%">
                <defs>
                    <linearGradient id="linearGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#A2FFAE" />
                        <stop offset="100%" stop-color="#0CCCF9" />
                    </linearGradient>
                    <linearGradient id="linearPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#FF1278" />
                        <stop offset="100%" stop-color="#AC01CF" />
                    </linearGradient>
                </defs>
                <path class="line" :d="lineDrawer(lines[0])" stroke="url(#linearGreen)" stroke-width="3" fill="none"></path>
                <path class="line" :d="lineDrawer(lines[1])" stroke="url(#linearPurple)" stroke-width="3" fill="none"></path>
                <image v-if="$vuetify.breakpoint.mdAndUp" :xlink:href="require('../assets/logo_couleur_blanc.png')" x="40%" y="250" width="20%" />
                <image v-if="$vuetify.breakpoint.smAndDown" :xlink:href="require('../assets/logo_couleur_blanc.png')" x="30%" y="230" width="40%" />
            </svg>
        </v-row>
        <v-row>
            <v-col cols="12" style="padding: inherit;">
                <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item small class="qs-pink-grad">
                        <!-- <span slot="opposite">2019</span> -->
                        <v-card class="mx-auto" max-width="400">
                            <v-img class="white--text align-end" height="200px" contain :src="require('../assets/techstars_paris.png')">
                                <!-- <v-card-title>Paris Techstars Associates</v-card-title> -->
                            </v-img>
                            <v-card-subtitle class="pb-0">2019 - Paris Techstars Associates</v-card-subtitle>
                            <v-card-text class="text--primary">
                                <p>We helped the 10 companies of Techstars Paris accelerate their product developement.</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="#FF1278" text href="https://www.linkedin.com/posts/techstars_techstarsgivesday-activity-6600772120865796096-fuqa">
                                    See more
                                </v-btn>
                                <v-btn color="#FF1278" text href="https://www.techstars.com/programs/paris-program/">
                                    Techstars
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item small class="qs-green-grad">
                        <!-- <span slot="opposite">2018</span> -->
                        <v-card class="mx-auto" max-width="400">
                            <!-- <v-img class="white--text align-end" height="200px" contain :src="require('../assets/qs-analytics.png')"> -->
                            <v-card-title>Quanted Square Analytics</v-card-title>
                            </v-img>
                            <v-card-subtitle class="pb-0">2019</v-card-subtitle>
                            <v-card-text class="text--primary">
                                <p>A product to help you understand your Google Analytics Data</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="#FF1278" text>
                                    Try it
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item small class="qs-pink-grad">
                        <!-- <span slot="opposite">2019</span> -->
                        <v-card class="mx-auto" max-width="400">
                            <v-img class="white--text align-end" height="200px" contain :src="require('../assets/techstars_paris.png')">
                                <!-- <v-card-title>Paris Techstars Associates</v-card-title> -->
                            </v-img>
                            <v-card-subtitle class="pb-0">2018 - Product developement</v-card-subtitle>
                            <v-card-text class="text--primary">
                                <p>We developed a medical MVP for one of Techstars companies.</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="#FF1278" text href="https://www.youtube.com/watch?v=Ap_2ve3Q920">
                                    See more
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
        <v-row class="qs-black" justify="center" align="center">
            <v-col cols="12" class="text-center">
                <h3 class="text-white">Who we are</h3>
            </v-col>
            <v-col cols="8" sm="3" md="2">
                <v-avatar class="avatar-pictures" color="white" size="100%">
                    <v-img contain style="filter: grayscale(1);" :src="require('../assets/fabien.jpg')"></v-img>
                </v-avatar>
                <v-row justify="center">
                    <v-btn class="social-btn" href="https://www.linkedin.com/in/fabien-ungerer-32b23863/" fab>
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn class="social-btn" href="https://twitter.com/GuySake" fab>
                        <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                </v-row>
            </v-col>
            <v-col cols="8" sm="3" offset-sm="2" md="2">
                <v-avatar class="avatar-pictures" color="white" size="100%">
                    <v-img contain style="filter: grayscale(1);" :src="require('../assets/julien.jpg')"></v-img>
                </v-avatar>
                <v-row justify="center">
                    <v-btn class="social-btn" href="https://www.linkedin.com/in/julien-leray-1b587a91/" fab>
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn class="social-btn" href="https://twitter.com/lerayjulien" fab>
                        <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="4" sm="2" md="1">
                <a href="https://vuejs.org/">
                    <v-img contain :src="require('../assets/logo.png')"></v-img>
                </a>
                <!-- </v-avata> -->
            </v-col>
            <v-col cols="4" sm="2" md="1">
                <a href="https://vuetifyjs.com/">
                    <v-img contain :src="require('../assets/logo.svg')"></v-img>
                </a>
            </v-col>
            <v-col cols="12" class="text-center">
                <p>
                    We are giving back to open source.<br />
                    And hope to be able to give more in the future.
                </p>
            </v-col>
        </v-row>
        <!-- </v-container> -->
    </div>
</template>
<script>
import { scaleLinear, min, max } from 'd3'
import * as shapes from 'd3-shape'

const nbPoints = 50,
    nbLines = 2,
    transitionTime = 1000;

export default {
    name: 'Home',
    data: function() {
        let xScale = scaleLinear(),
            yScale = scaleLinear();

        let lineDrawer = shapes.line()
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y))
            .curve(shapes['curveBasis']);

        xScale.range([0, 3000]);
        xScale.domain([0, 50]);;

        yScale.range([720, 0]);
        yScale.domain([0, 1000]);

        // console.log(xScale(10));

        return {
            xScale: xScale,
            yScale: yScale,
            lineDrawer: lineDrawer,
            lines: [this.getRandomData(), this.getRandomData()],
            animationStamp: null
        }
    },
    methods: {
        getRandomData: function() {
            let data = [];

            for (var i = 0; i <= nbPoints; i++) {
                data.push({
                    x: i,
                    y: Math.round(Math.random() * 600 + 200),
                    random: Math.round(Math.round(Math.random() * 2)) - 1
                });
            }

            return data;
        },
        setRandomY: function(timestamp) {
            if (!this.animationStamp) this.animationStamp = timestamp;

            let progress = timestamp - this.animationStamp;
            this.animationStamp = timestamp;

            // console.log(progress / 10);

            this.lines.forEach(line => {
                line.forEach(point => {
                    if (progress) {
                        point.y += (Math.round(Math.random() * 2) * point.random) * (progress / 20);
                    }

                    if (point.y > 800) {
                        point.random = -1
                    }
                    if (point.y < 200) {
                        point.random = 1
                    }
                });
            });

            requestAnimationFrame(this.setRandomY)
        }
    },
    mounted: function() {
        this.setRandomY();
    }
};
</script>
<style>
.head-row {
    max-height: 720px;
    min-height: 400px;
    /*width: 100%*/
}

.social-btn {
    margin: 10px;
}

.text-white {
    color: white;
}

.lines {
    max-height: 720px;
}

.avatar-pictures {
    border: white solid 5px;
}

.qs-black {
    background-color: #0F1120;
}

.qs-pink-grad .v-timeline-item__inner-dot {
    background: linear-gradient(45deg, #AC01CF, #FF1278) !important;
}

.qs-green-grad .v-timeline-item__inner-dot {
    background: linear-gradient(45deg, #A2FFAE, #0CCCF9) !important;
}
</style>