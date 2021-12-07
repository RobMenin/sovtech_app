import React from 'react';
import '../Css/EducationStyle.css';
import Card from './Card';
import Data from './Data';
const Education=()=>{
    return(
        <>
        <h1>How I Got Here</h1>
        <div className="educations">
{Data.map((values)=>{
    return(<Card title1={values.Stitle}
        imgSource={values.imgsrc}
        descl={values.descl}
        btnService={values.btnService}
        />
    )
})}
            </div>
 </>
    )}
export default Education;
