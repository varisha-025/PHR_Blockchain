import * as React from 'react';



export default function FAQs() {

    return (
        <div className='faq-box'>
            <div className="faq-header">Frequently Asked Questions</div>

            <div className="faq-content">
                <div className="faq-question">
                    <input id="q1" type="checkbox" className="panel" />
                    <div className="plus">+</div>
                    <label htmlFor="q1" className="panel-title">What is the meaning of life?</label>
                    <div className="panel-content">42</div>
                </div>

                <div className="faq-question">
                    <input id="q2" type="checkbox" className="panel" />
                    <div className="plus">+</div>
                    <label htmlFor="q2" className="panel-title">How much wood would a woodchuck chuck?</label>
                    <div className="panel-content">A woodchuck would chuck all the wood he could chuck, if a woodchuck could chuck wood!</div>
                </div>

                <div className="faq-question">
                    <input id="q3" type="checkbox" className="panel" />
                    <div className="plus">+</div>
                    <label htmlFor="q3" className="panel-title">What happens if Pinocchio says, "my nose will grow now"?</label>
                    <div className="panel-content">Certain questions are better left &nbsp; <a href="https://en.wikipedia.org/wiki/The_Unanswered_Question" target="_blank">unanswered</a></div>
                </div>
            </div>
        </div>


    )
}








