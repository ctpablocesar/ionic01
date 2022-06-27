<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>List of songs</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">

            <ion-card v-for="el in lista" :key="el.key">
                <img :src="el.portada" class="img" />
                <ion-card-header>
                    <ion-card-subtitle>{{ el.cantante }}</ion-card-subtitle>
                    <ion-card-title>{{ el.nombre }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <p>Album: {{ el.album }}</p>
                    <p>Duration: {{ el.duracion }}</p>
                </ion-card-content>
            </ion-card>

        </ion-content>

    </ion-page>
</template>
<style>
.img {
    width: 100%;
    height: auto;
}
</style>

<script>
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonPage,
    IonHeader,
    IonContent
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CardPage',
    components: {
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
        IonPage,
        IonHeader,
        IonContent
    },

    data() {
        return {

            lista: [
                {
                    id: 1,
                    nombre: 'Potion',
                    portada: 'assets/Portadas/potion.jpg',
                    cantante: 'Dua Lipa, Calvin Harris, Young Thug',
                    duracion: '3:34 minutes',
                    album: 'Potion'
                },
                {
                    id: 2,
                    nombre: `Don't start now`,
                    portada: 'assets/Portadas/moonlight.jpg',
                    cantante: 'Dua Lipa',
                    duracion: '3:03 minutes',
                    album: 'Future Nostalgia: The Moonlight Edition'
                },
                {
                    id: 3,
                    nombre: 'Levitating',
                    portada: 'assets/Portadas/moonlight.jpg',
                    cantante: 'Dua Lipa, DaBaby',
                    duracion: '3:23 minutes',
                    album: 'Future Nostalgia: The Moonlight Edition'
                },
                {
                    id: 4,
                    nombre: 'New rules',
                    portada: 'assets/Portadas/new_rules.jpg',
                    cantante: 'Dua Lipa',
                    duracion: '3:29 minutes',
                    album: 'Dua Lipa'
                },
                {
                    id: 5,
                    nombre: 'Cold heart',
                    portada: 'assets/Portadas/cold_heart.jpg',
                    cantante: 'Dua Lipa, Elton John, PNAU',
                    duracion: '3:22 minutes',
                    album: 'The Lockdown Sessions'
                },
                {
                    id: 6,
                    nombre: 'Physical',
                    portada: 'assets/Portadas/moonlight.jpg',
                    cantante: 'Dua Lipa',
                    duracion: '3:13 minutes',
                    album: 'Future Nostalgia: The Moonlight Edition'
                },
                {
                    id: 7,
                    nombre: 'Break my heart',
                    portada: 'assets/Portadas/moonlight.jpg',
                    cantante: 'Dua Lipa',
                    duracion: '3:41 minutes',
                    album: 'Future Nostalgia: The Moonlight Edition'
                },
                {
                    id: 8,
                    nombre: 'Love again',
                    portada: 'assets/Portadas/moonlight.jpg',
                    cantante: 'Dua Lipa',
                    duracion: '4:18 minutes',
                    album: 'Future Nostalgia: The Moonlight Edition'
                },
                {
                    id: 9,
                    nombre: 'IDGAF',
                    portada: 'assets/Portadas/new_rules.jpg',
                    cantante: 'Dua Lipa',
                    duracion: '3:37 minutes',
                    album: 'Dua Lipa'
                },
                {
                    id: 10,
                    nombre: 'Hallucinate',
                    portada: 'assets/Portadas/moonlight.jpg',
                    cantante: 'Dua Lipa',
                    duracion: '3:28 minutes',
                    album: 'Future Nostalgia: The Moonlight Edition'
                },
                {
                    id: 11,
                    nombre: `We're good`,
                    portada: 'assets/Portadas/moonlight.jpg',
                    cantante: 'Dua Lipa',
                    duracion: '2:45 minutes',
                    album: 'Future Nostalgia: The Moonlight Edition'
                },
                {
                    id: 12,
                    nombre: 'Prisioner',
                    portada: 'assets/Portadas/moonlight.jpg',
                    cantante: 'Dua Lipa, Miley Cyrus',
                    duracion: '2:49 minutes',
                    album: 'Future Nostalgia: The Moonlight Edition'
                },
                {
                    id: 13,
                    nombre: 'Be the one',
                    portada: 'assets/Portadas/be_the_one.jpg',
                    cantante: 'Dua Lipa',
                    duracion: '3:22 minutes',
                    album: 'Dua Lipa'
                },
                {
                    id: 14,
                    nombre: 'Sweetest pie',
                    portada: 'assets/Portadas/sweetest_pie.jpg',
                    cantante: 'Dua Lipa, Megan Thee Stallion',
                    duracion: '3:21 minutes',
                    album: 'Sweetest Pie'
                },
                {
                    id: 15,
                    nombre: 'One kiss',
                    portada: 'assets/Portadas/one_kiss.jpg',
                    cantante: 'Dua Lipa, Calvin Harris',
                    duracion: '3:34 minutes',
                    album: 'One Kiss'
                }
            ],

        }
    }
});
</script>