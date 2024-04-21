import React from 'react'

// This is a functional component called Consultant
// It takes two props: consultant_name and consultant_image
const Consultant = ( {consultant_name, consultant_image} ) => {
  return (
    <>
      <div className="">
        <div className="">
          {/* This is an image tag that displays the consultant's image */}
          <img src={`assets/img/staff/${consultant_image}`} alt="" className="" />
          <div className="">
            {/* This is a heading tag that displays the consultant's name */}
            <h3 className="">{consultant_name}</h3>
            {/* This is a paragraph tag that provides information about consultants */}
            <p className="">In Scotland, there are special doctors called "consultants" who are like the superhero leaders of different teams in the hospital. These doctors know a lot about specific things, like how to fix hearts or help with bones. They help make important decisions about how to take care of patients, kind of like a captain leading a team. They also teach younger doctors and do special projects to make sure everyone in the hospital does their best to help people get better. So, consultants are like the wise and experienced leaders who make sure everything runs smoothly and people get the best care possible.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Consultant