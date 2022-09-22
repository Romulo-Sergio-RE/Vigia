import styled from "styled-components";

export const ContainerNavBar = styled.div`
    .navigation {
        height: 5rem;
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        padding: 0.5rem 0rem;
        background-color: #12562A;
        color: black;
    }
    .brand-name {
        margin-left: 1rem;
        width: 5.938rem;
        height: 2.5rem;
    }
    .navigation-menu {
        margin-left: auto;
    }
    .navigation-menu ul {
        display: flex;
        padding: 0;
    }
    .navigation-menu li {
        list-style-type: none;
        margin: 0 1rem;
    }
    .navigation-menu li a {
        text-decoration: none;
        display: block;
        width: 100%;
        color: #f2f2f2;
        padding: 0.313rem;
        font-size: 1rem;
        :hover{
            width: 100%;
            height: auto;
            background-color: #f2f2f2;
            color: rgba(18, 86, 42, 1);
            border-radius:  0.625rem;
        }
    }
    .botao-aplicativo{
        width: 10rem;
        height: 2.5rem;
        background-color: #F2F2F2;
        color: #12562A;
        font-size: 1.125rem;
        font-weight: bold;
        border-radius:  0.625rem;
        border: none;
        cursor: pointer;
        transition: all 1s;
        margin-right: 1rem;
        :hover{
            transform: scale(1.03);
        }
    }
    .hamburger {
        border: 0;
        height: 40px;
        width: 40px;
        padding: 0.5rem;
        border-radius: 50%;
        background-color: rgba(18, 86, 42, 1);
        border: 2px solid #f2f2f2;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
        position: absolute;
        top: 50%;
        right: 25px;
        transform: translateY(-50%);
        display: none;
    }
    .hamburger:hover {
        background-color: rgba(18, 86, 42, 1);
    }
    @media screen and (max-width: 768px) {
        .botao-aplicativo{
            display: none;
        }
        .hamburger {
            display: block;
        }
        .navigation-menu ul {
            display: none;
        }
        .navigation-menu ul {
            position: absolute;
            top: 60px;
            left: 0;
            flex-direction: column;
            width: 100%;
            height: calc(100vh - 77px);
            background-color: rgba(18, 86, 42, 1);
        }
        .navigation-menu li {
            text-align: center;
            margin: 0;
        }
        .navigation-menu li a {
            color: #f2f2f2;
            padding: 1.5rem 0;
            display: flex;
            align-items: center;
            justify-content: center;

        }
        .navigation-menu li:hover {
            background-color: #eee;
        }
        .navigation-menu ul {
            display: none;
        }
        .navigation-menu.expanded ul {
            display: inline-block;
        }
    }
    @media screen and (max-width: 850px) {
        .botao-aplicativo{
            width: 7rem;
            height: 2.5rem;
        }
        .navigation-menu li {
            margin: 0 0.5rem;
        }
    }
`;