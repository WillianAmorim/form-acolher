import * as C from './styles';

import ImgHome from '../../assets/home-img.png'

import { AiFillInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { IoArrowDownCircle } from "react-icons/io5";

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <C.Container>
        <C.DivImage>
            <img src={ImgHome} alt="" />
        </C.DivImage>
        <C.DivIcons>
            <AiFillInstagram color='#FFF' size={20}/>
            <CgFacebook color='#FFF' size={20}/>
            <FaYoutube color='#FFF' size={20}/>
        </C.DivIcons>
        <C.SectionItens>
            <h1>Faça sua pré matrícula</h1>
            <p>RESPONDA O QUESTIONÁRIO ABAIXO</p>
            <IoArrowDownCircle className="bounce-icon" size={35} color="#FF2193"/>
            <Link to='/step1'>Responder Questionário</Link>
        </C.SectionItens>
    </C.Container>
  )
}

export default Home