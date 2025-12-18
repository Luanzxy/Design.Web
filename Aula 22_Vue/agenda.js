var contatos = [
    {
        nome: "João",
        cel: "46235437",
        foto: "https://i.pinimg.com/originals/74/b6/5f/74b65fa406708114b3479f62b224ee64.jpg",
        favorito: true
    },
    {

        nome: "Luis",
        cel: "76431628",
        foto: "https://i.pinimg.com/originals/74/b6/5f/74b65fa406708114b3479f62b224ee64.jpg",
        favorito: false

    },
    {

        nome: "Júlia",
        cel: "53724682",
        foto: "https://i.pinimg.com/originals/74/b6/5f/74b65fa406708114b3479f62b224ee64.jpg",
        favorito: false
    },
    {

        nome: "Luan",
        cel: "987688179",
        foto: "https://i.pinimg.com/originals/74/b6/5f/74b65fa406708114b3479f62b224ee64.jpg",
        favorito: true
    },
    {

        nome: "Vitória",
        cel: "758497035",
        foto: "https://i.pinimg.com/originals/74/b6/5f/74b65fa406708114b3479f62b224ee64.jpg",
        favorito: true
    },
    {

        nome: "Ludy",
        cel: "372763899",
        foto: "https://i.pinimg.com/originals/74/b6/5f/74b65fa406708114b3479f62b224ee64.jpg",
        favorito: false

    }
]

const agenda = {
    data(){
        return{
            titulo: "Minha agenda de contatos com Vue",
            msg: "Olá, Vue!",
            contatos: window.contatos
        }
    }
}

Vue.createApp(agenda).mount("#app");