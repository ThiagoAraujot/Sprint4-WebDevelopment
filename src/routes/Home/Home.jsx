import './Home.scss'
import Navbar from "../../components/Navbar/Navbar";
import CardLeft from '../../components/CardLeft/CardLeft';
import CardRight from '../../components/CardRight/CardRight';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Forms from '../../components/Forms/Forms';

import girlImg from "../../assets/1-girl.png";
import girlImg2 from "../../assets/2-girl.png";
import enfermeira from "../../assets/enfermeira.png"
import enfermeira2 from "../../assets/enfermeira2.png"
import enfermeira3 from "../../assets/enfermeira3.png"


const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <CardRight
        id="public"
        img={girlImg}
        number="01"
        title="Sobre o público"
        first_text="No HC Gaming transformamos a jornada hospitalar das crianças em uma emocionante aventura! Para nossos pequenos heróis, cada missão é uma conquista, e cada procedimento é uma oportunidade para aprender e se divertir."
        second_text="Pais e responsáveis, somos seus aliados na busca por uma experiência positiva e compreensível. Para a equipe médica, o HC Gaming é uma ferramenta para tornar o trabalho ainda mais extraordinário. Juntos, estamos transformando a jornada da saúde infantil em momentos mágicos e inesquecíveis."
      />

      <CardLeft
        id="problema"
        img={girlImg2}
        number="02"
        title="Problemática"
        first_text="Na jornada hospitalar, cada detalhe conta. E sabemos que a falta de
        informações pode gerar mais do que dúvidas; pode criar
        ansiedades e tornar desafios ainda mais complexos. Mas e
        se pudéssemos transformar esses desafios em oportunidades para
        aventuras emocionantes?"
        second_text=""
      />

      <CardRight
        id="impactos"
        img={enfermeira3}
        number="03"
        title="Impactos negativos"
        first_text="A ansiedade associada aos exames pode ser avassaladora. O HC Gaming entra em cena para reduzir esse impacto negativo, transformando o desconhecido em desafios mais gerenciáveis."
        second_text="O medo e desconforto durante os exames resulta em menor colaboração. Nós procuramos encorajar uma participação mais ativa, criando um ambiente que motive as crianças a enfrentarem seus receios de maneira positiva."
      />

      <CardLeft
        id="gamification"
        img={girlImg}
        number="04"
        title="Gamificação"
        first_text="A gamificação é uma abordagem que incorpora elementos e mecânicas de jogos em contextos não relacionados a jogos, com o objetivo de tornar atividades mais envolventes e motivadoras."
        second_text="Com isso em mente, nossa proposta é um aplicativo mobile que abstrai toda etapa anterior ao procedimento de forma lúdica e divertida para os nossos pequenos heróis."
      />

      <CardRight
        id="objetivo"
        img={enfermeira}
        number="05"
        title="Objetivo"
        first_text="Transformar procedimentos médicos em emocionantes desafios, tornando cada momento no hospital uma aventura inesquecível para nossos pequenos heróis. Acreditamos que a jornada hospitalar das crianças pode ser mais do que apenas procedimentos médicos; pode ser uma emocionante aventura cheia de sorrisos, conquistas e heróis mirins!"
        second_text=""
      />

      <CardLeft
        id="positivos"
        img={enfermeira2}
        number="06"
        title="Impactos positivos"
        first_text="Adesão ao Tratamento Aumentada:
        HC Gaming impacta diretamente a adesão ao tratamento, promovendo resultados mais eficazes e positivos, ao tornar os exames mais agradáveis."
        second_text="Ansiedade Transformada em Desafios:
        Mudamos a narrativa da ansiedade para desafios emocionantes. Cada exame é agora uma jornada, reduzindo a tensão e criando um ambiente mais acolhedor para as crianças."
      />

      <Forms/>
      <Footer/>
    </>
  );
};

export default Home;
