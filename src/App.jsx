import React from 'react'
import Card from './components/Card'
const App = () => {

  const jobData = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWhQy0735LhTmx8IrB-I6yWYdEqe-wXLmqwxD32JWHw&s=10",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJovWwWRCdXgXSaeHpeEkAZClChH5Li8YPZevB7hTEA&s=10",
    company: "Google",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$145/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJANb0XItp3xw1MB-dF4ccHxxCtgDc7auj-nAXlk-vw&s=10",
    company: "Microsoft",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple/000000",
    company: "Apple",
    datePosted: "7 days ago",
    post: "iOS Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$135/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta/0866FF",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$125/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix/E50914",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia/76B900",
    company: "NVIDIA",
    datePosted: "12 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4D6BNlzGJs1dP5ZZx3hwOnVUEmxlw8Pd0OIeDw1Jmtg&s=10",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$115/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYopZJ2wC02qp39igjulhundwhjl0F_-KbT452gJheA&s=10",
    company: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Cloud Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$105/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IGVv4fYruNAYSGf15qP3m4Ke-_PYQ_Id5fIcgpb6JQ&s=10",
    company: "IBM",
    datePosted: "10 weeks ago",
    post: "Data Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Bangalore, India"
  }
];


  return (
    <div className='parent'>
        {jobData.map(function(elem){
          return <Card company={elem.company} post={elem.post} logo={elem.brandLogo}  date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} loc={elem.location}/>
        })}
       </div>
    
  )
}

export default App
