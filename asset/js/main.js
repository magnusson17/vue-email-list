/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati
*/
var app = new Vue(
    {
        el: "#root",
        data: {
            saveMail: "",
            mailArray: []
        },
        
        created() {
            // axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            //     .then((res) => {
            //         console.log(res);
            //         this.saveMail = res.data.response;
            // });
            this.mailArrayfunction()
        },

        methods: {
            mailArrayfunction: function() {
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        console.log(res);
                        this.saveMail = res.data.response;
                        this.mailArray.push(this.saveMail);
                    });
                }
            }
        }
    },
)
