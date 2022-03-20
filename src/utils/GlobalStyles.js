import React from 'react'
import { Global, css } from '@emotion/react'
import GlobalVar from './GlobalVar'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
      a{
        text-decoration: none;
      }
      nav{
        min-height: 50px;
        background-color: #FFEB99;
        padding:0.5rem 2rem;
        box-shadow: 0 0px 5px 1px #919191;
      }
      .sticky-top{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }

      .w-100{
        width:100px
      }

      .h-100{
        height:100px
      }

      .fixed-bottom{
        position: fixed;
        bottom:0;
        left:0;
        right:0
      }
      nav a{
        margin:0.5rem;
        font-weight: 500;
        color:grey
      }
      nav a:hover{
        color:${GlobalVar.secondaryColor};
      }
      nav .active{
        font-weight:bold;
        color:${GlobalVar.secondaryColor};
      }
      .f-20{
        font-size: 20px !important
      }
      nav svg{
        margin: 0.3rem
      }
      .space-between{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .container {
        background-color: #FFEB99;
        min-height:100vh;
        width:100%;
      }
      .container-description{
        flex:0.6;
        background-color: white;
        border-radius: 2rem;
        padding:2rem
      }
      .p-5{
        padding:5rem 0 5rem 0
      }
      .flex-center{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .sticky{
        position:sticky;
        top:30px
      }
      .btn-back{
        background-color: #1c1c1c60 !important;
        padding:1rem !important;
        position: fixed !important;
        top:20px !important;
        left:20px !important;
        border-radius:100% !important
      }
      .btn-back svg{
        color: white
      }
      .center{
        display:flex;
        align-items:center;
        justify-content:center
      }
      .row{
        display:flex;
        flex-direction:row;
        align-items:center
      }
      .wrap{
        max-width:100%;
        width:100%;
        display: inline-flex;
        flex-wrap: wrap;
        gap:5px;
      }
      .card-container{
        background-color:white;
        min-width:50px;
        min-height:50px;
        border-radius:15px;
        padding:1rem;
        // margin: 20px
      }
      .card-container:hover{
        box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
      }
      .evolution-container{
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
        display: flex !important;
        flex-direction: column;
        align-items: center;
        padding:1.5rem;
        box-shadow: 0 0 10px 2px rgba(0,0,0,.1);
      }

      .evolution-container img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
        object-fit: center
      }

      .arrow{
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .card-grey{
        background-color:#f4f4f4;
        width:100%;
        min-height:50px;
        border-radius:15px;
        padding: 10px 0;
        // margin: 20px
      }
      .card-title {
        font-size:16px;
        font-weight:bold;
        display:flex;
        color:#1a1a1a;
        margin: 5px
      }
      .detail-img{
        width:100%;
        flex: 0.4;
      }
      .detail-img img{
        width:100%
      }
      .img-container{
        justify-content:center;
        display:flex
      }
      .img-container img{
        width:70px;
        height:70px;
        object-fit:contain
      }
      .logo{
        font-size: 1.2rem;
        font-weight: bold;
        color:${GlobalVar.secondaryColor}
      }
      .card-img{
        width:120px;
        height:120px
      }

      .card-img-detail{
        width:250px;
        height:250px
      }
      small{
        font-size:10px;
        font-weight: 500;
        color:grey;
      }
      progress{
        -webkit-appearance: none;
        width: 100%;
        margin-bottom:10px;
        display:block;
        height:3px;
        margin-top:0.2rem
      }
      .progress::-webkit-progress-bar{
        background-color:#e4e4e4;
        height:3px !important;
        border-radius:10px !important;
        border:0px
      }

      .progress-detail::-webkit-progress-bar{
        background-color:#e4e4e4;
        height:8px !important;
        border-radius:10px !important;
        border:0px
      }
      .progress-hp::-webkit-progress-value{
        background-color:#FF0000;
        border-radius:10px !important;
      }

      .progress-defense::-webkit-progress-value{
        background-color:#F8D030;
        border-radius:10px !important;
      }

      .progress-attack::-webkit-progress-value{
        background-color:#6890F0;
        border-radius:10px !important;
      }

      .progress-speed::-webkit-progress-value{
        background-color:#F85888;
        border-radius:10px !important;
      }

      .progress-special-defense::-webkit-progress-value{
        background-color:#78C850;
        border-radius:10px !important;
      }

      .progress-special-attack::-webkit-progress-value{
        background-color:#1A87CF;
        border-radius:10px !important;
      }

      .font-secondary{
        font-size:12px;
        color:grey;
        font-weight:500;
        margin:0
      }

      .font-primary{
        font-size:12px;
        font-weight:500;
        margin:0
      }

      h5{
        color:#1a1a1a;
        font-size:14px;
        font-weight: 700;
        margin:0 0 5px 0
      }

      .mt-1{
        margin-top:0.5rem
      }

      .mt-2{
        margin-top:2rem
      }
      .text-center{
        text-align:center
      }

      .space-around{
        display:flex;
        justify-content:space-around;
        align-items: center
      }

      .btn {
        display: inline-block;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 0;
        padding: 0.7rem 3rem;
        font-size: 0.9rem;
        border-radius: 5px;
      }

      .btn-primary{
        background-color:${GlobalVar.secondaryColor};
        color:white
      }

      .badge-primary{
        background-color:${GlobalVar.secondaryColor};
        border-radius:100px;
        color:white;
        font-size:0.7rem;
        padding: 0.2rem 0.7rem;
        font-weight:600;
        margin: 5px
      }

      .container-grid {
        padding: 0;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(4,2fr);
        margin: 5px 15px;
        gap:20px;
        // position: relative;
      }

      .container-detail {
        padding: 30px;
        display: flex;
        flex-direction: row;
        gap:20px;
      }

      .card {
        grid-column: span 4;
      }

      @media screen and (min-width: 320px) and (max-width: 549px) {
        .container-grid {
          grid-template-columns: repeat(2,1fr) !important;
        }
        .container-detail {
          display: block !important;
          padding: unset;
          display: unset;
          flex-direction: unset;
          margin: unset;
          gap:unset;
        }
        .nav{
          display:none
        }
        .nav-top{
          justify-content:center !important
        }

        .evolution-container{
          width: 2rem;
          height: 2rem;
        }


        .container-bottom{
          background-color: white;
          padding:0 1rem 1rem 1rem;
          box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
          position: fixed;
          bottom:0;
          left:0;
          right:0
        }

        .container-description{
          flex:unset;
          border-radius: 2rem 2rem 0 0;
          padding:2rem 2rem 6rem 2rem
        }
      }

      @media screen and (min-width: 550px) and (max-width: 759px) {
        .container-grid {
          grid-template-columns: repeat(3,1fr) !important;
        }
        .container-detail {
          display: block !important;
        }
        .nav{
          display:none
        }
        .nav-top{
          justify-content:center !important
        }
        .container-detail {
          display: block !important;
          padding: unset;
          display: unset;
          flex-direction: unset;
          margin: unset;
          gap:unset;
        }

        .container-bottom{
          background-color: white;
          padding:0 1rem 1rem 1rem;
          box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
          position: fixed;
          bottom:0;
          left:0;
          right:0
        }

        .container-description{
          flex:unset;
          border-radius: 2rem 2rem 0 0;
          padding:2rem 2rem 6rem 2rem
        }

        .evolution-container{
          width: 3rem;
          height: 3rem;
        }
      }


      @media screen and (min-width: 760px) and (max-width: 959px) {
        .container-grid {
          grid-template-columns: repeat(4,1fr) !important;
        }
        .nav-bot{
          display:none
        }
        
        .evolution-container{
          width: 2rem;
          height: 2rem;
        }
      }

      @media screen and (min-width: 960px) {
        .container-grid {
          grid-template-columns: repeat(5,1fr) !important;
        }
        .nav-bot{
          display:none
        }
      }
    `}
    />
  )
}