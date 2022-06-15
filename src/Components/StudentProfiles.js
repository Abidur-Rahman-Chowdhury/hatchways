import React, { useEffect, useState } from 'react';
import StudentProfile from './StudentProfile';

const StudentProfiles = () => {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchTags,setSearchTags]= useState('');

  const handleSearchByName = (e) => {
    const name = e.target.value;
    setSearchName(name);

    const fetchByName = studentProfiles.filter((profile) =>
      profile.firstName.toLowerCase().includes(searchName.toLocaleLowerCase())
    );
    console.log(fetchByName);
    setStudentProfiles(fetchByName);
  };

  const addTagsOnState = (id, tags) => {
    console.log(id, tags);

    const objectWithTags = studentProfiles.filter(
      (profile) => profile.id === id
    );
    if (objectWithTags[0].tags) {
      objectWithTags[0].tags = [...objectWithTags[0].tags, tags];
      console.log(objectWithTags);
    } else {
      objectWithTags[0].tags = [tags];
      
    }

    setStudentProfiles([...studentProfiles])
  };

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
      .then((res) => res.json())
      .then((data) => setStudentProfiles(data.students));
  }, []);

  const handleSearchTags = (e) => {
    const tagName = e.target.value; setSearchTags(tagName); console.log(searchTags, studentProfiles); const fetchByTagName = studentProfiles.filter(profile => profile?.tags?.filter(t => t.includes(tagName)).length > 0);
    console.log(fetchByTagName);
    setStudentProfiles(fetchByTagName); 


  }
  return (
    <div>
      <h1 className="text-4xl text-purple-500 text-center font-bold mb-5 mt-5">
        Students Profiles: {studentProfiles.length}
      </h1>

      <div className="w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search by name"
          className="border w-full p-2 outline-none"
          onChange={handleSearchByName}
        />
        <br />
        <input
          type="text"
          placeholder="Search by tag"
          className="border w-full p-2 outline-none"
          onKeyUp={handleSearchTags}
        />

      </div>

      <div>
        {studentProfiles?.map((profile) => (
          <StudentProfile
            key={profile.id}
            addTagsOnState={addTagsOnState}
            profile={profile}
          ></StudentProfile>
        ))}
      </div>
    </div>
  );
};

export default StudentProfiles;
