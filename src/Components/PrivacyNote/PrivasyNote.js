import React, { useState } from 'react'
import './PrivacyNote.css'
import Switch from "react-switch";

function PrivasyNote() {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };
    const handleChange1 = nextChecked1 => {
        setChecked1(nextChecked1);
      };
    const handleChange2 = nextChecked2 => {
    setChecked2(nextChecked2);
    };

    return (
        <div>
            <h2>Standard Privacy Note</h2>
            <p>I warant that the above information is true and correct. I understand that failure to answer all question that listed in this application
                form may prevent L'OCCITANE from processing my application; and L'OCCITANE may refuce to accept this aplication in the right of my individual circumtance. I warant that the above information is true and correct. I understand that failure to answer all question that listed in this application
                form may prevent L'OCCITANE from processing my application; and L'OCCITANE may refuce to accept this aplication in the right of my individual circumtance. 
         
            </p>
            <p>
            I warant that the above information is true and correct. I understand that failure to answer all question that listed in this application
                form may prevent L'OCCITANE from processing my application; and L'OCCITANE may refuce to accept this aplication in the right of my individual circumtance. 
            </p>
            <p>
            I warant that the above information is true and correct. I understand that failure to answer all question that listed in this application
                form may prevent L'OCCITANE from processing my application; and L'OCCITANE may refuce to accept this aplication in the right of my individual circumtance. 
         
            </p>
            <p>
            I warant that the above information is true and correct. I understand that failure to answer all question that listed in this application
                form may prevent L'OCCITANE from processing my application; and L'OCCITANE may refuce to accept this aplication in the right of my individual circumtance. 
            </p>
            <p>
                I want to receive information or communication from L'OCCITANE
            </p>
            <div className='switch'>
                <div className='category'>
                    SMS & MObile Call <Switch onChange={handleChange}
                                              checked={checked}
                                              className="react-switch" 
                                        />
                </div>
                <div className='category'>
                    Emailing <Switch onChange={handleChange1}
                                              checked={checked}
                                              className="react-switch" 
                                        />
                </div>
                <div className='category'>
                    Mailing <Switch onChange={handleChange2}
                                              checked={checked}
                                              className="react-switch" 
                                        />
                </div>
            </div>

            <div className='term'>
                <input type='checkbox'></input>
                <p>I have read and understand the above term and condition and hereby agree that I will be bounded by these conditions and policies once I have submitted this application form.</p>
            </div>
        </div>
    )
}

export default PrivasyNote
