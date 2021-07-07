import { Regras } from "../Regras";

export class JuizService {


    parecer(jogada1: string, jogada2: string){
        return  Regras(jogada1,jogada2)
    }

}