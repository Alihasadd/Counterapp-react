<accordion className="jsx"></accordion>

function app(){
    return <div className="accordion">
        {data.map((item, i) => {
            <div className="item">
                <div className="q"></div>
                <h3>{item.q}</h3>
                <div className="a"></div>
                <h4>{item.a}</h4>
            </div>
        })}
        
        
         </div>
}

export default app


const qa = [
    {
        question: "Question 1",
        answer: "answer 1",
    },
    {
        question: "Question 2",
        answer: "answer 2",
    },
    {
        question: "Question 3",
        answer: "answer 3",
    }
]