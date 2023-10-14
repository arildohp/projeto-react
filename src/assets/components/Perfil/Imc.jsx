import {useState} from "react"


const imc = () => {
    let [Altura, setAltura] = useState(0);
    let [Peso, setPeso] = useState(0);
    

    const calculaIMC = ()=> {
        const multiplicacao = Altura * Altura;
        const imc = Peso / multiplicacao;

        if (imc <= 18.4) {
            return (
                <p>Você esta com seu peso abaixo do ideal.</p>
            )
        } if (imc >= 18.5  <= 24.8) {
            return (
                <p> parabens você esta com seu peso ideal.</p>
            )
        } if (imc => 24.9){
            return (
            <p>Você esta com seu peso acima do ideal.</p>
            )
        }

    }
      return(
            <form>
                <input type="number" placeholder="Digite sua altura" onChange={evento => setAltura(parseInt(evento.target.value))}/>
                <input type="number" placeholder="Digite sua peso" onChange={evento => setPeso(parseInt(evento.target.value))} />
                {calculaIMC()}
            </form>
           )
        }
   
        export default Imc
    