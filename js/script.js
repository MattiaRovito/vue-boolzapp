



const app = new Vue ({

    el : "#app",

    data : {
        messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }
        ],
        contacts: [
            {
                name: 'Giangi',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    }
                ],
                
            },
            {
                name: 'Eddie',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Rocky',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ho fame',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Cosa vuoi mangiare stasera?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Pizzaaaa!!',
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Michael',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Cinema stasera?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Cosa proiettano?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Avengers: Endgame',
                    status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:38:55',
                        text: 'Sono già lì con i popcorn',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Brittany',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Che esercizi abbiamo domani?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Abbiamo inglese e matematica',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Voglio morire',
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Carl',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Calcetto stasera!',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'No mi dispiace, non posso',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Daiii manca il decimo!',
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'El Barba',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'L\'hai sentita l\'ultima dei Greta Van Fleet?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Dici Heat Above?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Si! È fantastica',
                    status: 'sent'
                    }
                ],
            },
        ],
        
    },

    mounted (){
        console.log(this.contacts);
    },
    
    methods : {

    }

});
