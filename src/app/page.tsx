import Image from "next/image";
import "../styles/pages/page.scss"
import Camiseta1 from "../assets/1.png"
import Camiseta2 from "../assets/2.png"
import Camiseta3 from "../assets/3.png"

export default function Home() {
  return (
    <main>
      <a href="">
        <Image src={Camiseta1} width={520} height={480} alt={""} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </a>

      <a href="">
        <Image src={Camiseta2} width={520} height={480} alt={""} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </a>
    </main>
  )
}
