import { Link } from 'react-router-dom';
import * as C from './styles';

import { IoMdPerson } from "react-icons/io";
// import { FaBook } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
import { IoIosSchool } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";


  
type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' &&
                        <IoMdPerson className='icon' size={30} />
                    }
                    {icon === 'book' &&
                        <IoIosSchool className='icon' size={30} />
                    }
                    {icon === 'mail' &&
                        <BsFillTelephoneFill  className='icon' size={30} />
                    }
                    {icon === 'question' &&
                        <FaQuestion  className='icon' size={30} />
                    }
                    {icon === 'brain' &&
                        <GiBrain  className='icon' size={30} />
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}