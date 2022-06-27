<template>

    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>List</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">

            <ion-list-header v-if="!!myFavorites[0]">
                <ion-label>
                    <h1>
                        My favorites songs
                    </h1>
                </ion-label>
            </ion-list-header>
            <ion-list v-if="!!myFavorites[0]">
                <ion-item v-for="el in myFavorites" :key="el.key">
                    <ion-item>
                        <ion-label>{{ el }}</ion-label>
                    </ion-item>
                </ion-item>
            </ion-list>

            <ion-list-header>
                <ion-label>
                    <h1>
                        List of songs
                    </h1>
                </ion-label>
            </ion-list-header>
            <ion-list ref="closeSlidingItem">
                <ion-item-sliding v-for="el in lista" :key="el.key">
                    <ion-item>
                        <ion-label>{{ el.cancion }}</ion-label>
                    </ion-item>
                    <ion-item-options side="end">
                        <ion-item-option
                            @click="addFav(el), openToast(el.isFav ? 'Canción añadida a favoritos' : 'Canción eliminada de favoritos')">
                            <ion-icon v-if="el.isFav" name="heart"></ion-icon>
                            <ion-icon v-else name="heart-outline"></ion-icon>
                        </ion-item-option>
                    </ion-item-options>
                </ion-item-sliding>
            </ion-list>

        </ion-content>

    </ion-page>

</template>

<script>

import {
    IonPage,
    IonToolbar,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonTitle,
    IonHeader,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonListHeader,
    IonIcon,
    toastController
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ListPage',
    components: {
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonTitle,
        IonHeader,
        IonToolbar,
        IonPage,
        IonItemSliding,
        IonItemOption,
        IonItemOptions,
        IonListHeader,
        IonIcon,
    },

    data() {
        return {
            lista: [
                {
                    id: 1,
                    cancion: 'Potion',
                    isFav: false
                },
                {
                    id: 2,
                    cancion: `Don't start now`,
                    isFav: false
                },
                {
                    id: 3,
                    cancion: 'Levitating',
                    isFav: false
                },
                {
                    id: 4,
                    cancion: 'New rules',
                    isFav: false
                },
                {
                    id: 5,
                    cancion: 'Cold heart',
                    isFav: false
                },
                {
                    id: 6,
                    cancion: 'Physical',
                    isFav: false
                },
                {
                    id: 7,
                    cancion: 'Break my heart',
                    isFav: false
                },
                {
                    id: 8,
                    cancion: 'Love again',
                    isFav: false
                },
                {
                    id: 9,
                    cancion: 'IDGAF',
                    isFav: false
                },
                {
                    id: 10,
                    cancion: 'Hallucinate',
                    isFav: false
                },
                {
                    id: 11,
                    cancion: `We're good`,
                    isFav: false
                },
                {
                    id: 12,
                    cancion: 'Prisioner',
                    isFav: false
                },
                {
                    id: 13,
                    cancion: 'Be the one',
                    isFav: false
                },
                {
                    id: 14,
                    cancion: 'Sweetest pie',
                    isFav: false
                },
                {
                    id: 15,
                    cancion: 'One kiss',
                    isFav: false
                }
            ],
            myFavorites: []
        }
    },
    methods: {
        addFav: function (el) {
            if (!el.isFav) {
                this.myFavorites.push(el.cancion);
                el.isFav = true;
            } else {
                this.myFavorites = this.myFavorites.filter(item => item !== el.cancion);
                el.isFav = false;
            }
            this.$refs.closeSlidingItem.$el.closeSlidingItems();
        },
        async openToast(msj) {
            const toast = await toastController.create({
                message: msj,
                duration: 2000,
            });
            return toast.present();
        },

    }
});

</script>