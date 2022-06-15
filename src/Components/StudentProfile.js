import React from 'react';

const StudentProfile = ({ profile, addTagsOnState }) => {
  const { city, company, email, firstName, lastName, grades, id, pic, skill, tags } =
    profile;
  const addTags = (e) => {
    const tag = e.target.value;
    const contentId = id;
    if (e.key === 'Enter') {
      addTagsOnState(contentId, tag);
      e.target.value = '';
    } 
   

  }
  const initialValue = 0;
  const average = grades?.reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), initialValue);
  return (
    <div className="">
      <div className="w-1/2  mx-auto ">

        <div className='collapse collapse-plus border border-base-300 bg-base-100 rounded-box'>
            <input type="checkbox" className="peer" />
        <div className="collapse-title text-lg font-bold">
          <div className="flex flex-col sm:pb-10 md:flex-row gap-10 ">
            <div className=' w-1/4'>
              <img className="rounded-full border-2 w-full" src={pic} alt="" />
            </div>
            <div  className=' w-1/2'>
              <h3 className="text-2xl font-bold uppercase">
                {firstName} {lastName}
              </h3>
              <p className='font-normal'>Email: {email}</p>
              <p  className='font-normal'>Company: {company}</p>
              <p  className='font-normal'>Skill: {skill}</p>
              <p className='font-normal'>Average: {average / 8}% </p>
                {
                  profile?.tags?.map((tag, index) => <span key={index} className="bg-gray-500 mr-2 p-2 mt-2 inline-block">{tag}</span>)
                }
                <br />
              <input type="text" className='font-normal border p-2 absolute mt-2 outline-none' placeholder='Add tag' onKeyUp={addTags} />
            

            </div>
           
          </div>
        </div>
        <div className="collapse-content bg-base-100 pl-2 md:pl-72">
          {
            grades?.map((grade, index) => <p key={index}>Test{index+1}:          {grade}% </p>)
          }
        </div>
          
      </div>
      </div>
      
    </div>
  );
};

export default StudentProfile;
