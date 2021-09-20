//import * as Firebase from 'firebase/app'; //npm install firebase
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import * as firebase from 'firebase/app';
//import * as firestore from 'firebase/firestore';
//import auth from 'firebase/auth';
//import { seedDatabase } from '../seed';

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDtW6qpGU6S5Z04sP_zFbKQ3oo-B707XUs",
    authDomain: "lgcy-48b10.firebaseapp.com",
    projectId: "lgcy-48b10",
    storageBucket: "lgcy-48b10.appspot.com",
    messagingSenderId: "881941219265",
    appId: "1:881941219265:web:24990ae8f119c5cef81140",
    //measurementId: "G-GS77JHTZF3"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// eslint-disable-next-line
//seedDatabase(firebase); //run only once

export { firebase, FieldValue };

// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
function seedDatabase(firebase) {
    const users = [
        {
            userId: '6wxSF8BGnWfgUUd3xdSzvToc07c2',
            username: 'duyenle1312',
            fullName: 'Duyen Le',
            emailAddress: 'duyenle131202@gmail.com',
            following: ['2'],
            followers: ['2', '3'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'george',
            fullName: 'George Orwell',
            emailAddress: 'george@orwell.com',
            following: [],
            followers: ['6wxSF8BGnWfgUUd3xdSzvToc07c2'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'johnny',
            fullName: 'Johnny Dang',
            emailAddress: 'johnny@johnnydang.com',
            following: [],
            followers: ['6wxSF8BGnWfgUUd3xdSzvToc07c2'],
            dateCreated: Date.now()
        }
    ];

    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
        firebase.firestore().collection('users').add(users[k]);
    }

    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '2',
                imageSrc: `/images/users/raphael/${i}.jpg`,
                caption: 'Saint George and the Dragon',
                likes: [],
                comments: [
                    {
                        displayName: 'dali',
                        comment: 'Love this place, looks like my animal farm!'
                    },
                    {
                        displayName: 'orwell',
                        comment: 'Would you mind if I used this picture?'
                    }
                ],
                userLatitude: '40.7128',
                userLongitude: '74.0060',
                dateCreated: Date.now()
            });
    }
};