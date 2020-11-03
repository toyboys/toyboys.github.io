const app = new Vue({
    el: '#app',
    data(){
        return {
            options: '',
            texto: '',
        }
    },
    created(){
        this.texto = localStorage.getItem('textoTextArea')
    },
    methods: {
        saveDataLocalStorage(){
            localStorage.setItem('textoTextArea', this.texto)
        },
        modify(){
            //Reverse, Capitalized, UpperCase
            if(this.options === 'Capitalized'){
                this.texto = this.texto.toString().toLowerCase()

                let texto = this.texto.split(' ')

                const arr = texto.map(item => item.charAt(0).toUpperCase() + item.slice(1))
                
                this.texto = arr.join(' ')
            }

            if(this.options === 'Reverse'){
                let text = this.texto.split('').reverse().join('')

                this.texto = text
            }

            if(this.options === 'UpperCase'){
                this.texto = this.texto.toString().toUpperCase()
            }

            if(this.options === 'LowerCase'){
                this.texto = this.texto.toString().toLowerCase()
            }
        },
        clear(){
	        this.texto = ''
            localStorage.setItem('textoTextArea', '')
        },
        copy(){
            const texto = document.getElementById('texto')
            texto.select()
            texto.setSelectionRange(0,99999)
            document.execCommand("copy")
        },
        download(){
                const texto = document.getElementById("texto").value
                let titulo = "DOWNLOAD";               
                let blob = new Blob([texto], { type: "text/plain;charset=utf-8" })
                saveAs(blob, titulo + ".txt")
        }
    }
})