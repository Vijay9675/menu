import React  ,{useState} from 'react'
import content from './Data';
import Question from './Question';
import './index.css'

const Main = () => {
   const[questions,setQuestions] = useState(content);
    console.log(content);
  return (
    <main>
        <div className='container'>
            <h3> Questions And Answer Required For Login </h3>
            <section className='info'>
                {
                    questions.map((question)=>{
                        return<Question key={question.id} {...question}  />
                    })
                }
            
            </section>
        </div>
    </main>
  );
}

export default Main