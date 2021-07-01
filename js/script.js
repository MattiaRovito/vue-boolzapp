//! Milestone 1
//* Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e  
//* dall’interlocutore (bianco) assegnando due classi CSS diverse
//* Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
//* nome e immagine di ogni contatto

//! Milestone 2
//* Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
//* messaggi relativi al contatto attivo all’interno del pannello della conversazione
//* Click sul contatto mostra la conversazione del contatto cliccato

//! Milestone 3
//* Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
//* “enter” il testo viene aggiunto al thread sopra, come messaggio verde
//* Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
//* un “ok” come risposta, che apparirà dopo 1 secondo.

//! Milestone 4
//* Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

//! Milestone 5 - opzionale
//* Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
//* permette di cancellare il messaggio selezionato



const app = new Vue ({

    el : "#app",

    data : {
        newMessage : '',
        counter : 0,
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
        
        contact(index){
            this.counter = index;
            console.log(this.counter);
        },
        pushToDo(){

           
            if( this.newMessage == ''  )
            {
                return;
            }
           
            const nuovoMessaggio = {
                date : dayjs().format("DD/MM/YYYY HH:mm:ss"),
                text : this.newMessage,
                status : 'sent'
            }
            this.contacts[this.counter].messages.push(nuovoMessaggio)

            this.newMessage = ""

            // console.log(nuovoMessaggio);
            // console.log(this.newMessage)

            setTimeout(() => {
                const nuovaRisposta = {
                    date : dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text : "Ok",
                    status : 'received'
                }
                this.contacts[this.counter].messages.push(nuovaRisposta)
            }, 1000);
        },
    }

});
