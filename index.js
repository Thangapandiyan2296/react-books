import React from 'react';

import ReactDom from 'react-dom';
import './index.css';
/*function Greeting(){
   return <h2>This is Thangapandiyan. and this is my first Component....</h2>
}

reactDom.render(<Greeting></Greeting>,document.getElementById('root'))

function Greeting(){
  return(
    <div>
      <oerson></oerson>
      <message></message>
    </div>
  )
  }
  // eslint-disable-next-line no-unused-vars
  const person = () => {
   return (
   <h4>This is a message</h4>
   )
  }
// eslint-disable-next-line no-unused-vars
const message = () => {
  
  return (
  <p>This is a message</p>
  )
}
ReactDom.render(<Greeting></Greeting>,document.getElementById('root'));

/*function BookList(){
  return (
    <section>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}
const Book =() =>{
  return (
    <article>
    <BookImage/>
    <BookName/>
    <Author/>
    </article>
  )
  }

const BookImage = () =>{
    <img src="https://images-eu.ssl-images-amazon.com/images/I/51vgy3LMz6L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt='Agni Siragugal'/>
}
const BookName = () =>
{
  <h1>Wings of Fire</h1>
}
const Author = () =>{
   <h1>ABdul Kalam</h1>
}

reactDom.render(<BookList/>,document.getElementById('root'));


const author = 'Morgan Housal';
const title = 'Phsychology of money';
const img = "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL200_SR200,200_.jpg";

function BookList(){
  return (
    <section className='booklist'>
      <Book job='Developer'/>
      <Book title='randam-title' number={22}/>
    </section>
  )
}
const Book = (props) =>{
  return (
    <article>
      <img src={img}/>
      <h1>{author}</h1>
      <h1>{title}</h1>
      <p>{props.job}</p>
      <h1>{props.number}</h1>
      
    </article>
  )
}
ReactDom.render(<BookList/>,document.getElementById('root'))*/

/*const FirstBook = {
  img:'https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  Title: 'Atomic',
  Author: 'James',
}
const SecondBook={
img:'https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  Title: 'Global Area',
  Author: 'Morgan',
}
const ThirdBook={
  img:'https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    Title: 'Global Area',
    Author: 'Morgan',
}
const Book = (props) =>{
  
  return(
    <article>
      <img src={props.img}/>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      
    </article>
  )
}
function BookList(){
  return(
    <section>
    <Book img={FirstBook.img} title={FirstBook.Title} author = {FirstBook.Author}>
      <p>My name is thangapandiyan and am a fresher am a post graduate and 2019 passed out.</p>
    </Book>
    <Book img={SecondBook.img} title={SecondBook.Title} author = {SecondBook.Author}/>
    <Book img={ThirdBook.img} title={ThirdBook.Title} author = {ThirdBook.Author}/>
    </section>
  )
}
ReactDom.render(<BookList/>,document.getElementById('root'))*/

const FirstBook = {
  img:'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL200_SR200,200_.jpg',
  Title: 'Phsychology of money',
  Author: 'Morgan Housal',
}
const SecondBook={
img:'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg',
  Title: 'Atomic Habits',
  Author: 'James Clear',
}
const ThirdBook={
  img:'https://images-eu.ssl-images-amazon.com/images/I/41%2BgrDTP2FL._AC_UL200_SR200,200_.jpg',
    Title: 'Do Epic Shit',
    Author: 'Angur',
  }
  const FourthBook={
    img:'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg',
      Title: 'Global Area Ikigai',
      Author: 'Morgan',
    }
    const FifthBook={
      img:'https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg',
        Title: 'World Power...',
        Author: 'Norman Easy',
      }
      const SixthBook={
        img:'https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL200_SR200,200_.jpg',
          Title: 'My First Liberary',
          Author: 'Jack Dhass',
        }
        const SeventhBook={
          img:'https://images-eu.ssl-images-amazon.com/images/I/9173YBkMIsL._AC_UL200_SR200,200_.jpg',
            Title: 'Panchatanthra stories',
            Author: 'Om Books',
          }
          const EigthBook={
            img:'https://images-eu.ssl-images-amazon.com/images/I/710jnzKlDTL._AC_UL200_SR200,200_.jpg',
              Title: 'Attitude is Everything!',
              Author: 'Jeff keller',
            }
            const NinethBook={
              img:'https://images-eu.ssl-images-amazon.com/images/I/9167i2ioFaS._AC_UL200_SR200,200_.jpg',
                Title: 'A Yogi is Guide',
                Author: 'Yoghi',
              }
              const TenthBook={
                img:'https://images-eu.ssl-images-amazon.com/images/I/61ZNAnIrwwL._AC_UL200_SR200,200_.jpg',
                  Title: 'Eat that frog!',
                  Author: 'Brian Tracy',
                }
               const EleventhBook={
                  img:'https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg',
                    Title: 'The Alchemist',
                    Author: 'Paulo Ceolho',
                  }
                  
                  const TwelethBook={
                    img:'https://images-eu.ssl-images-amazon.com/images/I/81tSFxicufL._AC_UL200_SR200,200_.jpg',
                      Title: '400 Days',
                      Author: 'Chetan Bhagat',
                    }
      const Book = (props) =>
      {
        return(
           <article className="images">
             <div class="index"></div>
      <img src={props.img}/>
      <h1 className="title">{props.title}</h1>
      <h2 className='author'>{props.author}</h2>
      
    </article>
        )
      }
      function BookList()
      {
       return(
        <section>
        <Book img={FirstBook.img} title={FirstBook.Title} author = {FirstBook.Author}/>
      
        <Book img={SecondBook.img} title={SecondBook.Title} author = {SecondBook.Author}/>
        
        <Book img={ThirdBook.img} title={ThirdBook.Title} author = {ThirdBook.Author}/>
      
       <Book img={FourthBook.img} title={FourthBook.Title} author = {FourthBook.Author}/>

       <Book img={FifthBook.img} title={FifthBook.Title} author = {FifthBook.Author}/>
      
      <Book img={SixthBook.img} title={SixthBook.Title} author = {SixthBook.Author}/>
      
      <Book img={SeventhBook.img} title={SeventhBook.Title} author = {SeventhBook.Author}/>
    
     <Book img={EigthBook.img} title={EigthBook.Title} author = {EigthBook.Author}/>

     <Book img={NinethBook.img} title={NinethBook.Title} author = {NinethBook.Author}/>
      
      <Book img={TenthBook.img} title={TenthBook.Title} author = {TenthBook.Author}/>
      
      <Book img={EleventhBook.img} title={EleventhBook.Title} author = {EleventhBook.Author}/>
    
     <Book img={TwelethBook.img} title={TwelethBook.Title} author = {TwelethBook.Author}/>
      </section>

       ) 
      }
      ReactDom.render(<BookList/>,document.getElementById('root'))